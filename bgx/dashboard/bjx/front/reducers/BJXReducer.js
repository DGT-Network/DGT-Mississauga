import { combineReducers } from 'redux'
import { GET_TRANSACTIONS, GET_PEERS, SELECT_PEER, GET_STATE, GET_STATES, GET_BLOCKS, FILTER_PEERS} from '../actions/actions'
import {addState} from '../logic/state'
import {filterPeers} from '../logic/peers'

const initialState = {
  data: [],
}

const initialPeersState = {
  data: [],
  selectedPeer: null,
}

function stateReducer(state=initialState, action) {
  switch(action.type) {
    case GET_STATES:
      return Object.assign({}, state, {
        data: action.data
      });

    case GET_STATE:
      return Object.assign({}, state, {
        data: addState(state.data, action.data)
      });

    default:
      return state;
  }
  return state;
}

function blocksReducer(state=initialState, action) {
  switch(action.type) {
    case GET_BLOCKS:
      return Object.assign({}, state, {
        data: action.data
      });

      default:
        return state;
  }
  return state;
}

function transactionReducer(state=initialState, action) {
  switch(action.type) {
    case GET_TRANSACTIONS:
      return Object.assign({}, state, {
        data: action.data
      });

      default:
        return state;
  }
  return state;
}

function peersReducer(state=initialPeersState, action) {
  switch(action.type) {
    case GET_PEERS:
      return Object.assign({}, state, {
        data: action.data
      });

    case FILTER_PEERS:
      return Object.assign({}, state, {
        data: filterPeers(state.data, action.filter)
    });

    case SELECT_PEER:
      return Object.assign({}, state, {
        selectedPeerIP: action.IP
      });

      default:
        return state;
  }
  return state;
}

const BJXReducer = combineReducers({
  transactionReducer,
  peersReducer,
  stateReducer,
  blocksReducer,
})

export default BJXReducer;
