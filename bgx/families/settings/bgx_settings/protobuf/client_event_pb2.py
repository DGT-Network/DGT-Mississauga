# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: bgx_settings/protobuf/client_event.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from bgx_settings.protobuf import events_pb2 as bgx__settings_dot_protobuf_dot_events__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='bgx_settings/protobuf/client_event.proto',
  package='',
  syntax='proto3',
  serialized_options=_b('\n\025sawtooth.sdk.protobufP\001Z\020client_event_pb2'),
  serialized_pb=_b('\n(bgx_settings/protobuf/client_event.proto\x1a\"bgx_settings/protobuf/events.proto\"g\n\x1c\x43lientEventsSubscribeRequest\x12)\n\rsubscriptions\x18\x01 \x03(\x0b\x32\x12.EventSubscription\x12\x1c\n\x14last_known_block_ids\x18\x02 \x03(\t\"\xbb\x01\n\x1d\x43lientEventsSubscribeResponse\x12\x35\n\x06status\x18\x01 \x01(\x0e\x32%.ClientEventsSubscribeResponse.Status\x12\x18\n\x10response_message\x18\x02 \x01(\t\"I\n\x06Status\x12\x10\n\x0cSTATUS_UNSET\x10\x00\x12\x06\n\x02OK\x10\x01\x12\x12\n\x0eINVALID_FILTER\x10\x02\x12\x11\n\rUNKNOWN_BLOCK\x10\x03\" \n\x1e\x43lientEventsUnsubscribeRequest\"\x92\x01\n\x1f\x43lientEventsUnsubscribeResponse\x12\x37\n\x06status\x18\x01 \x01(\x0e\x32\'.ClientEventsUnsubscribeResponse.Status\"6\n\x06Status\x12\x10\n\x0cSTATUS_UNSET\x10\x00\x12\x06\n\x02OK\x10\x01\x12\x12\n\x0eINTERNAL_ERROR\x10\x02\"V\n\x16\x43lientEventsGetRequest\x12)\n\rsubscriptions\x18\x01 \x03(\x0b\x32\x12.EventSubscription\x12\x11\n\tblock_ids\x18\x02 \x03(\t\"\xc1\x01\n\x17\x43lientEventsGetResponse\x12/\n\x06status\x18\x01 \x01(\x0e\x32\x1f.ClientEventsGetResponse.Status\x12\x16\n\x06\x65vents\x18\x02 \x03(\x0b\x32\x06.Event\"]\n\x06Status\x12\x10\n\x0cSTATUS_UNSET\x10\x00\x12\x06\n\x02OK\x10\x01\x12\x12\n\x0eINTERNAL_ERROR\x10\x02\x12\x12\n\x0eINVALID_FILTER\x10\x03\x12\x11\n\rUNKNOWN_BLOCK\x10\x04\x42+\n\x15sawtooth.sdk.protobufP\x01Z\x10\x63lient_event_pb2b\x06proto3')
  ,
  dependencies=[bgx__settings_dot_protobuf_dot_events__pb2.DESCRIPTOR,])



_CLIENTEVENTSSUBSCRIBERESPONSE_STATUS = _descriptor.EnumDescriptor(
  name='Status',
  full_name='ClientEventsSubscribeResponse.Status',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='STATUS_UNSET', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='OK', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='INVALID_FILTER', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='UNKNOWN_BLOCK', index=3, number=3,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=300,
  serialized_end=373,
)
_sym_db.RegisterEnumDescriptor(_CLIENTEVENTSSUBSCRIBERESPONSE_STATUS)

_CLIENTEVENTSUNSUBSCRIBERESPONSE_STATUS = _descriptor.EnumDescriptor(
  name='Status',
  full_name='ClientEventsUnsubscribeResponse.Status',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='STATUS_UNSET', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='OK', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='INTERNAL_ERROR', index=2, number=2,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=502,
  serialized_end=556,
)
_sym_db.RegisterEnumDescriptor(_CLIENTEVENTSUNSUBSCRIBERESPONSE_STATUS)

_CLIENTEVENTSGETRESPONSE_STATUS = _descriptor.EnumDescriptor(
  name='Status',
  full_name='ClientEventsGetResponse.Status',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='STATUS_UNSET', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='OK', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='INTERNAL_ERROR', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='INVALID_FILTER', index=3, number=3,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='UNKNOWN_BLOCK', index=4, number=4,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=747,
  serialized_end=840,
)
_sym_db.RegisterEnumDescriptor(_CLIENTEVENTSGETRESPONSE_STATUS)


_CLIENTEVENTSSUBSCRIBEREQUEST = _descriptor.Descriptor(
  name='ClientEventsSubscribeRequest',
  full_name='ClientEventsSubscribeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='subscriptions', full_name='ClientEventsSubscribeRequest.subscriptions', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='last_known_block_ids', full_name='ClientEventsSubscribeRequest.last_known_block_ids', index=1,
      number=2, type=9, cpp_type=9, label=3,
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
  serialized_start=80,
  serialized_end=183,
)


_CLIENTEVENTSSUBSCRIBERESPONSE = _descriptor.Descriptor(
  name='ClientEventsSubscribeResponse',
  full_name='ClientEventsSubscribeResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='status', full_name='ClientEventsSubscribeResponse.status', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='response_message', full_name='ClientEventsSubscribeResponse.response_message', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _CLIENTEVENTSSUBSCRIBERESPONSE_STATUS,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=186,
  serialized_end=373,
)


_CLIENTEVENTSUNSUBSCRIBEREQUEST = _descriptor.Descriptor(
  name='ClientEventsUnsubscribeRequest',
  full_name='ClientEventsUnsubscribeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
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
  serialized_start=375,
  serialized_end=407,
)


_CLIENTEVENTSUNSUBSCRIBERESPONSE = _descriptor.Descriptor(
  name='ClientEventsUnsubscribeResponse',
  full_name='ClientEventsUnsubscribeResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='status', full_name='ClientEventsUnsubscribeResponse.status', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _CLIENTEVENTSUNSUBSCRIBERESPONSE_STATUS,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=410,
  serialized_end=556,
)


_CLIENTEVENTSGETREQUEST = _descriptor.Descriptor(
  name='ClientEventsGetRequest',
  full_name='ClientEventsGetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='subscriptions', full_name='ClientEventsGetRequest.subscriptions', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='block_ids', full_name='ClientEventsGetRequest.block_ids', index=1,
      number=2, type=9, cpp_type=9, label=3,
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
  serialized_start=558,
  serialized_end=644,
)


_CLIENTEVENTSGETRESPONSE = _descriptor.Descriptor(
  name='ClientEventsGetResponse',
  full_name='ClientEventsGetResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='status', full_name='ClientEventsGetResponse.status', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='events', full_name='ClientEventsGetResponse.events', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _CLIENTEVENTSGETRESPONSE_STATUS,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=647,
  serialized_end=840,
)

_CLIENTEVENTSSUBSCRIBEREQUEST.fields_by_name['subscriptions'].message_type = bgx__settings_dot_protobuf_dot_events__pb2._EVENTSUBSCRIPTION
_CLIENTEVENTSSUBSCRIBERESPONSE.fields_by_name['status'].enum_type = _CLIENTEVENTSSUBSCRIBERESPONSE_STATUS
_CLIENTEVENTSSUBSCRIBERESPONSE_STATUS.containing_type = _CLIENTEVENTSSUBSCRIBERESPONSE
_CLIENTEVENTSUNSUBSCRIBERESPONSE.fields_by_name['status'].enum_type = _CLIENTEVENTSUNSUBSCRIBERESPONSE_STATUS
_CLIENTEVENTSUNSUBSCRIBERESPONSE_STATUS.containing_type = _CLIENTEVENTSUNSUBSCRIBERESPONSE
_CLIENTEVENTSGETREQUEST.fields_by_name['subscriptions'].message_type = bgx__settings_dot_protobuf_dot_events__pb2._EVENTSUBSCRIPTION
_CLIENTEVENTSGETRESPONSE.fields_by_name['status'].enum_type = _CLIENTEVENTSGETRESPONSE_STATUS
_CLIENTEVENTSGETRESPONSE.fields_by_name['events'].message_type = bgx__settings_dot_protobuf_dot_events__pb2._EVENT
_CLIENTEVENTSGETRESPONSE_STATUS.containing_type = _CLIENTEVENTSGETRESPONSE
DESCRIPTOR.message_types_by_name['ClientEventsSubscribeRequest'] = _CLIENTEVENTSSUBSCRIBEREQUEST
DESCRIPTOR.message_types_by_name['ClientEventsSubscribeResponse'] = _CLIENTEVENTSSUBSCRIBERESPONSE
DESCRIPTOR.message_types_by_name['ClientEventsUnsubscribeRequest'] = _CLIENTEVENTSUNSUBSCRIBEREQUEST
DESCRIPTOR.message_types_by_name['ClientEventsUnsubscribeResponse'] = _CLIENTEVENTSUNSUBSCRIBERESPONSE
DESCRIPTOR.message_types_by_name['ClientEventsGetRequest'] = _CLIENTEVENTSGETREQUEST
DESCRIPTOR.message_types_by_name['ClientEventsGetResponse'] = _CLIENTEVENTSGETRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ClientEventsSubscribeRequest = _reflection.GeneratedProtocolMessageType('ClientEventsSubscribeRequest', (_message.Message,), dict(
  DESCRIPTOR = _CLIENTEVENTSSUBSCRIBEREQUEST,
  __module__ = 'bgx_settings.protobuf.client_event_pb2'
  # @@protoc_insertion_point(class_scope:ClientEventsSubscribeRequest)
  ))
_sym_db.RegisterMessage(ClientEventsSubscribeRequest)

ClientEventsSubscribeResponse = _reflection.GeneratedProtocolMessageType('ClientEventsSubscribeResponse', (_message.Message,), dict(
  DESCRIPTOR = _CLIENTEVENTSSUBSCRIBERESPONSE,
  __module__ = 'bgx_settings.protobuf.client_event_pb2'
  # @@protoc_insertion_point(class_scope:ClientEventsSubscribeResponse)
  ))
_sym_db.RegisterMessage(ClientEventsSubscribeResponse)

ClientEventsUnsubscribeRequest = _reflection.GeneratedProtocolMessageType('ClientEventsUnsubscribeRequest', (_message.Message,), dict(
  DESCRIPTOR = _CLIENTEVENTSUNSUBSCRIBEREQUEST,
  __module__ = 'bgx_settings.protobuf.client_event_pb2'
  # @@protoc_insertion_point(class_scope:ClientEventsUnsubscribeRequest)
  ))
_sym_db.RegisterMessage(ClientEventsUnsubscribeRequest)

ClientEventsUnsubscribeResponse = _reflection.GeneratedProtocolMessageType('ClientEventsUnsubscribeResponse', (_message.Message,), dict(
  DESCRIPTOR = _CLIENTEVENTSUNSUBSCRIBERESPONSE,
  __module__ = 'bgx_settings.protobuf.client_event_pb2'
  # @@protoc_insertion_point(class_scope:ClientEventsUnsubscribeResponse)
  ))
_sym_db.RegisterMessage(ClientEventsUnsubscribeResponse)

ClientEventsGetRequest = _reflection.GeneratedProtocolMessageType('ClientEventsGetRequest', (_message.Message,), dict(
  DESCRIPTOR = _CLIENTEVENTSGETREQUEST,
  __module__ = 'bgx_settings.protobuf.client_event_pb2'
  # @@protoc_insertion_point(class_scope:ClientEventsGetRequest)
  ))
_sym_db.RegisterMessage(ClientEventsGetRequest)

ClientEventsGetResponse = _reflection.GeneratedProtocolMessageType('ClientEventsGetResponse', (_message.Message,), dict(
  DESCRIPTOR = _CLIENTEVENTSGETRESPONSE,
  __module__ = 'bgx_settings.protobuf.client_event_pb2'
  # @@protoc_insertion_point(class_scope:ClientEventsGetResponse)
  ))
_sym_db.RegisterMessage(ClientEventsGetResponse)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
