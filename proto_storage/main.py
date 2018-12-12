import logging
import os

from indexed_database import IndexedDatabase
from block_store import BlockStore
from block_manager import BlockManager, MissingPredecessor, MissingPredecessorInBranch
from block_wrapper import NULL_BLOCK_IDENTIFIER

import block_pb2
import unittest
import os
LOGGER = logging.getLogger(__name__)


def _build_block(block_num, block_id, previous_block_id):
    header = block_pb2.BlockHeader(
        block_num=block_num,
        previous_block_id=previous_block_id)

    return block_pb2.Block(
        header_signature=block_id,
        header=header.SerializeToString())


class TestBlockManager(unittest.TestCase):

    def setUp(self):
        block_db_filename = 'filename'
        os.remove(block_db_filename)
        os.remove(block_db_filename+'-lock')
        block_db = IndexedDatabase(
            block_db_filename,
            BlockStore.serialize_block,
            BlockStore.deserialize_block,
            flag='c',
            indexes=BlockStore.create_index_configuration())
        self.block_store = BlockStore(block_db)
        self.block_manager = BlockManager()
        self.block_manager.add_store('my_store', self.block_store)

    def test_block_manager(self):
        block_a = _build_block(1, "A", NULL_BLOCK_IDENTIFIER)
        block_b = _build_block(2, "B", "A")
        block_c = _build_block(3, "C", "B")

        self.block_manager.put([block_a, block_b, block_c])

        block_e = _build_block(5, "E", "D")

        with self.assertRaises(MissingPredecessor):
            self.block_manager.put([block_e])

        block_d = _build_block(4, "D", "C")

        self.block_manager.put([block_d, block_e])

        block_c2 = _build_block(3, "C2", "B")

        block_d2 = _build_block(4, "D2", "C2")

        block_e2 = _build_block(5, "E2", "D2")

        with self.assertRaises(MissingPredecessor):
            self.block_manager.put([block_c2, block_e2, block_d2])

        block_id = "D"
        for block in self.block_manager.branch("D"):
            self.assertEqual(block.header_signature, block_id)
            header = block_pb2.BlockHeader()
            header.ParseFromString(block.header)
            block_id = header.previous_block_id

        self.block_manager.put([block_c2, block_d2, block_e2])

        block_id = "D"
        for block in self.block_manager.branch_diff("D", "E2"):
            self.assertEqual(block.header_signature, block_id)
            header = block_pb2.BlockHeader()
            header.ParseFromString(block.header)
            block_id = header.previous_block_id

        for block in self.block_manager.get("C"):
            self.assertEqual(block.header_signature, "C")


if __name__ == '__main__':
    unittest.main()

#LOGGER = logging.getLogger(__name__)


#block_db_filename = 'filename'

#block_db = IndexedDatabase(
#            block_db_filename,
#            BlockStore.serialize_block,
#            BlockStore.deserialize_block,
#            flag='c',
#            indexes=BlockStore.create_index_configuration())
#block_store = BlockStore(block_db)
#block_manager = BlockManager()
#block_manager.add_store('my_store', block_store)

#block_a = _build_block(1, "A", NULL_BLOCK_IDENTIFIER)
#block_b = _build_block(2, "B", "A")
#block_c = _build_block(3, "C", "B")

#block_manager.put([block_a, block_b, block_c])


#for a in block_manager._block_store.get_block_iter():
#    print(a)


#test = TestBlockManager()
#test.setUp()
#test.test_block_manager()