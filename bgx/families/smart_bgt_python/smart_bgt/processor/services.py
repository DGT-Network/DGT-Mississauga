
# Copyright 2018 NTRlab (https://ntrlab.ru)
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# Author: Mikhail Kashchenko


import logging
import sys
import json
from web3 import Web3, HTTPProvider
from sawtooth_sdk.processor.exceptions import InternalError
from smart_bgt.processor.token import Token, MetaToken
from collections import namedtuple

LOGGER = logging.getLogger(__name__)

class BGXlistener:
    
    DECAir = '{}'
    DECOwn = '{}'
    def balanceOf(wallet_address):
        DEC_ADDRESS = "0xA442f92796E756dA0b8d4AA88552131A042A9d0E"
        CONTRACT_ADDRESS = "0x1046154E52152411f3DA880661B2E5E4a6fb86E8" #'0xa442f92796e756da0b8d4aa88552131a042a9d0e' # '0x11Ce8357fa42Dc336778381865a7ED1c76b38C4a'
        if BGXlistener.DECAir == '{}':
            with open('./DECAir.json') as file:
                #BGXlistener.DECAir = file.readlines()
                try:
                    decJson = json.load(file)
                    BGXlistener.DECAir = json.dumps(decJson)
                except:
                    LOGGER.debug('BGXlistener cant read json %s',sys.exc_info()[0])

        if BGXlistener.DECOwn == '{}':
            with open('./DEC.json') as file:
                try:
                    decJson = json.load(file)
                    BGXlistener.DECOwn = json.dumps(decJson)
                except:
                    LOGGER.debug('BGXlistener cant read json %s',sys.exc_info()[0])

        if True :
            # Connecting to test net ropsten through infura
            infura_provider = HTTPProvider('https://ropsten.infura.io')
            web3 = Web3(infura_provider)

            if not web3.isConnected():
                LOGGER.debug('WEB3 is not connected')
                raise InternalError('Ethereum listener - WEB3 is not connected')

            addr = DEC_ADDRESS
            LOGGER.debug('WEB3 GET CONTRACT=%s wallet_address=%s',CONTRACT_ADDRESS,wallet_address)
            #contract = web3.eth.contract(address=CONTRACT_ADDRESS, abi=DECAir ) #CONTRACT_INTERFACE)
            contract = web3.eth.contract(address=addr, abi=BGXlistener.DECOwn ) #CONTRACT_INTERFACE)
            LOGGER.debug('WEB3 contract=%s', contract)
            total = contract.functions.totalSupply().call()
            val = contract.functions.balanceOf(wallet_address).call()
            LOGGER.debug('WEB3 total=%s val=%s', total, val)
            return float(val)
        else:
            return 0

# Namespace for general configuration

class BGXConf:

    DEFAULT_STORAGE_PATH = './'
    MAX_RETRY_CREATE_DB = 10


class AllowanceRow:

    def __init__(self, spender_addr, json_string=None):
        self.__storage = {}
        self.__spender_addr = spender_addr
        if json_string is not None:
            self.from_json(json_string)

    def get_id(self):
        return self.__spender_addr

    def append(self, addr, group_id, value):
        self.__storage[addr + group_id] = value

    def get(self, addr, group_id):
        key = addr + group_id
        if key not in self.__storage:
            return 0
        return self.__storage[key]

    def to_json(self):
        return json.dumps(self.__storage)

    def from_json(self, json_string):
        try:
            data = json.loads(json_string)
        except:
            LOGGER.error('Cant read json: %s', sys.exc_info()[0])
            raise InternalError('Failed to load data')
        self.__storage = data
        #for key, value in data.items():
        #    self.__storage[key] = value

# Storable objects in cell must have get_id() and to_json() methods

class StorageCell():

    def __init__(self, json_string = None):
        self._storage = {}
        if json_string is not None:
            self.from_json(json_string)

    def append(self, obj):
        key = obj.get_id()
        self._storage[key] = obj.to_json()

    def get(self, obj_id):
        if obj_id not in self._storage:
            allowance_row = AllowanceRow(obj_id)
            return allowance_row
        else:
            json_str = self._storage[obj_id]
            del self._storage[obj_id]
            allowance_row = AllowanceRow(obj_id, json_str)
            return allowance_row

    def to_json(self):
        return json.dumps(self._storage)

    def from_json(self, json_string):
        try:
            data = json.loads(json_string)
        except:
            LOGGER.error('Cant read json: %s', sys.exc_info()[0])
            raise InternalError('Failed to load data')

        for k, v in data.items():
            self._storage[k] = v

    def get_meta_token(self, obj_id):
        if obj_id not in self._storage:
            return None
        else:
            json_str = self._storage[obj_id]
            del self._storage[obj_id]
            meta_token = MetaToken(json_string=json_str)
            return meta_token

    def get_token(self, obj_id, strictly=None):
        if obj_id not in self._storage:
            if strictly is True:
                return None
            else:
                return Token()
        else:
            json_str = self._storage[obj_id]
            del self._storage[obj_id]
            token = Token(json_string=json_str)
            return token


#class BGXmeta():
#
#    def __init__(self, json_string = None):
#        self._metatokens = {}
#        if json_string is not None:
#            self.fromJSON(json_string)
#
#    def find(self, group_code):
#        meta_token = None
#        if group_code in self._metatokens:
#            meta_token_str = self._metatokens[group_code]
#            del self._metatokens[group_code]
#            meta_token = MetaToken()
#            meta_token.fromJSON(meta_token_str)
#        return meta_token
#
#    def append(self, meta_token):
#        if not isinstance(meta_token, MetaToken):
#            LOGGER.error("BGXmeta append - wrong args")
#            raise InternalError('Failed to append metatoken')
#
#        key = meta_token.get_group_code()
#        self._metatokens[key] = meta_token.toJSON()
#
#    def toJSON(self):
#        return json.dumps(self._metatokens)

#    def fromJSON(self, json_string):
#        try:
#            data = json.loads(json_string)
#        except:
#            LOGGER.error('Cant read json with BGXmeta: %s', sys.exc_info()[0])
#            raise InternalError('Failed to load BGXmeta')

#        for k, v in data.items():
#            self._metatokens[k] = v


#class BGXwallet():

#    def __init__(self, json_string = None):
#        self._tokens = {}
#        if json_string is not None:
#            self.fromJSON(json_string)

#    def append(self, token):
#        if not isinstance(token, Token):
#            LOGGER.error("BGXwallet append - wrong args")
#            raise InternalError('Failed to append token')

#        key = token.getGroupId()
#        self._tokens[key] = token.toJSON()

#    def get_token(self, token_id):
#        if token_id not in self._tokens:
#            max_token = Token()
#            cur_token = Token()
#            for token_id in self._tokens.keys():
#                token_str = self._tokens[token_id]
#                cur_token.fromJSON(token_str)
#                if max_token.getBalance() < cur_token.getBalance():
#                    max_token = cur_token
#            return max_token
#        else:
#            token_str = self._tokens[token_id]
#            del self._tokens[token_id]
#            token = Token()
#            token.fromJSON(token_str)
#            return token

#    def strictly_get_token(self, token_id):
#        if token_id not in self._tokens:
#            return None
#        else:
#            token_str = self._tokens[token_id]
#            del self._tokens[token_id]
#            token = Token()
#            token.fromJSON(token_str)
#            return token

#    def get_balance(self):
#        balance = {}
#        cur_token = Token()
#        for token_id in self._tokens.keys():
#            token_str = self._tokens[token_id]
#            cur_token.fromJSON(token_str)
#            balance[token_id] = cur_token.get_amount()
#        return balance
#
#     def toJSON(self):
#         return json.dumps(self._tokens)
#
#     def fromJSON(self, json_string):
#         try:
#             data = json.loads(json_string)
#         except:
#             LOGGER.error('Cant read json with BGXwallet: %s', sys.exc_info()[0])
#             raise InternalError('Failed to load BGXwallet')
#
#         for k, v in data.items():
#             self._tokens[k] = v
