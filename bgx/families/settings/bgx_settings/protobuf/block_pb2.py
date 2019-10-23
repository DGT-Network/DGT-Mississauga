# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: bgx_settings/protobuf/block.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from bgx_settings.protobuf import batch_pb2 as bgx__settings_dot_protobuf_dot_batch__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='bgx_settings/protobuf/block.proto',
  package='',
  syntax='proto3',
  serialized_options=_b('\n\025sawtooth.sdk.protobufP\001Z\tblock_pb2'),
  serialized_pb=_b('\n!bgx_settings/protobuf/block.proto\x1a!bgx_settings/protobuf/batch.proto\"\x95\x01\n\x0b\x42lockHeader\x12\x11\n\tblock_num\x18\x01 \x01(\x04\x12\x19\n\x11previous_block_id\x18\x02 \x01(\t\x12\x19\n\x11signer_public_key\x18\x03 \x01(\t\x12\x11\n\tbatch_ids\x18\x04 \x03(\t\x12\x11\n\tconsensus\x18\x05 \x01(\x0c\x12\x17\n\x0fstate_root_hash\x18\x06 \x01(\t\"J\n\x05\x42lock\x12\x0e\n\x06header\x18\x01 \x01(\x0c\x12\x18\n\x10header_signature\x18\x02 \x01(\t\x12\x17\n\x07\x62\x61tches\x18\x03 \x03(\x0b\x32\x06.BatchB$\n\x15sawtooth.sdk.protobufP\x01Z\tblock_pb2b\x06proto3')
  ,
  dependencies=[bgx__settings_dot_protobuf_dot_batch__pb2.DESCRIPTOR,])




_BLOCKHEADER = _descriptor.Descriptor(
  name='BlockHeader',
  full_name='BlockHeader',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='block_num', full_name='BlockHeader.block_num', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='previous_block_id', full_name='BlockHeader.previous_block_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='signer_public_key', full_name='BlockHeader.signer_public_key', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='batch_ids', full_name='BlockHeader.batch_ids', index=3,
      number=4, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='consensus', full_name='BlockHeader.consensus', index=4,
      number=5, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='state_root_hash', full_name='BlockHeader.state_root_hash', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=73,
  serialized_end=222,
)


_BLOCK = _descriptor.Descriptor(
  name='Block',
  full_name='Block',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='header', full_name='Block.header', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='header_signature', full_name='Block.header_signature', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='batches', full_name='Block.batches', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=224,
  serialized_end=298,
)

_BLOCK.fields_by_name['batches'].message_type = bgx__settings_dot_protobuf_dot_batch__pb2._BATCH
DESCRIPTOR.message_types_by_name['BlockHeader'] = _BLOCKHEADER
DESCRIPTOR.message_types_by_name['Block'] = _BLOCK
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

BlockHeader = _reflection.GeneratedProtocolMessageType('BlockHeader', (_message.Message,), dict(
  DESCRIPTOR = _BLOCKHEADER,
  __module__ = 'bgx_settings.protobuf.block_pb2'
  # @@protoc_insertion_point(class_scope:BlockHeader)
  ))
_sym_db.RegisterMessage(BlockHeader)

Block = _reflection.GeneratedProtocolMessageType('Block', (_message.Message,), dict(
  DESCRIPTOR = _BLOCK,
  __module__ = 'bgx_settings.protobuf.block_pb2'
  # @@protoc_insertion_point(class_scope:Block)
  ))
_sym_db.RegisterMessage(Block)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
