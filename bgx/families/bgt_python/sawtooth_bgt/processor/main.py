# Copyright 2016 Intel Corporation
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# ------------------------------------------------------------------------------

import sys
import argparse
import pkg_resources
import logging

from sawtooth_sdk.processor.core import TransactionProcessor
from sawtooth_sdk.processor.log import init_console_logging
from sawtooth_sdk.processor.log import log_configuration
from sawtooth_sdk.processor.config import get_log_config
from sawtooth_sdk.processor.config import get_log_dir
from sawtooth_bgt.processor.handler import BgtTransactionHandler


LOGGER = logging.getLogger(__name__)
# testing NATS
import asyncio
from nats.aio.client import Client as NATS
from nats.aio.errors import ErrConnectionClosed, ErrTimeout, ErrNoServers
from sawtooth_sdk.protobuf.validator_pb2 import Message
#

DISTRIBUTION_NAME = 'sawtooth-bgt'
_NATS_ = True

def parse_args(args):
    parser = argparse.ArgumentParser(
        formatter_class=argparse.RawTextHelpFormatter)

    parser.add_argument(
        '-C', '--connect',
        default='tcp://localhost:4004',
        help='Endpoint for the validator connection')

    parser.add_argument('-v', '--verbose',
                        action='count',
                        default=0,
                        help='Increase output sent to stderr')

    try:
        version = pkg_resources.get_distribution(DISTRIBUTION_NAME).version
    except pkg_resources.DistributionNotFound:
        version = 'UNKNOWN'

    parser.add_argument(
        '-V', '--version',
        action='version',
        version=(DISTRIBUTION_NAME + ' (Hyperledger Sawtooth) version {}')
        .format(version),
        help='print version information')

    return parser.parse_args(args)

async def run(loop,nats):
    nc = NATS()

    try:
        # Setting explicit list of servers in a cluster.
        await nc.connect(servers=[nats], loop=loop)
    except ErrNoServers as e:
        LOGGER.debug("Cant connect err=%s",e)
        return
    LOGGER.debug("Connected '%s'",nats)

    async def message_handler(msg):
        subject = msg.subject
        reply = msg.reply
        data = msg.data.decode()
        LOGGER.debug("message_handler subject='%s' reply='%s'",subject,reply)
        for i in range(0, 20):
            message = Message(
                        correlation_id="XXX",
                        content="ii={i}".format(i=i).encode(),
                        message_type=Message.CLIENT_TRANSACTION_LIST_REQUEST)
            val = "ii={i}".format(i=i).encode()
            val1 = message.SerializeToString()
            LOGGER.debug("message_handler val=%s val=%s",val,val1)
            await nc.publish(reply,val1) 

    await nc.subscribe("help.>", cb=message_handler)
    LOGGER.debug("subscribe DONE")

    async def request_handler(msg):
        subject = msg.subject
        reply = msg.reply
        data = msg.data.decode()
        LOGGER.debug("data=%s data=%s",type(data),data)
        try:
            message = Message()
            mesg = message.ParseFromString(data)
            LOGGER.debug("data=%s mesg=%s",type(data),type(mesg))
            LOGGER.debug("Received a message on {subject} {reply}: {msg}".format(subject=subject,reply=reply,msg=data))
        except Exception as e:
            LOGGER.debug("Cant decode err=%s",e)
    # Signal the server to stop sending messages after we got 10 already.
    await nc.request("help.please", b'help', expected=11, cb=request_handler)

    try:
        # Flush connection to server, returns when all messages have been processed.
        # It raises a timeout if roundtrip takes longer than 1 second.
        await nc.flush(1)
    except ErrTimeout:
        LOGGER.debug("Flush timeout")

    await asyncio.sleep(1, loop=loop)

    # Drain gracefully closes the connection, allowing all subscribers to
    # handle any pending messages inflight that the server may have sent.
    await nc.drain()

def main(args=None):
    if args is None:
        args = sys.argv[1:]
    opts = parse_args(args)
    processor = None
    try:
        processor = TransactionProcessor(url=opts.connect)
        log_config = get_log_config(filename="bgt_log_config.toml")

        # If no toml, try loading yaml
        if log_config is None:
            log_config = get_log_config(filename="bgt_log_config.yaml")

        if log_config is not None:
            log_configuration(log_config=log_config)
        else:
            log_dir = get_log_dir()
            # use the transaction processor zmq identity for filename
            log_configuration(
                log_dir=log_dir,
                name="bgt-" + str(processor.zmq_id)[2:-1])

        init_console_logging(verbose_level=opts.verbose)

        # The prefix should eventually be looked up from the
        # validator's namespace registry.
        
        
        if _NATS_:
            LOGGER.debug("TESTING NATS CLIENT")
            loop = asyncio.get_event_loop()
            loop.run_until_complete(run(loop,"nats://nats:4222"))
            loop.close()
            LOGGER.debug("DONE TESTING NATS CLIENT")
        else:
            #processor = TransactionProcessor(url=opts.connect)
            handler = BgtTransactionHandler()
            processor.add_handler(handler)
            processor.start()
        
    except KeyboardInterrupt:
        pass
    except Exception as e:  # pylint: disable=broad-except
        print("Error: {}".format(e), file=sys.stderr)
    finally:
        if processor is not None:
            processor.stop()
