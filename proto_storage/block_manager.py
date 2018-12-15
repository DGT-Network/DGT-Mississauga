# Copyright 2018 NTRlab
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

import block_pb2
from block_wrapper import BlockWrapper

import ctypes
import logging
from enum import IntEnum

LOGGER = logging.getLogger(__name__)

# from sawtooth_validator.ffi import OwnedPointer
from block_pb2 import Block


# from sawtooth_validator import ffi


class MissingPredecessor(Exception):
    pass


class MissingPredecessorInBranch(Exception):
    pass


class MissingInput(Exception):
    pass


class UnknownBlock(Exception):
    pass


class ErrorCode(IntEnum):
    Success = 0
    NullPointerProvided = 0x01
    MissingPredecessor = 0x02
    MissingPredecessorInBranch = 0x03
    MissingInput = 0x04
    UnknownBlock = 0x05
    InvalidInputString = 0x06
    Error = 0x07
    InvalidPythonObject = 0x0F
    StopIteration = 0x11


class _PutEntry(ctypes.Structure):
    _fields_ = [('block_bytes', ctypes.c_char_p),
                ('block_bytes_len', ctypes.c_size_t)]

    @staticmethod
    def new(block_bytes):
        return _PutEntry(
            block_bytes,
            len(block_bytes)
        )


class BlockManager():

    def __init__(self):
        """
        super(BlockManager, self).__init__('block_manager_drop')
        _libexec("block_manager_new",ctypes.byref(self.pointer))
        """
        self.pointer = 1  # this is fake pointer
        LOGGER.debug("BlockManager: __init__")

    def add_store(self, name, block_store):
        """
        _pylibexec("block_manager_add_store",
                   self.pointer,
                   ctypes.c_char_p(name.encode()),
                   ctypes.py_object(block_store))
        """
        self._name = name
        self._block_store = block_store if block_store is not None else {}
        LOGGER.debug("BlockManager: add_store name=%s", name)

    @staticmethod
    def check_predecessors(branch):
        predecessors = []
        heads = []
        tail = ''
        for block in branch:
            block_header = block_pb2.BlockHeader().FromString(block.header)
            print(block_header)
            predecessors.append(block_header.previous_block_id)
            heads.append(block.header_signature)
        if len(set(predecessors) - set(heads)) > 1:
            raise MissingPredecessorInBranch("Missing predecessor")
        else:
            tail = list(set(predecessors) - set(heads))[0]
        ordered_branch = []
        while len(branch) != 0:
            prev_len = len(branch)
            for (i, block) in enumerate(branch):
                block_header = block_pb2.BlockHeader().FromString(block.header)
                if block_header.previous_block_id == tail:
                    ordered_branch.append(block)
                    tail = block.header_signature
                    del branch[i]
                    break
            if len(branch) == prev_len:
                raise MissingPredecessorInBranch("Missing predecessor")
        return ordered_branch

    def put(self, branch):
        ordered_branch = self.check_predecessors(branch)
        wrapped_ordered_branch = [BlockWrapper(block) for block in ordered_branch]
        head_block_header = block_pb2.BlockHeader().FromString(ordered_branch[0].header)

        chain_head = self._block_store.chain_head
        if chain_head is not None and chain_head.block.header_signature != head_block_header.previous_block_id:
            raise MissingPredecessor()
        self._block_store.update_chain(wrapped_ordered_branch)

        # Works with next logic
        # If A(prev: 0) <- B(prev: A) <- C(prev: B)
        # And branch to put is A2(prev: B) <- B2(prev: A2) <- C2(prev: B2)
        # Then after update chain will be A(prev: 0) <- B(prev: A) <- A2(prev: B) <- B2(prev: A2) <- C2(prev: B2)
        # Note block C2(prev: B2) will be removed
        # predecessor_found = False
        # block_store_has_blocks = False
        # traversed_blocks = []
        # for wrapped_block in self._block_store.get_block_iter(reverse=True):
        #     block = wrapped_block.block
        #     block_store_has_blocks = True
        #     if block.header_signature == head_block_header.previous_block_id:
        #         predecessor_found = True
        #         break
        #     traversed_blocks.append(block)
        # if predecessor_found or (not block_store_has_blocks):
        #     self._block_store.update_chain(wrapped_ordered_branch, traversed_blocks)
        # else:
        #     raise MissingPredecessor()
        LOGGER.debug("BlockManager: put branch=%s", ordered_branch)

    # Raises UnknownBlock if the block is not found
    def ref_block(self, block_id):
        LOGGER.debug("BlockManager: ref_block block_id=%s", block_id)
        """
        _libexec(
            "block_manager_ref_block",
            self.pointer,
            ctypes.c_char_p(block_id.encode()))
        """
        self._block = self._block_store._get_block(block_id)
        LOGGER.debug("BlockManager: ref_block block=(%s)", self._block)
        # Raises UnknownBlock if the block is not found

    def unref_block(self, block_id):
        LOGGER.debug("BlockManager: unref_block block_id=%s", block_id)
        """
        _libexec(
            "block_manager_unref_block",
            self.pointer,
            ctypes.c_char_p(block_id.encode()))
        """

    def persist(self, block_id, store_name):
        LOGGER.debug("BlockManager: persist block_id=%s  store_name=%s", block_id, store_name)
        """
        _libexec("block_manager_persist",
                 self.pointer,
                 ctypes.c_char_p(block_id.encode()),
                 ctypes.c_char_p(store_name.encode()))
        """

    def __contains__(self, block_id):
        LOGGER.debug("BlockManager: __contains__ block_id=%s", block_id)
        contains = ctypes.c_bool(False)
        """
        _libexec(
            "block_manager_contains",
            self.pointer,
            ctypes.c_char_p(block_id.encode()),
            ctypes.byref(contains))
        """
        return contains

    def get(self, block_ids):
        LOGGER.debug("BlockManager: get block_ids=%s", block_ids)
        return _GetBlockIterator(self.pointer, block_ids, self._block_store)

    def branch(self, tip):
        LOGGER.debug("BlockManager: branch tip=%s", tip)
        return _BranchIterator(self.pointer, tip)

    def branch_diff(self, tip, exclude):
        LOGGER.debug("BlockManager: branch_diff tip=%s", tip)
        return _BranchDiffIterator(self.pointer, tip, exclude)


"""
def _libexec(name, *args):
    return _exec(ffi.LIBRARY, name, *args)


def _pylibexec(name, *args):
    return _exec(ffi.PY_LIBRARY, name, *args)


def _exec(library, name, *args):
    res = library.call(name, *args)
    if res == ErrorCode.Success:
        return

    if res == ErrorCode.NullPointerProvided:
        raise TypeError("Provided null pointer(s)")
    elif res == ErrorCode.StopIteration:
        raise StopIteration()
    elif res == ErrorCode.MissingPredecessor:
        raise MissingPredecessor("Missing predecessor")
    elif res == ErrorCode.MissingPredecessorInBranch:
        raise MissingPredecessorInBranch("Missing predecessor")
    elif res == ErrorCode.MissingInput:
        raise MissingInput("Missing input to put method")
    elif res == ErrorCode.UnknownBlock:
        raise UnknownBlock("Block was unknown")
    elif res == ErrorCode.InvalidInputString:
        raise TypeError("Invalid block store name provided")
    else:
        raise Exception("There was an unknown error: {}".format(res))
"""


class _BlockIterator:

    def __del__(self):
        if self._c_iter_ptr:
            LOGGER.debug("_BlockIterator: __del__ ptr=%s", self._c_iter_ptr)
            """
            _libexec("{}_drop".format(self.name), self._c_iter_ptr)
            """

    def __iter__(self):
        LOGGER.debug("_BlockIterator: __iter__ ptr=%s ....", self)
        return self

    def __next__(self):
        if not self._c_iter_ptr:
            raise StopIteration()
        LOGGER.debug("_BlockIterator: __next__ ptr=%s", self._c_iter_ptr)
        """
        (vec_ptr, vec_len, vec_cap) = ffi.prepare_vec_result()

        _libexec("{}_next".format(self.name),
                 self._c_iter_ptr,
                 ctypes.byref(vec_ptr),
                 ctypes.byref(vec_len),
                 ctypes.byref(vec_cap))

        # Check if NULL
        if not vec_ptr:
            raise StopIteration()

        payload = ffi.from_rust_vec(vec_ptr, vec_len, vec_cap)
        """
        payload = next(self._c_iter_ptr)
        LOGGER.debug("_BlockIterator: next=%s", payload)
        block = Block()
        # block.ParseFromString(payload)

        return block


class _GetBlockIterator(_BlockIterator):
    name = "block_manager_get_iterator"

    def __init__(self, block_manager_ptr, block_ids, block_store=None):
        c_block_ids = (ctypes.c_char_p * len(block_ids))()
        for i, block_id in enumerate(block_ids):
            c_block_ids[i] = ctypes.c_char_p(block_id.encode())

        # self._c_iter_ptr = 1 #fake
        self._c_iter_ptr = block_store.get_block_iter(
            start_block=None) if block_store else None  # start_block=block_ids[0]
        """
        self._c_iter_ptr = ctypes.c_void_p()
        _libexec("{}_new".format(self.name),
                 block_manager_ptr,
                 c_block_ids,
                 ctypes.c_size_t(len(block_ids)),
                 ctypes.byref(self._c_iter_ptr))
        """
        LOGGER.debug("_GetBlockIterator: __init__ block_manager_ptr=%s block_ids=%s iter=%s", block_manager_ptr,
                     block_ids, self._c_iter_ptr)


class _BranchDiffIterator(_BlockIterator):
    name = "block_manager_branch_diff_iterator"

    def __init__(self, block_manager_ptr, tip, exclude):
        LOGGER.debug("_BranchDiffIterator: __init__ block_manager_ptr=%s tip=%s", block_manager_ptr, tip)
        c_tip = ctypes.c_char_p(tip.encode())
        c_exclude = ctypes.c_char_p(exclude.encode())

        self._c_iter_ptr = ctypes.c_void_p()
        """
        _libexec("{}_new".format(self.name),
                 block_manager_ptr,
                 c_tip,
                 c_exclude,
                 ctypes.byref(self._c_iter_ptr))
        """


class _BranchIterator(_BlockIterator):
    name = "block_manager_branch_iterator"

    def __init__(self, block_manager_ptr, tip):
        c_tip = ctypes.c_char_p(tip.encode())

        self._c_iter_ptr = ctypes.c_void_p()
        LOGGER.debug("_BranchIterator: __init__ block_manager_ptr=%s tip=%s", block_manager_ptr, tip)
        """
        _libexec("{}_new".format(self.name),
                 block_manager_ptr,
                 c_tip,
                 ctypes.byref(self._c_iter_ptr))
        """