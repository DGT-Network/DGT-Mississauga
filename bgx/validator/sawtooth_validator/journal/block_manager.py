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

import ctypes
import logging
from enum import IntEnum

LOGGER = logging.getLogger(__name__)

#from sawtooth_validator.ffi import OwnedPointer
from sawtooth_validator.protobuf.block_pb2 import Block, BlockHeader
from sawtooth_validator.journal.block_wrapper import BlockWrapper
#from sawtooth_validator import ffi

NULL_BLOCK_IDENTIFIER = "0000000000000000"

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


class RefCount:
    def __init__(self, block_id, previous_block_id, reffed):
        self.block_id = block_id
        self.previous_block_id = previous_block_id
        if reffed:
            self.internal_ref_count = 1
            self.external_ref_count = 0
        else:
            self.internal_ref_count = 0
            self.external_ref_count = 1

    def get_counters(self):
        return self.internal_ref_count, self.external_ref_count

    def increase_internal_ref_count(self):
        self.internal_ref_count += 1

    def decrease_internal_ref_count(self):
        if self.internal_ref_count <= 1:
            LOGGER.debug("BlockManager: The internal ref-count fell below zero, its lowest possible value")
        self.internal_ref_count -= 1

    def increase_external_ref_count(self):
        self.external_ref_count += 1

    def decrease_external_ref_count(self):
        if self.internal_ref_count <= 1:
            LOGGER.debug("BlockManager: The external ref-count fell below zero, its lowest possible value")
        self.external_ref_count -= 1


class BlockManager():

    def __init__(self):
        LOGGER.debug("BlockManager: __init__")
        self.block_by_block_id = {}
        self.blockstore_by_name = {}
        self.references_by_block_id = {}
        self.pointer = 1 # this is fake pointer

    def add_store(self, name, block_store):
        LOGGER.debug("BlockManager: add_store name=%s", name)
        for block in block_store.get_block_iter():
            if block.header_signature not in self.references_by_block_id:
                block_header = BlockHeader().FromString(block.header)
                self.references_by_block_id[block.header_signature] = \
                    RefCount(block.header_signature, block_header.previous_block_id, False)
        self.blockstore_by_name[name] = block_store

    @staticmethod
    def check_predecessors(branch):
        predecessors = []
        heads = []
        tail = ''
        for block in branch:
            block_header = BlockHeader().FromString(block.header)
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
                block_header = BlockHeader().FromString(block.header)
                if block_header.previous_block_id == tail:
                    ordered_branch.append(block)
                    tail = block.header_signature
                    del branch[i]
                    break
            if len(branch) == prev_len:
                raise MissingPredecessorInBranch("Missing predecessor")
        return ordered_branch

    # Checks if block with block_id is in any self.blockstore_by_name or self.references_by_block_id
    def contains_block(self, block_id):
        if block_id in self.references_by_block_id:
            return True
        for store_name in self.blockstore_by_name:
            blockstore = self.blockstore_by_name[store_name]
            for wrapped_block in blockstore.get_block_iter():
                block = wrapped_block.block
                if block.header_signature == block_id:
                    return True
        return False

    # TODO: implement filling of self.block_by_block_id
    def put(self, branch):
        LOGGER.debug("BlockManager: put branch=%s", branch)
        ordered_branch = self.check_predecessors(branch)
        head_block_header = BlockHeader().FromString(ordered_branch[0].header)

        if not self.contains_block(head_block_header.previous_block_id):
            raise MissingPredecessor("During Put, missing predecessor of block {}: {}"
                                     .format(
                                         ordered_branch[0].header_signature,
                                         head_block_header.previous_block_id
                                     ))

        if not self.contains_block(ordered_branch[0].header_signature):
            rc = self.references_by_block_id[head_block_header.previous_block_id]
            rc.increase_internal_ref_count()

        blocks_not_added_yet = []
        for block in branch:
            if not self.contains_block(block.header_signature):
                blocks_not_added_yet.append(block)

        last_block = ordered_branch[-1]
        blocks_with_references = ordered_branch[:-1]
        self.references_by_block_id[last_block.block.header_signature] = \
            RefCount(
                last_block.header_signature,
                BlockHeader().FromString(last_block.header).previous_block_id,
                False
            )
        self.block_by_block_id[last_block.block.header_signature] = last_block
        for block in blocks_with_references:
            self.block_by_block_id[block.header_signature] = block
            self.references_by_block_id[block.header_signature] = \
                RefCount(
                    block.header_signature,
                    BlockHeader().FromString(block.header).previous_block_id,
                    True
                )

        # Old logic
        # wrapped_ordered_branch = [BlockWrapper(block) for block in ordered_branch]
        # chain_head = self._block_store.chain_head
        # if chain_head is not None and chain_head.block.header_signature != head_block_header.previous_block_id:
        #     raise MissingPredecessor()
        # self._block_store.update_chain(wrapped_ordered_branch)

        # Older logic
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

    # Adds block to referenced dict
    def ref_block(self, block_id):
        LOGGER.debug("BlockManager: ref_block block_id=%s", block_id)
        if self.references_by_block_id[block_id]:
            self.references_by_block_id[block_id].increase_external_ref_count()
            return

        for store in self.blockstore_by_name.values():
            try:
                wrapped_block = store.__getitem__(block_id)
                break
            except KeyError:
                pass

        if not wrapped_block:
            raise UnknownBlock()
        block = wrapped_block.block
        block_header = BlockHeader().FromString(block.header)
        rc = RefCount(block_id, block_header.previous_block_id, True)
        rc.increase_external_ref_count()
        self.references_by_block_id[block_id] = rc
        LOGGER.debug("BlockManager: ref_block block=(%s)", block_id)

    # Removes references of block with block_id
    # If references if block will be less than 1 it will be removed from MainCache
    def unref_block(self, block_id):
        LOGGER.debug("BlockManager: unref_block block_id=%s", block_id)
        if block_id not in self.references_by_block_id:
            raise UnknownBlock()

        rc = self.references_by_block_id[block_id]
        rc.decrease_external_ref_count()

        (internal_ref_count, external_ref_count) = rc.get_counters()
        blocks_to_remove = []
        optional_new_tip = None
        dropped = False

        if internal_ref_count + external_ref_count == 0:
            # Starting from block_id, walk back until finding a block that has a
            # internal ref_count >= 2 or an external_ref_count > 0.
            tmp_block_id = block_id
            while True:
                ref_block = self.references_by_block_id[tmp_block_id]
                if ref_block.internal_ref_count >= 2 or ref_block.external_ref_count >= 1:
                    pointed_to = tmp_block_id
                    break
                elif ref_block.previous_block_id == NULL_BLOCK_IDENTIFIER:
                    blocks_to_remove.append(tmp_block_id)
                    pointed_to = None
                    break
                else:
                    blocks_to_remove.append(tmp_block_id)
            del self.references_by_block_id[block_id]
            del self.block_by_block_id[block_id]
            dropped = True
            optional_new_tip = pointed_to

        for tmp_block_id in blocks_to_remove:
            del self.references_by_block_id[tmp_block_id]
            del self.block_by_block_id[tmp_block_id]

        if optional_new_tip:
            self.references_by_block_id[optional_new_tip].decrease_internal_ref_count()

        if dropped:
            LOGGER.debug("BlockManager: unref_block dropped block")

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

    # Returns set of (Location, data)
    # If found in MainCache -> ('MainCache', block)
    # If found in BlockStore -> ('BlockStore', store_name)
    # Else ('BlockNotFound', None)
    def get_block_from_main_cache_or_blockstore_name(self, block_id):
        if block_id in self.block_by_block_id:
            return 'MainCache', self.block_by_block_id[block_id]
        else:
            for store_name in self.blockstore_by_name:
                block = self.get_block_from_blockstore(block_id, store_name)
                if block:
                    return 'BlockStore', block
        return 'BlockNotFound', None

    # Returns wrapped block from store with specified store_name or None
    def get_block_from_blockstore(self, block_id, store_name):
        blockstore = self.blockstore_by_name[store_name]
        for wrapped_block in blockstore.get_block_iter():
            block = wrapped_block.block
            if block.header_signature == block_id:
                return wrapped_block
        return None

    # Returns iterator for list of block ids
    def get(self, block_ids):
        LOGGER.debug("BlockManager: get block_ids=%s", block_ids)
        return _GetBlockIterator(self, block_ids)

    def branch(self, tip):
        LOGGER.debug("BlockManager: branch tip=%s", tip)
        return _BranchIterator(self, tip)

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
        if self._index:
            LOGGER.debug("_BlockIterator: __del__ ptr=%s", self._index)
            """
            _libexec("{}_drop".format(self.name), self._c_iter_ptr)
            """

    def __iter__(self):
        LOGGER.debug("_BlockIterator: __iter__ ptr=%s ....", self)
        return self

    def __next__(self):
        if self._index >= self._block_ids:
            raise StopIteration()

        LOGGER.debug("_BlockIterator: __next__ index=%s", self._index)
        block_id = self._block_ids[self._index]
        (location, data) = self._block_manager.get_block_from_main_cache_or_blockstore_name(block_id)
        if location == 'BlockNotFound' :
            result = None
        else:
            result = data.block
        LOGGER.debug("_BlockIterator: next=%s", result)
        self._index += 1
        return result


class _GetBlockIterator(_BlockIterator):
    name = "block_manager_get_iterator"

    def __init__(self, block_manager, block_ids):
        self._block_ids = block_ids
        self._block_manager = block_manager
        self._index = 0
        LOGGER.debug("_GetBlockIterator: __init__ block_manager=%s block_ids=%s iter=%s", block_manager,
                     block_ids, self._index)


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
