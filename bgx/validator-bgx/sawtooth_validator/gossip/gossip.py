# Copyright 2019 NTRLab
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
import logging
import copy
import time
import random
import os
import binascii
import json

from threading import Lock
from functools import partial
from collections import namedtuple
from enum import Enum

from sawtooth_validator.concurrent.thread import InstrumentedThread
from sawtooth_validator.protobuf.network_pb2 import DisconnectMessage
from sawtooth_validator.protobuf.network_pb2 import GossipMessage
from sawtooth_validator.protobuf.network_pb2 import GossipConsensusMessage
from sawtooth_validator.protobuf.network_pb2 import GossipBatchByBatchIdRequest
from sawtooth_validator.protobuf.network_pb2 import \
    GossipBatchByTransactionIdRequest
from sawtooth_validator.protobuf.network_pb2 import GossipBlockRequest
from sawtooth_validator.protobuf import validator_pb2
from sawtooth_validator.protobuf.network_pb2 import PeerRegisterRequest
from sawtooth_validator.protobuf.network_pb2 import PeerUnregisterRequest
from sawtooth_validator.protobuf.network_pb2 import GetPeersRequest
from sawtooth_validator.protobuf.network_pb2 import GetPeersResponse
from sawtooth_validator.protobuf.network_pb2 import NetworkAcknowledgement
from sawtooth_validator.exceptions import PeeringException
from sawtooth_validator.networking.interconnect import get_enum_name
LOGGER = logging.getLogger(__name__)


class PeerStatus(Enum):
    CLOSED = 1
    TEMP = 2
    PEER = 3


class EndpointStatus(Enum):
    # Endpoint will be used for peering
    PEERING = 1
    # Endpoint will be used to request peers
    TOPOLOGY = 2


EndpointInfo = namedtuple('EndpointInfo',
                          ['status', 'time', "retry_threshold"])

StaticPeerInfo = namedtuple('StaticPeerInfo',
                            ['time', 'retry_threshold', 'count'])

INITIAL_RETRY_FREQUENCY = 10
MAXIMUM_RETRY_FREQUENCY = 300

MAXIMUM_STATIC_RETRY_FREQUENCY = 3600
MAXIMUM_STATIC_RETRIES = 24

TIME_TO_LIVE = 3


class FbftTopology(object):
    """
    F-BFT topology 
    """
    def __init__(self):
        self._validator_id = None
        self._nest_colour = None
        self._genesis_node = None
        self._arbiters = {}
        self._cluster = None
        self._topology  = None

    @property
    def nest_colour(self):
        return self._nest_colour

    @property
    def cluster(self):
        return self._cluster

    @property
    def arbiters(self):
        return self._arbiters

    @property
    def genesis_node(self):
        return self._genesis_node if self._genesis_node else ''

    def get_topology(self,topology,validator_id):
        # get topology from string

        def get_cluster_info(arbiter_id,parent_name,name,children):
            for key,val in children.items():
                #LOGGER.debug('[%s]:child=%s val=%s',name,key[:8],val)
                if key == self._validator_id:
                    if arbiter_id is not None:
                        self._arbiters[arbiter_id] = ('arbiter',parent_name)
                    self._nest_colour = name
                    self._cluster    = children
                    LOGGER.debug('Found own NEST=%s validator_id=%s',name,self._validator_id)
                    return

                if 'cluster' in val:
                    cluster = val['cluster']
                    if 'name' in cluster and 'children' in cluster:
                        get_cluster_info(key,name,cluster['name'],cluster['children'])
                        if self._nest_colour is not None:
                            return

        def get_arbiters(arbiter_id,name,children):
            # make ring of arbiter - add only arbiter from other cluster
            for key,val in children.items():
                if self._nest_colour != name:
                    # check only other cluster and add delegate
                    if 'delegate' in val:
                        self._arbiters[key] = ('delegate',name)

                if self._genesis_node is None and 'genesis' in val:
                    # this is genesis node of all network
                    self._genesis_node = key
                if 'cluster' in val:
                    cluster = val['cluster']
                    if 'name' in cluster and 'children' in cluster:
                        get_arbiters(key,cluster['name'],cluster['children'])

        #topology = json.loads(stopology)
        self._validator_id = validator_id
        self._topology = topology
        #LOGGER.debug('get_topology=%s',topology)
        if 'name' in topology and 'children' in topology:
            get_cluster_info(None,None,topology['name'],topology['children'])
        if self._nest_colour is None:
            self._nest_colour = 'Genesis'
        else:
            # get arbiters
            get_arbiters(None,topology['name'],topology['children'])
            LOGGER.debug('Arbiters RING=%s GENESIS=%s',self._arbiters,self.genesis_node[:8])




class Gossip(object):
    def __init__(self, network,
                 settings_cache,
                 current_root_func,
                 consensus_notifier,
                 endpoint=None,
                 peering_mode='static',
                 initial_seed_endpoints=None,
                 initial_peer_endpoints=None,
                 minimum_peer_connectivity=3,
                 maximum_peer_connectivity=10,
                 topology_check_frequency=1
                 ):
        """Constructor for the Gossip object. Gossip defines the
        overlay network above the lower level networking classes.

        Args:
            network (networking.Interconnect): Provides inbound and
                outbound network connections.
            endpoint (str): The publically accessible zmq-style uri
                endpoint for this validator.
            peering_mode (str): The type of peering approach. Either 'static'
                or 'dynamic'. In 'static' mode, no attempted topology
                buildout occurs -- the validator only attempts to initiate
                peering connections with endpoints specified in the
                peer_list. In 'dynamic' mode, the validator will first
                attempt to initiate peering connections with endpoints
                specified in the peer_list and then attempt to do a
                topology buildout starting with peer lists obtained from
                endpoints in the seeds_list. In either mode, the validator
                will accept incoming peer requests up to max_peers.
            initial_seed_endpoints ([str]): A list of initial endpoints
                to attempt to connect and gather initial topology buildout
                information from. These are specified as zmq-compatible
                URIs (e.g. tcp://hostname:port).
            initial_peer_endpoints ([str]): A list of initial peer endpoints
                to attempt to connect and peer with. These are specified
                as zmq-compatible URIs (e.g. tcp://hostname:port).
            minimum_peer_connectivity (int): If the number of connected
                peers is below this threshold, the topology builder will
                continue to attempt to identify new candidate peers to
                connect with.
            maximum_peer_connectivity (int): The validator will reject
                new peer requests if the number of connected peers
                reaches this threshold.
            topology_check_frequency (int): The time in seconds between
                topology update checks.
        """
        self._peering_mode = peering_mode
        self._lock = Lock()
        self._network = network
        self._endpoint = endpoint
        self._initial_seed_endpoints = initial_seed_endpoints \
            if initial_seed_endpoints else []
        self._initial_peer_endpoints = initial_peer_endpoints \
            if initial_peer_endpoints else []
        self._minimum_peer_connectivity = minimum_peer_connectivity
        self._maximum_peer_connectivity = maximum_peer_connectivity
        self._topology_check_frequency = topology_check_frequency
        self._settings_cache = settings_cache
        self._current_root_func = current_root_func # block_store.chain_head_state_root
        self._consensus_notifier = consensus_notifier

        self._topology = None
        self._peers = {}
        
        # feder topology
        self._is_federations_assembled = False # point of assemble
        self._fbft = FbftTopology()            # F-BFT topology
        self._stopology = None                 # string 
        self._ftopology = None                 # json 
        """
        initial_peer_endpoints - peers from own cluster
        also we should know own atrbiter
        """
        LOGGER.debug("Gossip peers=%s",initial_peer_endpoints)

    @property
    def f_topology(self):
        return self._fbft
    @property
    def is_registered_engines(self):
        return self._consensus_notifier._registered_engines

    @property
    def is_federations_assembled(self):
        return self._is_federations_assembled

    def set_cluster(self,topology):
        self._fbft = topology
        LOGGER.debug("set cluster=%s arbiters=%s",self._fbft.cluster,self._fbft.arbiters)

    def get_exclude(self,cluster = None):
        # get list of peers not from our cluster or arbiters ring
        LOGGER.debug("get_exclude peers=%s",self._peers)
        exclude = []
        if cluster is None:
            cluster = self._fbft.cluster
        with self._lock:
            for peer in self._peers.keys() :
                public_key = self._network.connection_id_to_public_key(peer)
                if public_key not in cluster:
                    exclude.append(peer)
        LOGGER.debug("get_exclude exclude=%s",[self._peers[cid] for cid in exclude])
        return None if len(exclude) == 0 else exclude

    def notify_peer_connected(self,public_key,assemble=False):
        """
        Use topology for restrict peer notification
        """
        if public_key in self._fbft.cluster or public_key in self._fbft.arbiters:
            # own cluster or arbiters
            LOGGER.debug("Inform engine ADD peer=%s assemble=%s",public_key[:8],assemble)
            self._consensus_notifier.notify_peer_connected(public_key,assemble)
        else:
            LOGGER.debug("Inform engine IGNORE peer=%s",public_key[:8])

    def notify_peer_disconnected(self,public_key):
        """
        Use topology for restrict peer notification
        """
        if public_key in self._fbft.cluster or public_key in self._fbft.arbiters:
            # own cluster or arbiters
            LOGGER.debug("Inform engine DEL peer=%s",public_key[:8])
            self._consensus_notifier.notify_peer_disconnected(public_key)

    def send_peers(self, connection_id):
        """Sends a message containing our peers to the
        connection identified by connection_id.

        Args:
            connection_id (str): A unique identifier which identifies an
                connection on the network server socket.
        """
        with self._lock:
            # Needs to actually be the list of advertised endpoints of
            # our peers
            peer_endpoints = list(self._peers.values())
            if self._endpoint:
                peer_endpoints.append(self._endpoint)
            peers_response = GetPeersResponse(peer_endpoints=peer_endpoints)
            try:
                # Send a one_way message because the connection will be closed
                # if this is a temp connection.
                self._network.send(
                    validator_pb2.Message.GOSSIP_GET_PEERS_RESPONSE,
                    peers_response.SerializeToString(),
                    connection_id,
                    one_way=True)
            except ValueError:
                LOGGER.debug("Connection disconnected: %s", connection_id)

    def add_candidate_peer_endpoints(self, peer_endpoints):
        """Adds candidate endpoints to the list of endpoints to
        attempt to peer with.

        Args:
            peer_endpoints ([str]): A list of public uri's which the
                validator can attempt to peer with.
        """
        if self._topology:
            self._topology.add_candidate_peer_endpoints(peer_endpoints)
        else:
            LOGGER.debug("Could not add peer endpoints to topology. "
                         "ConnectionManager does not exist.")

    def get_peers(self):
        """Returns a copy of the gossip peers.
        """
        with self._lock:
            return copy.copy(self._peers)

    def is_peers(self):
        """
        use for check peer registration - we should waiting until some arbiter or own cluster peers appeared
        """
        with self._lock:
            peer_keys = [self._network.connection_id_to_public_key(cid) for cid in self._peers]
        for key  in set(peer_keys):
            if key in self._fbft.cluster or key in self._fbft.arbiters:
                return True
        return False
        #return max(peer_keys, key = lambda pk: 1 if pk in self._fbft.cluster or pk in self._fbft.arbiters  else 0) > 0

 
    def load_topology(self):
        LOGGER.debug("LOAD topology ...\n")
        self._stopology = self._settings_cache.get_setting(
                "bgx.consensus.pbft.nodes",
                self._current_root_func(),
                default_value='{}'
            ).replace("'",'"')
        self._ftopology = json.loads(self._stopology)
        LOGGER.debug("LOAD topology=%s",self._ftopology) 
        self._fbft.get_topology(self._ftopology,self._network.validator_id)
        

    def get_topology(self):
        """
        topology with cluster  
        FIXME - we should extend base version with information about status peers
        """
        if self._stopology is None:
            stopology = self._settings_cache.get_setting(
                "bgx.consensus.pbft.nodes",
                self._current_root_func(),
                default_value='{}'
            ).replace("'",'"')
        else:
            stopology = self._stopology
                
        #topology = json.loads(stopology)
        #LOGGER.debug("get topology=%s",stopology.encode("utf-8")) 
        return stopology.encode("utf-8")

    def peer_to_public_key(self, peer):
        """Returns the public key for the associated peer."""
        with self._lock:
            return self._network.connection_id_to_public_key(peer)

    def register_peer(self, connection_id, endpoint):
        """Registers a connected connection_id.

        Args:
            connection_id (str): A unique identifier which identifies an
                connection on the network server socket.
            endpoint (str): The publically reachable endpoint of the new
                peer
        """
        
        with self._lock:
            if len(self._peers) < self._maximum_peer_connectivity:
                LOGGER.debug("Current peers=%s",[cid[:8] for cid in self._peers])
                self._peers[connection_id] = endpoint
                self._topology.set_connection_status(connection_id,PeerStatus.PEER)
                LOGGER.debug("Added connection_id %s with endpoint %s, connected identities are now=%s",connection_id, endpoint, self._peers)
            else:
                raise PeeringException("At maximum configured number of peers: {} Rejecting peering request from {}.".format(self._maximum_peer_connectivity,endpoint))

        public_key = self.peer_to_public_key(connection_id)
        if public_key and self.is_federations_assembled:
            """
            send message about peer to consensus engine
            in case timeout for waiting peers is expired
            """
            self.notify_peer_connected(public_key)

    def unregister_peer(self, connection_id):
        """Removes a connection_id from the registry.

        Args:
            connection_id (str): A unique identifier which identifies an
                connection on the network server socket.
        """
        public_key = self.peer_to_public_key(connection_id)
        if public_key:
            self.notify_peer_disconnected(public_key)

        with self._lock:
            if connection_id in self._peers:
                del self._peers[connection_id]
                LOGGER.debug("Removed connection_id %s, connected identities are now=%s",connection_id, self._peers)
                self._topology.set_connection_status(connection_id,PeerStatus.TEMP)
            else:
                LOGGER.debug("Connection unregister failed as connection was not registered: %s",connection_id)

    def switch_on_federations(self):
        """
        inform consensus engine about peers and 
        send request about block HEAD
        that topology point of assemble after that we suppose all appeared peers inconsistent 
        """
        self._is_federations_assembled = True
        LOGGER.debug("switch_on_federations peers=%s",len(self._peers))
        with self._lock:
            peer_keys = [self._network.connection_id_to_public_key(cid) for cid in self._peers]
            keys_cid  = {self._network.connection_id_to_public_key(cid) : cid for cid in self._peers} 
        LOGGER.debug("switch_on_federations peers=%s",peer_keys)
        for public_key in set(peer_keys):
            if public_key:
                cid = keys_cid[public_key]
                LOGGER.debug("switch_on_federations peer=%s send HEAD request cid=%s",public_key[:8],cid[:8])
                if self._fbft.genesis_node == public_key:
                    self.send_block_request("HEAD", cid)
                self.notify_peer_connected(public_key,assemble=True)
                

    def get_time_to_live(self):
        time_to_live = \
            self._settings_cache.get_setting(
                "bgx.gossip.time_to_live",
                self._current_root_func(),
                default_value=TIME_TO_LIVE
            )
        return int(time_to_live)

    def broadcast_block(self, block, exclude=None, time_to_live=None):
        if time_to_live is None:
            time_to_live = self.get_time_to_live()
        LOGGER.debug("broadcast BLOCK=%s",block.header_signature[:8])
        gossip_message = GossipMessage(
            content_type=GossipMessage.BLOCK,
            content=block.SerializeToString(),
            time_to_live=time_to_live)

        self.broadcast(gossip_message, validator_pb2.Message.GOSSIP_MESSAGE, exclude)

    def broadcast_block_request(self, block_id):
        time_to_live = self.get_time_to_live()
        block_request = GossipBlockRequest(
            block_id=block_id,
            nonce=binascii.b2a_hex(os.urandom(16)),
            time_to_live=time_to_live)
        self.broadcast(block_request,validator_pb2.Message.GOSSIP_BLOCK_REQUEST)

    def send_block_request(self, block_id, connection_id):
        time_to_live = self.get_time_to_live()
        LOGGER.debug("gossip:send_block_request block_id=%s time_to_live=%s conn=%s",block_id,time_to_live,self._peers[connection_id])
        block_request = GossipBlockRequest(
            block_id=block_id,
            nonce=binascii.b2a_hex(os.urandom(16)),
            time_to_live=time_to_live)
        self.send(validator_pb2.Message.GOSSIP_BLOCK_REQUEST,
                  block_request.SerializeToString(),
                  connection_id,
                  one_way=True)

    def broadcast_batch(self, batch, exclude=None, time_to_live=None,candidate_id = None):
        if time_to_live is None:
            time_to_live = self.get_time_to_live()
        gossip_message = GossipMessage(
            content_type=GossipMessage.BATCH,
            content=batch.SerializeToString(),
            time_to_live=time_to_live,
            candidate_id=bytes.fromhex(candidate_id) if candidate_id is not None else None
            )
        LOGGER.debug("Gossip::broadcast_batch for candidate=%s",candidate_id[:8] if candidate_id is not None else None)

        self.broadcast(gossip_message, validator_pb2.Message.GOSSIP_MESSAGE, exclude)

    def broadcast_batches(self, batches, exclude=None, time_to_live=None):
        if time_to_live is None:
            time_to_live = self.get_time_to_live()
        gossip_message = GossipMessage(
            content_type=GossipMessage.BATCHES,
            content=batches.SerializeToString(),
            time_to_live=time_to_live,
            #candidate_id=bytes.fromhex(candidate_id) if candidate_id is not None else None,
            #block_num = block_num
            )
        LOGGER.debug("Gossip::broadcast_batches...")

        self.broadcast(gossip_message, validator_pb2.Message.GOSSIP_MESSAGE, exclude)


    def broadcast_batch_by_transaction_id_request(self, transaction_ids):
        time_to_live = self.get_time_to_live()
        batch_request = GossipBatchByTransactionIdRequest(
            ids=transaction_ids,
            nonce=binascii.b2a_hex(os.urandom(16)),
            time_to_live=time_to_live)
        self.broadcast(
            batch_request,
            validator_pb2.Message.GOSSIP_BATCH_BY_TRANSACTION_ID_REQUEST)

    def broadcast_batch_by_batch_id_request(self, batch_id):
        time_to_live = self.get_time_to_live()
        batch_request = GossipBatchByBatchIdRequest(
            id=batch_id,
            nonce=binascii.b2a_hex(os.urandom(16)),
            time_to_live=time_to_live)
        self.broadcast(
            batch_request,
            validator_pb2.Message.GOSSIP_BATCH_BY_BATCH_ID_REQUEST)

    def send_consensus_message(self, peer_id, message, public_key):
        """
        for instance ATRBITRATE message directly one peer
        FIXME - for speed reason make it like broadcast_consensus_message but send message only topology arbiters arbiter_consensus_message()
        """
        connection_id = self._network.public_key_to_connection_id(peer_id)
        if connection_id is None:
            LOGGER.debug('Gossip: send_consensus_message Disconnected peer=%d',peer_id[:8])
            return

        self.send(
            validator_pb2.Message.GOSSIP_CONSENSUS_MESSAGE,
            GossipConsensusMessage(
                message=message,
                sender_id=public_key,
                time_to_live=0).SerializeToString(),
            connection_id)

    def broadcast_consensus_message(self, message, public_key):
        """
        we should isolate other cluster from some message 
        """
        LOGGER.debug('Gossip: broadcast_consensus_message peers=%d',len(self._peers))
        self.broadcast(
            GossipConsensusMessage(
                message=message,
                time_to_live=self.get_time_to_live()),
            validator_pb2.Message.GOSSIP_CONSENSUS_MESSAGE)

    def broadcast_arbiter_consensus_message(self, message, public_key):
        # make exclude
        exclude = self.get_exclude(self._fbft.arbiters) if self._fbft.arbiters else None
        LOGGER.debug('Gossip: broadcast_arbiter_consensus_message exclude=%s',exclude)
        self.broadcast(
            GossipConsensusMessage(
                message=message,
                time_to_live=self.get_time_to_live()),
            validator_pb2.Message.GOSSIP_CONSENSUS_MESSAGE,
            exclude=exclude)

    def broadcast_cluster_consensus_message(self, message, public_key):
        # make exclude
        exclude = self.get_exclude(self._fbft.cluster) if self._fbft.cluster else None
        LOGGER.debug('Gossip: broadcast_cluster_consensus_message exclude=%s',exclude)
        self.broadcast(
            GossipConsensusMessage(
                message=message,
                time_to_live=self.get_time_to_live()),
            validator_pb2.Message.GOSSIP_CONSENSUS_MESSAGE,
            exclude=exclude)

    def send(self, message_type, message, connection_id, one_way=False):
        """Sends a message via the network.

        Args:
            message_type (str): The type of the message.
            message (bytes): The message to be sent.
            connection_id (str): The connection to send it to.
        """
        try:
            self._network.send(message_type, message, connection_id,one_way=one_way)
        except ValueError:
            LOGGER.debug("Connection %s is no longer valid. Removing from list of peers.",connection_id)
            if connection_id in self._peers:
                del self._peers[connection_id]

    def broadcast(self, gossip_message, message_type, exclude=None):
        """Broadcast gossip messages.

        Broadcast the message to all peers unless they are in the excluded
        list.

        Args:
            gossip_message: The message to be broadcast.
            message_type: Type of the message.
            exclude: A list of connection_ids that should be excluded from this
                broadcast.
        """
        LOGGER.debug("broadcast...")
        with self._lock:
            LOGGER.debug("broadcast start peers=%d",len(self._peers))
            if exclude is None:
                exclude = []
            for connection_id in self._peers.copy():
                if connection_id not in exclude:
                    LOGGER.info("gossip:broadcast: send %s to %s",get_enum_name(message_type),self._peers[connection_id])
                    self.send(
                        message_type,
                        gossip_message.SerializeToString(),
                        connection_id,
                        one_way=True)

    def connect_success(self, connection_id):
        """
        Notify topology that a connection has been properly authorized

        Args:
            connection_id: The connection id for the authorized connection.

        """
        if self._topology:
            self._topology.connect_success(connection_id)

    def remove_temp_endpoint(self, endpoint):
        """
        Remove temporary endpoints that never finished authorization.

        Args:
            endpoint: The endpoint that is not authorized to connect to the
                network.
        """
        if self._topology:
            self._topology.remove_temp_endpoint(endpoint)

    def start(self):
        # load topology
        self.load_topology()
        self._topology = ConnectionManager(
            gossip=self,
            network=self._network,
            endpoint=self._endpoint,
            initial_peer_endpoints=self._initial_peer_endpoints,
            initial_seed_endpoints=self._initial_seed_endpoints,
            peering_mode=self._peering_mode,
            min_peers=self._minimum_peer_connectivity,
            max_peers=self._maximum_peer_connectivity,
            check_frequency=self._topology_check_frequency)

        self._topology.start()

    def stop(self):
        for peer in self.get_peers():
            request = PeerUnregisterRequest()
            try:
                self._network.send(validator_pb2.Message.GOSSIP_UNREGISTER,
                                   request.SerializeToString(),
                                   peer)
            except ValueError:
                pass
        if self._topology:
            self._topology.stop()


class ConnectionManager(InstrumentedThread):
    def __init__(self, gossip, network, endpoint,
                 initial_peer_endpoints, initial_seed_endpoints,
                 peering_mode, min_peers=3, max_peers=10,
                 check_frequency=1,federations_timeout=6):
        """Constructor for the ConnectionManager class.

        Args:
            gossip (gossip.Gossip): The gossip overlay network.
            network (network.Interconnect): The underlying network.
            endpoint (str): A zmq-style endpoint uri representing
                this validator's publically reachable endpoint.
            initial_peer_endpoints ([str]): A list of static peers
                to attempt to connect and peer with.
            initial_seed_endpoints ([str]): A list of endpoints to
                connect to and get candidate peer lists to attempt
                to reach min_peers threshold.
            peering_mode (str): Either 'static' or 'dynamic'. 'static'
                only connects to peers in initial_peer_endpoints.
                'dynamic' connects to peers in initial_peer_endpoints
                and gets candidate peer lists from initial_seed_endpoints.
            min_peers (int): The minimum number of peers required to stop
                attempting candidate connections.
            max_peers (int): The maximum number of active peer connections
                to allow.
            check_frequency (int): How often to attempt dynamic connectivity.
        """
        super().__init__(name="ConnectionManager")
        self._lock = Lock()
        self._stopped = False
        self._gossip = gossip
        self._network = network
        self._endpoint = endpoint
        self._initial_peer_endpoints = initial_peer_endpoints
        self._initial_seed_endpoints = initial_seed_endpoints
        self._peering_mode = peering_mode
        self._min_peers = min_peers
        self._max_peers = max_peers
        self._check_frequency = check_frequency

        self._candidate_peer_endpoints = []
        # Seconds to wait for messages to arrive
        self._response_duration = 2
        self._connection_statuses = {}
        self._temp_endpoints = {}
        self._static_peer_status = {}
        # federation
        self._federations_timeout = federations_timeout
        self._check_time = 0
        self._peer_timeout = 0

    @property
    def is_federations_assembled(self):
        return self._gossip.is_federations_assembled

    def start(self):
        # First, attempt to connect to explicit peers
        
        for endpoint in self._initial_peer_endpoints:
            self._static_peer_status[endpoint] = \
                StaticPeerInfo(
                    time=0,
                    retry_threshold=INITIAL_RETRY_FREQUENCY,
                    count=0)

        super().start()

    def run(self):
        while not self._stopped:
            try:
                if self._peering_mode == 'dynamic':
                    self._refresh_peer_list(self._gossip.get_peers())
                    peers = self._gossip.get_peers()
                    peer_count = len(peers)
                    if peer_count < self._min_peers:
                        LOGGER.debug(
                            "Number of peers (%s) below "
                            "minimum peer threshold (%s). "
                            "Doing topology search.",
                            peer_count,
                            self._min_peers)

                        self._reset_candidate_peer_endpoints()
                        self._refresh_peer_list(peers)
                        # Cleans out any old connections that have disconnected
                        self._refresh_connection_list()
                        self._check_temp_endpoints()

                        peers = self._gossip.get_peers()

                        self._get_peers_of_peers(peers)
                        self._get_peers_of_endpoints(
                            peers,
                            self._initial_seed_endpoints)

                        # Wait for GOSSIP_GET_PEER_RESPONSE messages to arrive
                        time.sleep(self._response_duration)

                        peered_endpoints = list(peers.values())

                        with self._lock:
                            unpeered_candidates = list(
                                set(self._candidate_peer_endpoints) -
                                set(peered_endpoints) -
                                set([self._endpoint]))

                        LOGGER.debug("Peers are: %s. Unpeered candidates are: %s",peered_endpoints,unpeered_candidates)

                        if unpeered_candidates:
                            self._attempt_to_peer_with_endpoint(
                                random.choice(unpeered_candidates))

                if self._peering_mode == 'static':
                    self.retry_static_peering()

                time.sleep(self._check_frequency)
            except Exception:  # pylint: disable=broad-except
                LOGGER.exception("Unhandled exception during peer refresh")

    def stop(self):
        self._stopped = True
        for connection_id in self._connection_statuses:
            try:
                if self._connection_statuses[connection_id] == \
                        PeerStatus.CLOSED:
                    continue

                msg = DisconnectMessage()
                self._network.send(
                    validator_pb2.Message.NETWORK_DISCONNECT,
                    msg.SerializeToString(),
                    connection_id)
                self._connection_statuses[connection_id] = PeerStatus.CLOSED
            except ValueError:
                # Connection has already been disconnected.
                pass

    def retry_static_peering(self):
        """
        for federation topology try to wait peers connection before send CHAIN HEAD request
        we will wait own cluster peer's 
        """
        with self._lock:
            if not self.is_federations_assembled :
                if self._gossip.is_registered_engines and (self._peer_timeout > self._federations_timeout or self._gossip.is_peers()):
                    # not checked and there is some registered peers
                    if self._peer_timeout < self._federations_timeout :
                        self._peer_timeout = self._federations_timeout + 1 # don't check is_peers() 
                    else:
                        # no peers at all - make point of assemble
                        self.check_federations_status()
                            
                    if self._check_time > self._federations_timeout:
                        self.check_federations_status()
                    self._check_time += 1
                self._peer_timeout += 1
            
                
            # Endpoints that have reached their retry count and should be
            # removed
            to_remove = []
            #LOGGER.debug("retry_static_peering: _initial_peer_endpoints %s", len(self._initial_peer_endpoints))
            for endpoint in self._initial_peer_endpoints:
                connection_id = None
                try:
                    connection_id = self._network.get_connection_id_by_endpoint(endpoint)
                except KeyError:
                    #LOGGER.debug("retry_static_peering:KeyError for %s",endpoint)
                    pass

                static_peer_info = self._static_peer_status[endpoint]
                if connection_id is not None:
                    if connection_id in self._connection_statuses:
                        # Endpoint is already a Peer
                        #LOGGER.debug("retry_static_peering:Endpoint %s is already a Peer",endpoint)
                        if self._connection_statuses[connection_id] == PeerStatus.PEER:
                            # reset static peering info
                            self._static_peer_status[endpoint] = \
                                StaticPeerInfo(
                                    time=0,
                                    retry_threshold=INITIAL_RETRY_FREQUENCY,
                                    count=0)
                            continue
                #LOGGER.debug("retry_static_peering:KeyError for %s threshold=%s",str(time.time() - static_peer_info.time),static_peer_info.retry_threshold)
                if (time.time() - static_peer_info.time) > static_peer_info.retry_threshold:
                    LOGGER.debug("Endpoint has not completed authorization in %s seconds: %s",static_peer_info.retry_threshold,endpoint)
                    if connection_id is not None:
                        # If the connection exists remove it before retrying to
                        # authorize.
                        try:
                            self._network.remove_connection(connection_id)
                        except KeyError:
                            pass

                    if static_peer_info.retry_threshold == MAXIMUM_STATIC_RETRY_FREQUENCY:
                        if static_peer_info.count >= MAXIMUM_STATIC_RETRIES:
                            # Unable to peer with endpoint
                            to_remove.append(endpoint)
                            continue
                        else:
                            # At maximum retry threashold, increment count
                            self._static_peer_status[endpoint] = \
                                StaticPeerInfo(
                                    time=time.time(),
                                    retry_threshold=min(
                                        static_peer_info.retry_threshold * 2,
                                        MAXIMUM_STATIC_RETRY_FREQUENCY),
                                    count=static_peer_info.count + 1)
                    else:
                        self._static_peer_status[endpoint] = \
                            StaticPeerInfo(
                                time=time.time(),
                                retry_threshold=min(
                                    static_peer_info.retry_threshold * 2,
                                    MAXIMUM_STATIC_RETRY_FREQUENCY),
                                count=0)

                    LOGGER.debug("retry_static_peering:attempting to peer with %s", endpoint)
                    self._network.add_outbound_connection(endpoint)
                    self._temp_endpoints[endpoint] = EndpointInfo(
                        EndpointStatus.PEERING,
                        time.time(),
                        INITIAL_RETRY_FREQUENCY)

            for endpoint in to_remove:
                # Endpoints that have reached their retry count and should be
                # removed
                self._initial_peer_endpoints.remove(endpoint)
                del self._static_peer_status[endpoint]

    def add_candidate_peer_endpoints(self, peer_endpoints):
        """Adds candidate endpoints to the list of endpoints to
        attempt to peer with.

        Args:
            peer_endpoints ([str]): A list of public uri's which the
                validator can attempt to peer with.
        """
        with self._lock:
            for endpoint in peer_endpoints:
                if endpoint not in self._candidate_peer_endpoints:
                    self._candidate_peer_endpoints.append(endpoint)

    def set_connection_status(self, connection_id, status):
        self._connection_statuses[connection_id] = status

    def remove_temp_endpoint(self, endpoint):
        with self._lock:
            if endpoint in self._temp_endpoints:
                del self._temp_endpoints[endpoint]

    def _check_temp_endpoints(self):
        with self._lock:
            for endpoint in self._temp_endpoints:
                endpoint_info = self._temp_endpoints[endpoint]
                if (time.time() - endpoint_info.time) > \
                        endpoint_info.retry_threshold:
                    LOGGER.debug("Endpoint has not completed authorization in "
                                 "%s seconds: %s",
                                 endpoint_info.retry_threshold,
                                 endpoint)
                    try:
                        # If the connection exists remove it before retrying to
                        # authorize. If the connection does not exist, a
                        # KeyError will be thrown.
                        conn_id = \
                            self._network.get_connection_id_by_endpoint(
                                endpoint)
                        self._network.remove_connection(conn_id)
                    except KeyError:
                        pass

                    self._network.add_outbound_connection(endpoint)
                    self._temp_endpoints[endpoint] = EndpointInfo(
                        endpoint_info.status,
                        time.time(),
                        min(endpoint_info.retry_threshold * 2,
                            MAXIMUM_RETRY_FREQUENCY))

    def _refresh_peer_list(self, peers):
        for conn_id in peers:
            try:
                self._network.get_connection_id_by_endpoint(
                    peers[conn_id])
            except KeyError:
                LOGGER.debug("removing peer %s because "
                             "connection went away",
                             peers[conn_id])

                self._gossip.unregister_peer(conn_id)
                if conn_id in self._connection_statuses:
                    del self._connection_statuses[conn_id]

    def _refresh_connection_list(self):
        with self._lock:
            closed_connections = []
            for connection_id in self._connection_statuses:
                if not self._network.has_connection(connection_id):
                    closed_connections.append(connection_id)

            for connection_id in closed_connections:
                del self._connection_statuses[connection_id]

    def _get_peers_of_peers(self, peers):
        get_peers_request = GetPeersRequest()

        for conn_id in peers:
            try:
                self._network.send(
                    validator_pb2.Message.GOSSIP_GET_PEERS_REQUEST,
                    get_peers_request.SerializeToString(),
                    conn_id)
            except ValueError:
                LOGGER.debug("Peer disconnected: %s", conn_id)

    def _get_peers_of_endpoints(self, peers, endpoints):
        get_peers_request = GetPeersRequest()
        LOGGER.debug("gossip:_get_peers_of_endpoints endpoints=%d ",len(endpoints))
        for endpoint in endpoints:
            conn_id = None
            try:
                conn_id = self._network.get_connection_id_by_endpoint(
                    endpoint)

            except KeyError:
                # If the connection does not exist, send a connection request
                with self._lock:
                    if endpoint in self._temp_endpoints:
                        del self._temp_endpoints[endpoint]

                    self._temp_endpoints[endpoint] = EndpointInfo(
                        EndpointStatus.TOPOLOGY,
                        time.time(),
                        INITIAL_RETRY_FREQUENCY)

                    self._network.add_outbound_connection(endpoint)

            # If the connection does exist, request peers.
            if conn_id is not None:
                if conn_id in peers:
                    # connected and peered - we've already sent peer request
                    continue
                else:
                    # connected but not peered
                    if endpoint in self._temp_endpoints:
                        # Endpoint is not yet authorized, do not request peers
                        continue

                    try:
                        LOGGER.debug("gossip:Endpoint %s send  GOSSIP_GET_PEERS_REQUEST",endpoint)
                        self._network.send(
                            validator_pb2.Message.GOSSIP_GET_PEERS_REQUEST,
                            get_peers_request.SerializeToString(),
                            conn_id)
                    except ValueError:
                        LOGGER.debug("Connection disconnected: %s", conn_id)

    def _attempt_to_peer_with_endpoint(self, endpoint):
        LOGGER.debug("Attempting to connect/peer with %s", endpoint)

        # check if the connection exists, if it does - send,
        # otherwise create it
        try:
            connection_id = \
                self._network.get_connection_id_by_endpoint(
                    endpoint)

            register_request = PeerRegisterRequest(
                endpoint=self._endpoint)

            self._network.send(
                validator_pb2.Message.GOSSIP_REGISTER,
                register_request.SerializeToString(),
                connection_id,
                callback=partial(
                    self._peer_callback,
                    endpoint=endpoint,
                    connection_id=connection_id))
        except KeyError:
            # if the connection uri wasn't found in the network's
            # connections, it raises a KeyError and we need to add
            # a new outbound connection
            with self._lock:
                self._temp_endpoints[endpoint] = EndpointInfo(
                    EndpointStatus.PEERING,
                    time.time(),
                    INITIAL_RETRY_FREQUENCY)
            self._network.add_outbound_connection(endpoint)

    def _reset_candidate_peer_endpoints(self):
        with self._lock:
            self._candidate_peer_endpoints = []

 
    def check_federations_status(self):
        """
        check may be we can send HEAD block request
        """
        LOGGER.debug("CHECK federations_status !\n")
        self._gossip.switch_on_federations()

    def _peer_callback(self, request, result, connection_id, endpoint=None):
        LOGGER.debug("_peer_callback %s",endpoint)
        with self._lock:
            ack = NetworkAcknowledgement()
            ack.ParseFromString(result.content)

            if ack.status == ack.ERROR:
                LOGGER.debug("Peering request to %s was NOT successful",connection_id)
                self._remove_temporary_connection(connection_id)
            elif ack.status == ack.OK:
                LOGGER.debug("Peering request to %s was successful",connection_id[:8])
                if endpoint:
                    try:
                        self._gossip.register_peer(connection_id, endpoint)
                        self._connection_statuses[connection_id] = PeerStatus.PEER
                        LOGGER.debug("Peering register_peer send_block_request to conn=%s key=%s", endpoint,self._gossip.peer_to_public_key(connection_id) )
                        """
                        for federation topology try to wait sometime until peers connected
                        and only after this timeout send HEAD block request
                        """
                        #self._gossip.send_block_request("HEAD", connection_id)

                    except PeeringException as e:
                        # Remove unsuccessful peer
                        LOGGER.warning('Unable to successfully peer with connection_id: %s, due to %s',connection_id[:10], str(e))

                        self._remove_temporary_connection(connection_id)
                else:
                    LOGGER.debug("Cannot register peer with no endpoint for connection_id: %s",connection_id)
                    self._remove_temporary_connection(connection_id)

    def _remove_temporary_connection(self, connection_id):
        status = self._connection_statuses.get(connection_id)
        if status == PeerStatus.TEMP:
            LOGGER.debug("Closing connection to %s", connection_id)
            msg = DisconnectMessage()
            try:
                self._network.send(validator_pb2.Message.NETWORK_DISCONNECT,
                                   msg.SerializeToString(),
                                   connection_id)
            except ValueError:
                pass
            del self._connection_statuses[connection_id]
            self._network.remove_connection(connection_id)
        elif status == PeerStatus.PEER:
            LOGGER.debug("Connection close request for peer ignored: %s",connection_id)
        elif status is None:
            LOGGER.debug("Connection close request for unknown connection ignored: %s",connection_id)

    def connect_success(self, connection_id):
        """
        Check to see if the successful connection is meant to be peered with.
        If not, it should be used to get the peers from the endpoint.
        """
        endpoint = self._network.connection_id_to_endpoint(connection_id)
        endpoint_info = self._temp_endpoints.get(endpoint)

        LOGGER.debug("Endpoint has completed authorization: %s (id: %s)",endpoint,connection_id)
        if endpoint_info is None:
            LOGGER.debug("Received unknown endpoint: %s", endpoint)

        elif endpoint_info.status == EndpointStatus.PEERING:
            self._connect_success_peering(connection_id, endpoint)

        elif endpoint_info.status == EndpointStatus.TOPOLOGY:
            self._connect_success_topology(connection_id)

        else:
            LOGGER.debug("Endpoint has unknown status: %s", endpoint)

        with self._lock:
            if endpoint in self._temp_endpoints:
                del self._temp_endpoints[endpoint]

    def _connect_success_peering(self, connection_id, endpoint):
        LOGGER.debug("Connection to %s succeeded endpoint=%s", connection_id,endpoint)

        register_request = PeerRegisterRequest(
            endpoint=self._endpoint)
        self._connection_statuses[connection_id] = PeerStatus.TEMP
        try:
            self._network.send(
                validator_pb2.Message.GOSSIP_REGISTER,
                register_request.SerializeToString(),
                connection_id,
                callback=partial(
                    self._peer_callback,
                    connection_id=connection_id,
                    endpoint=endpoint))
        except ValueError:
            LOGGER.debug("Connection disconnected: %s", connection_id)

    def _connect_success_topology(self, connection_id):
        LOGGER.debug("Connection to %s succeeded for topology request",connection_id)

        self._connection_statuses[connection_id] = PeerStatus.TEMP
        get_peers_request = GetPeersRequest()

        def callback(request, result):
            # request, result are ignored, but required by the callback
            self._remove_temporary_connection(connection_id)

        try:
            self._network.send(
                validator_pb2.Message.GOSSIP_GET_PEERS_REQUEST,
                get_peers_request.SerializeToString(),
                connection_id,
                callback=callback)
        except ValueError:
            LOGGER.debug("Connection disconnected: %s", connection_id)