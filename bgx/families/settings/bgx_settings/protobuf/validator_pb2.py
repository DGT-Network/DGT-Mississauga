# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: bgx_settings/protobuf/validator.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='bgx_settings/protobuf/validator.proto',
  package='',
  syntax='proto3',
  serialized_options=_b('\n\025sawtooth.sdk.protobufP\001Z\rvalidator_pb2'),
  serialized_pb=_b('\n%bgx_settings/protobuf/validator.proto\")\n\x0bMessageList\x12\x1a\n\x08messages\x18\x01 \x03(\x0b\x32\x08.Message\"\x80\x1f\n\x07Message\x12*\n\x0cmessage_type\x18\x01 \x01(\x0e\x32\x14.Message.MessageType\x12\x16\n\x0e\x63orrelation_id\x18\x02 \x01(\t\x12\x0f\n\x07\x63ontent\x18\x03 \x01(\x0c\"\x9f\x1e\n\x0bMessageType\x12\x0b\n\x07\x44\x45\x46\x41ULT\x10\x00\x12\x17\n\x13TP_REGISTER_REQUEST\x10\x01\x12\x18\n\x14TP_REGISTER_RESPONSE\x10\x02\x12\x19\n\x15TP_UNREGISTER_REQUEST\x10\x03\x12\x1a\n\x16TP_UNREGISTER_RESPONSE\x10\x04\x12\x16\n\x12TP_PROCESS_REQUEST\x10\x05\x12\x17\n\x13TP_PROCESS_RESPONSE\x10\x06\x12\x18\n\x14TP_STATE_GET_REQUEST\x10\x07\x12\x19\n\x15TP_STATE_GET_RESPONSE\x10\x08\x12\x18\n\x14TP_STATE_SET_REQUEST\x10\t\x12\x19\n\x15TP_STATE_SET_RESPONSE\x10\n\x12\x1b\n\x17TP_STATE_DELETE_REQUEST\x10\x0b\x12\x1c\n\x18TP_STATE_DELETE_RESPONSE\x10\x0c\x12\x1f\n\x1bTP_RECEIPT_ADD_DATA_REQUEST\x10\r\x12 \n\x1cTP_RECEIPT_ADD_DATA_RESPONSE\x10\x0e\x12\x18\n\x14TP_EVENT_ADD_REQUEST\x10\x0f\x12\x19\n\x15TP_EVENT_ADD_RESPONSE\x10\x10\x12\x1f\n\x1b\x43LIENT_BATCH_SUBMIT_REQUEST\x10\x64\x12 \n\x1c\x43LIENT_BATCH_SUBMIT_RESPONSE\x10\x65\x12\x1d\n\x19\x43LIENT_BLOCK_LIST_REQUEST\x10\x66\x12\x1e\n\x1a\x43LIENT_BLOCK_LIST_RESPONSE\x10g\x12\"\n\x1e\x43LIENT_BLOCK_GET_BY_ID_REQUEST\x10h\x12\x1d\n\x19\x43LIENT_BLOCK_GET_RESPONSE\x10i\x12\x1d\n\x19\x43LIENT_BATCH_LIST_REQUEST\x10j\x12\x1e\n\x1a\x43LIENT_BATCH_LIST_RESPONSE\x10k\x12\x1c\n\x18\x43LIENT_BATCH_GET_REQUEST\x10l\x12\x1d\n\x19\x43LIENT_BATCH_GET_RESPONSE\x10m\x12#\n\x1f\x43LIENT_TRANSACTION_LIST_REQUEST\x10n\x12$\n CLIENT_TRANSACTION_LIST_RESPONSE\x10o\x12\"\n\x1e\x43LIENT_TRANSACTION_GET_REQUEST\x10p\x12#\n\x1f\x43LIENT_TRANSACTION_GET_RESPONSE\x10q\x12 \n\x1c\x43LIENT_STATE_CURRENT_REQUEST\x10r\x12!\n\x1d\x43LIENT_STATE_CURRENT_RESPONSE\x10s\x12\x1d\n\x19\x43LIENT_STATE_LIST_REQUEST\x10t\x12\x1e\n\x1a\x43LIENT_STATE_LIST_RESPONSE\x10u\x12\x1c\n\x18\x43LIENT_STATE_GET_REQUEST\x10v\x12\x1d\n\x19\x43LIENT_STATE_GET_RESPONSE\x10w\x12\x1f\n\x1b\x43LIENT_BATCH_STATUS_REQUEST\x10x\x12 \n\x1c\x43LIENT_BATCH_STATUS_RESPONSE\x10y\x12\x1e\n\x1a\x43LIENT_RECEIPT_GET_REQUEST\x10z\x12\x1f\n\x1b\x43LIENT_RECEIPT_GET_RESPONSE\x10{\x12#\n\x1f\x43LIENT_BLOCK_GET_BY_NUM_REQUEST\x10|\x12\x1c\n\x18\x43LIENT_PEERS_GET_REQUEST\x10}\x12\x1d\n\x19\x43LIENT_PEERS_GET_RESPONSE\x10~\x12.\n*CLIENT_BLOCK_GET_BY_TRANSACTION_ID_REQUEST\x10\x7f\x12)\n$CLIENT_BLOCK_GET_BY_BATCH_ID_REQUEST\x10\x80\x01\x12\x1e\n\x19\x43LIENT_STATUS_GET_REQUEST\x10\x81\x01\x12\x1f\n\x1a\x43LIENT_STATUS_GET_RESPONSE\x10\x82\x01\x12$\n\x1f\x43LIENT_EVENTS_SUBSCRIBE_REQUEST\x10\xf4\x03\x12%\n CLIENT_EVENTS_SUBSCRIBE_RESPONSE\x10\xf5\x03\x12&\n!CLIENT_EVENTS_UNSUBSCRIBE_REQUEST\x10\xf6\x03\x12\'\n\"CLIENT_EVENTS_UNSUBSCRIBE_RESPONSE\x10\xf7\x03\x12\x12\n\rCLIENT_EVENTS\x10\xf8\x03\x12\x1e\n\x19\x43LIENT_EVENTS_GET_REQUEST\x10\xf9\x03\x12\x1f\n\x1a\x43LIENT_EVENTS_GET_RESPONSE\x10\xfa\x03\x12\x13\n\x0eGOSSIP_MESSAGE\x10\xc8\x01\x12\x14\n\x0fGOSSIP_REGISTER\x10\xc9\x01\x12\x16\n\x11GOSSIP_UNREGISTER\x10\xca\x01\x12\x19\n\x14GOSSIP_BLOCK_REQUEST\x10\xcd\x01\x12\x1a\n\x15GOSSIP_BLOCK_RESPONSE\x10\xce\x01\x12%\n GOSSIP_BATCH_BY_BATCH_ID_REQUEST\x10\xcf\x01\x12+\n&GOSSIP_BATCH_BY_TRANSACTION_ID_REQUEST\x10\xd0\x01\x12\x1a\n\x15GOSSIP_BATCH_RESPONSE\x10\xd1\x01\x12\x1d\n\x18GOSSIP_GET_PEERS_REQUEST\x10\xd2\x01\x12\x1e\n\x19GOSSIP_GET_PEERS_RESPONSE\x10\xd3\x01\x12\x1d\n\x18GOSSIP_CONSENSUS_MESSAGE\x10\xd4\x01\x12\x10\n\x0bNETWORK_ACK\x10\xac\x02\x12\x14\n\x0fNETWORK_CONNECT\x10\xad\x02\x12\x17\n\x12NETWORK_DISCONNECT\x10\xae\x02\x12&\n!AUTHORIZATION_CONNECTION_RESPONSE\x10\xd8\x04\x12\x1c\n\x17\x41UTHORIZATION_VIOLATION\x10\xd9\x04\x12 \n\x1b\x41UTHORIZATION_TRUST_REQUEST\x10\xda\x04\x12!\n\x1c\x41UTHORIZATION_TRUST_RESPONSE\x10\xdb\x04\x12$\n\x1f\x41UTHORIZATION_CHALLENGE_REQUEST\x10\xdc\x04\x12%\n AUTHORIZATION_CHALLENGE_RESPONSE\x10\xdd\x04\x12#\n\x1e\x41UTHORIZATION_CHALLENGE_SUBMIT\x10\xde\x04\x12#\n\x1e\x41UTHORIZATION_CHALLENGE_RESULT\x10\xdf\x04\x12\x11\n\x0cPING_REQUEST\x10\xbc\x05\x12\x12\n\rPING_RESPONSE\x10\xbd\x05\x12\x1f\n\x1a\x43ONSENSUS_REGISTER_REQUEST\x10\xa0\x06\x12 \n\x1b\x43ONSENSUS_REGISTER_RESPONSE\x10\xa1\x06\x12\x1e\n\x19\x43ONSENSUS_SEND_TO_REQUEST\x10\xa2\x06\x12\x1f\n\x1a\x43ONSENSUS_SEND_TO_RESPONSE\x10\xa3\x06\x12 \n\x1b\x43ONSENSUS_BROADCAST_REQUEST\x10\xa4\x06\x12!\n\x1c\x43ONSENSUS_BROADCAST_RESPONSE\x10\xa5\x06\x12\'\n\"CONSENSUS_INITIALIZE_BLOCK_REQUEST\x10\xa6\x06\x12(\n#CONSENSUS_INITIALIZE_BLOCK_RESPONSE\x10\xa7\x06\x12%\n CONSENSUS_FINALIZE_BLOCK_REQUEST\x10\xa8\x06\x12&\n!CONSENSUS_FINALIZE_BLOCK_RESPONSE\x10\xa9\x06\x12&\n!CONSENSUS_SUMMARIZE_BLOCK_REQUEST\x10\xbc\x06\x12\'\n\"CONSENSUS_SUMMARIZE_BLOCK_RESPONSE\x10\xbd\x06\x12#\n\x1e\x43ONSENSUS_CANCEL_BLOCK_REQUEST\x10\xaa\x06\x12$\n\x1f\x43ONSENSUS_CANCEL_BLOCK_RESPONSE\x10\xab\x06\x12#\n\x1e\x43ONSENSUS_CHECK_BLOCKS_REQUEST\x10\xac\x06\x12$\n\x1f\x43ONSENSUS_CHECK_BLOCKS_RESPONSE\x10\xad\x06\x12#\n\x1e\x43ONSENSUS_COMMIT_BLOCK_REQUEST\x10\xae\x06\x12$\n\x1f\x43ONSENSUS_COMMIT_BLOCK_RESPONSE\x10\xaf\x06\x12#\n\x1e\x43ONSENSUS_IGNORE_BLOCK_REQUEST\x10\xb0\x06\x12$\n\x1f\x43ONSENSUS_IGNORE_BLOCK_RESPONSE\x10\xb1\x06\x12!\n\x1c\x43ONSENSUS_FAIL_BLOCK_REQUEST\x10\xb2\x06\x12\"\n\x1d\x43ONSENSUS_FAIL_BLOCK_RESPONSE\x10\xb3\x06\x12#\n\x1e\x43ONSENSUS_SETTINGS_GET_REQUEST\x10\xb4\x06\x12$\n\x1f\x43ONSENSUS_SETTINGS_GET_RESPONSE\x10\xb5\x06\x12 \n\x1b\x43ONSENSUS_STATE_GET_REQUEST\x10\xb6\x06\x12!\n\x1c\x43ONSENSUS_STATE_GET_RESPONSE\x10\xb7\x06\x12!\n\x1c\x43ONSENSUS_BLOCKS_GET_REQUEST\x10\xb8\x06\x12\"\n\x1d\x43ONSENSUS_BLOCKS_GET_RESPONSE\x10\xb9\x06\x12%\n CONSENSUS_CHAIN_HEAD_GET_REQUEST\x10\xba\x06\x12&\n!CONSENSUS_CHAIN_HEAD_GET_RESPONSE\x10\xbb\x06\x12$\n\x1f\x43ONSENSUS_NOTIFY_PEER_CONNECTED\x10\x84\x07\x12\'\n\"CONSENSUS_NOTIFY_PEER_DISCONNECTED\x10\x85\x07\x12\"\n\x1d\x43ONSENSUS_NOTIFY_PEER_MESSAGE\x10\x86\x07\x12\x1f\n\x1a\x43ONSENSUS_NOTIFY_BLOCK_NEW\x10\x87\x07\x12!\n\x1c\x43ONSENSUS_NOTIFY_BLOCK_VALID\x10\x88\x07\x12#\n\x1e\x43ONSENSUS_NOTIFY_BLOCK_INVALID\x10\x89\x07\x12\"\n\x1d\x43ONSENSUS_NOTIFY_BLOCK_COMMIT\x10\x8a\x07\x12\x19\n\x14\x43ONSENSUS_NOTIFY_ACK\x10\xe7\x07\x42(\n\x15sawtooth.sdk.protobufP\x01Z\rvalidator_pb2b\x06proto3')
)



_MESSAGE_MESSAGETYPE = _descriptor.EnumDescriptor(
  name='MessageType',
  full_name='Message.MessageType',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='DEFAULT', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TP_REGISTER_REQUEST', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TP_REGISTER_RESPONSE', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TP_UNREGISTER_REQUEST', index=3, number=3,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TP_UNREGISTER_RESPONSE', index=4, number=4,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TP_PROCESS_REQUEST', index=5, number=5,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TP_PROCESS_RESPONSE', index=6, number=6,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TP_STATE_GET_REQUEST', index=7, number=7,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TP_STATE_GET_RESPONSE', index=8, number=8,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TP_STATE_SET_REQUEST', index=9, number=9,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TP_STATE_SET_RESPONSE', index=10, number=10,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TP_STATE_DELETE_REQUEST', index=11, number=11,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TP_STATE_DELETE_RESPONSE', index=12, number=12,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TP_RECEIPT_ADD_DATA_REQUEST', index=13, number=13,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TP_RECEIPT_ADD_DATA_RESPONSE', index=14, number=14,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TP_EVENT_ADD_REQUEST', index=15, number=15,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TP_EVENT_ADD_RESPONSE', index=16, number=16,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_BATCH_SUBMIT_REQUEST', index=17, number=100,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_BATCH_SUBMIT_RESPONSE', index=18, number=101,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_BLOCK_LIST_REQUEST', index=19, number=102,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_BLOCK_LIST_RESPONSE', index=20, number=103,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_BLOCK_GET_BY_ID_REQUEST', index=21, number=104,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_BLOCK_GET_RESPONSE', index=22, number=105,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_BATCH_LIST_REQUEST', index=23, number=106,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_BATCH_LIST_RESPONSE', index=24, number=107,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_BATCH_GET_REQUEST', index=25, number=108,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_BATCH_GET_RESPONSE', index=26, number=109,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_TRANSACTION_LIST_REQUEST', index=27, number=110,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_TRANSACTION_LIST_RESPONSE', index=28, number=111,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_TRANSACTION_GET_REQUEST', index=29, number=112,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_TRANSACTION_GET_RESPONSE', index=30, number=113,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_STATE_CURRENT_REQUEST', index=31, number=114,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_STATE_CURRENT_RESPONSE', index=32, number=115,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_STATE_LIST_REQUEST', index=33, number=116,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_STATE_LIST_RESPONSE', index=34, number=117,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_STATE_GET_REQUEST', index=35, number=118,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_STATE_GET_RESPONSE', index=36, number=119,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_BATCH_STATUS_REQUEST', index=37, number=120,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_BATCH_STATUS_RESPONSE', index=38, number=121,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_RECEIPT_GET_REQUEST', index=39, number=122,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_RECEIPT_GET_RESPONSE', index=40, number=123,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_BLOCK_GET_BY_NUM_REQUEST', index=41, number=124,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_PEERS_GET_REQUEST', index=42, number=125,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_PEERS_GET_RESPONSE', index=43, number=126,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_BLOCK_GET_BY_TRANSACTION_ID_REQUEST', index=44, number=127,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_BLOCK_GET_BY_BATCH_ID_REQUEST', index=45, number=128,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_STATUS_GET_REQUEST', index=46, number=129,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_STATUS_GET_RESPONSE', index=47, number=130,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_EVENTS_SUBSCRIBE_REQUEST', index=48, number=500,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_EVENTS_SUBSCRIBE_RESPONSE', index=49, number=501,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_EVENTS_UNSUBSCRIBE_REQUEST', index=50, number=502,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_EVENTS_UNSUBSCRIBE_RESPONSE', index=51, number=503,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_EVENTS', index=52, number=504,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_EVENTS_GET_REQUEST', index=53, number=505,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CLIENT_EVENTS_GET_RESPONSE', index=54, number=506,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='GOSSIP_MESSAGE', index=55, number=200,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='GOSSIP_REGISTER', index=56, number=201,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='GOSSIP_UNREGISTER', index=57, number=202,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='GOSSIP_BLOCK_REQUEST', index=58, number=205,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='GOSSIP_BLOCK_RESPONSE', index=59, number=206,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='GOSSIP_BATCH_BY_BATCH_ID_REQUEST', index=60, number=207,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='GOSSIP_BATCH_BY_TRANSACTION_ID_REQUEST', index=61, number=208,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='GOSSIP_BATCH_RESPONSE', index=62, number=209,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='GOSSIP_GET_PEERS_REQUEST', index=63, number=210,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='GOSSIP_GET_PEERS_RESPONSE', index=64, number=211,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='GOSSIP_CONSENSUS_MESSAGE', index=65, number=212,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='NETWORK_ACK', index=66, number=300,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='NETWORK_CONNECT', index=67, number=301,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='NETWORK_DISCONNECT', index=68, number=302,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='AUTHORIZATION_CONNECTION_RESPONSE', index=69, number=600,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='AUTHORIZATION_VIOLATION', index=70, number=601,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='AUTHORIZATION_TRUST_REQUEST', index=71, number=602,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='AUTHORIZATION_TRUST_RESPONSE', index=72, number=603,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='AUTHORIZATION_CHALLENGE_REQUEST', index=73, number=604,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='AUTHORIZATION_CHALLENGE_RESPONSE', index=74, number=605,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='AUTHORIZATION_CHALLENGE_SUBMIT', index=75, number=606,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='AUTHORIZATION_CHALLENGE_RESULT', index=76, number=607,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='PING_REQUEST', index=77, number=700,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='PING_RESPONSE', index=78, number=701,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_REGISTER_REQUEST', index=79, number=800,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_REGISTER_RESPONSE', index=80, number=801,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_SEND_TO_REQUEST', index=81, number=802,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_SEND_TO_RESPONSE', index=82, number=803,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_BROADCAST_REQUEST', index=83, number=804,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_BROADCAST_RESPONSE', index=84, number=805,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_INITIALIZE_BLOCK_REQUEST', index=85, number=806,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_INITIALIZE_BLOCK_RESPONSE', index=86, number=807,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_FINALIZE_BLOCK_REQUEST', index=87, number=808,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_FINALIZE_BLOCK_RESPONSE', index=88, number=809,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_SUMMARIZE_BLOCK_REQUEST', index=89, number=828,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_SUMMARIZE_BLOCK_RESPONSE', index=90, number=829,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_CANCEL_BLOCK_REQUEST', index=91, number=810,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_CANCEL_BLOCK_RESPONSE', index=92, number=811,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_CHECK_BLOCKS_REQUEST', index=93, number=812,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_CHECK_BLOCKS_RESPONSE', index=94, number=813,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_COMMIT_BLOCK_REQUEST', index=95, number=814,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_COMMIT_BLOCK_RESPONSE', index=96, number=815,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_IGNORE_BLOCK_REQUEST', index=97, number=816,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_IGNORE_BLOCK_RESPONSE', index=98, number=817,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_FAIL_BLOCK_REQUEST', index=99, number=818,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_FAIL_BLOCK_RESPONSE', index=100, number=819,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_SETTINGS_GET_REQUEST', index=101, number=820,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_SETTINGS_GET_RESPONSE', index=102, number=821,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_STATE_GET_REQUEST', index=103, number=822,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_STATE_GET_RESPONSE', index=104, number=823,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_BLOCKS_GET_REQUEST', index=105, number=824,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_BLOCKS_GET_RESPONSE', index=106, number=825,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_CHAIN_HEAD_GET_REQUEST', index=107, number=826,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_CHAIN_HEAD_GET_RESPONSE', index=108, number=827,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_NOTIFY_PEER_CONNECTED', index=109, number=900,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_NOTIFY_PEER_DISCONNECTED', index=110, number=901,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_NOTIFY_PEER_MESSAGE', index=111, number=902,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_NOTIFY_BLOCK_NEW', index=112, number=903,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_NOTIFY_BLOCK_VALID', index=113, number=904,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_NOTIFY_BLOCK_INVALID', index=114, number=905,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_NOTIFY_BLOCK_COMMIT', index=115, number=906,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONSENSUS_NOTIFY_ACK', index=116, number=999,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=182,
  serialized_end=4053,
)
_sym_db.RegisterEnumDescriptor(_MESSAGE_MESSAGETYPE)


_MESSAGELIST = _descriptor.Descriptor(
  name='MessageList',
  full_name='MessageList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='messages', full_name='MessageList.messages', index=0,
      number=1, type=11, cpp_type=10, label=3,
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
  serialized_start=41,
  serialized_end=82,
)


_MESSAGE = _descriptor.Descriptor(
  name='Message',
  full_name='Message',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='message_type', full_name='Message.message_type', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='correlation_id', full_name='Message.correlation_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='content', full_name='Message.content', index=2,
      number=3, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _MESSAGE_MESSAGETYPE,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=85,
  serialized_end=4053,
)

_MESSAGELIST.fields_by_name['messages'].message_type = _MESSAGE
_MESSAGE.fields_by_name['message_type'].enum_type = _MESSAGE_MESSAGETYPE
_MESSAGE_MESSAGETYPE.containing_type = _MESSAGE
DESCRIPTOR.message_types_by_name['MessageList'] = _MESSAGELIST
DESCRIPTOR.message_types_by_name['Message'] = _MESSAGE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

MessageList = _reflection.GeneratedProtocolMessageType('MessageList', (_message.Message,), dict(
  DESCRIPTOR = _MESSAGELIST,
  __module__ = 'bgx_settings.protobuf.validator_pb2'
  # @@protoc_insertion_point(class_scope:MessageList)
  ))
_sym_db.RegisterMessage(MessageList)

Message = _reflection.GeneratedProtocolMessageType('Message', (_message.Message,), dict(
  DESCRIPTOR = _MESSAGE,
  __module__ = 'bgx_settings.protobuf.validator_pb2'
  # @@protoc_insertion_point(class_scope:Message)
  ))
_sym_db.RegisterMessage(Message)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
