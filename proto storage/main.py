import logging
import os

from indexed_database import IndexedDatabase
from block_store import BlockStore
from block_manager import BlockManager
from block_wrapper import NULL_BLOCK_IDENTIFIER

import block_pb2


LOGGER = logging.getLogger(__name__)


def _build_block(block_num, block_id, previous_block_id):
    header = block_pb2.BlockHeader(
        block_num=block_num,
        previous_block_id=previous_block_id)

    return block_pb2.Block(
        header_signature=block_id,
        header=header.SerializeToString())



LOGGER = logging.getLogger(__name__)

data_dir = './'

block_db_filename = 'filename'

block_db = IndexedDatabase(
            block_db_filename,
            BlockStore.serialize_block,
            BlockStore.deserialize_block,
            flag='c',
            indexes=BlockStore.create_index_configuration())
block_store = BlockStore(block_db)
block_manager = BlockManager()
block_manager.add_store('my_store', block_store)

block_a = _build_block(1, "A", NULL_BLOCK_IDENTIFIER)
block_b = _build_block(2, "B", "A")
block_c = _build_block(3, "C", "B")

block_manager.put([block_a, block_b, block_c])


for a in block_manager._block_store.get_block_iter():
    print(a)