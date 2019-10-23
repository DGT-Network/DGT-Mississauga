// Copyright 2018 NTRlab
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// -----------------------------------------------------------------------------

import { combineReducers } from 'redux'
import {
  GET_TRANSACTIONS,
  GET_PEERS,
  SELECT_PEER,
  GET_STATE,
  GET_STATES,
  GET_BLOCKS,
  HIDE_BLOCKS,
  SHOW_BLOCKS,
  GET_TOPOLOGY,
  GET_DAG_NEST,
  BLOCKS_LOADING,
  STATES_LOADING,
  TRANSACTIONS_LOADING,
  PEERS_LOADING,
  TOPOLOGY_LOADING,
  DAG_NEST_LOADING,
  FILTER_PEERS,
  SHOW_MODAL,

  GET_BATCHES,
  BATCHES_LOADING,
  GET_BATCH,
  BATCH_LOADING,

  GET_RUN,
  GET_REFRESH,

  LOAD_TX_FAMILY,

  GET_RUN_DEMO,

  PRINT_TOPOLOGY,
  PRINT_TRANSACTIONS,
  PRINT_BATCHES,
  PRINT_JSON
} from '../actions/actions'
import {addState} from '../logic/state'
import {filterPeers} from '../logic/peers'
import { convertBlocks, compactBlocks } from '../logic/blocks'

const initialModalState = {
  json: {},
}

const initialState = {
  data: [],
  loading: false,
}

const initialBatches = {
  command: {},
  data: [],
  loading: false,
  batch: [],
  batchLoading: false,
}

const initialBlocks = {
  topology: [],
  dagNest: {},
  loading: false,
  nodes: {
    identity: {
      Cluster: 'Loading...',
    },
    Network: 'Loading...',
    data: [],
    filters: {},
    topology: 'static'}
}

const initialPeersState = {
  data: [],
  selectedPeer: null,
}

function stateReducer(state=initialState, action) {
  switch(action.type) {
    case GET_STATES:
      return Object.assign({}, state, {
        data: action.data,
        loading: false,
      });

    case STATES_LOADING:
      return Object.assign({}, state, {
        loading: true,
      });

    case GET_STATE:
      return Object.assign({}, state, {
        data: addState(state.data, action.data)
      });

    case PRINT_TOPOLOGY: {
      setTimeout(() => window.print(), 2000);
      return Object.assign({}, state, {
        print: 0
      });
    }
    case PRINT_TRANSACTIONS:
      setTimeout(() => window.print(), 2000);
      return Object.assign({}, state, {
        print: 1
      });
    case PRINT_BATCHES:
      setTimeout(() => window.print(), 2000);
      return Object.assign({}, state, {
        print: 2
      });

    case PRINT_JSON:
      setTimeout(() => window.print(), 2000);
      return Object.assign({}, state, {
        print: 3,
        print_json: action.json,
        print_header: action.header
      });

    default:
      return state;
  }
  return state;
}

function demoReducer(state=initialState, action) {
  console.log('ddddd',action);
  switch(action.type) {
    case GET_RUN_DEMO:
      return {...state, loading: false, data: [...state.data, {...action.data, date: Date.now()}]};
      default:
        return state;
  }
  return state;
}

function blocksReducer(state=initialBlocks, action) {
  switch(action.type) {
    case SHOW_BLOCKS:
      return Object.assign({}, state, {
        currentBlocks: state.currentBlocks.map(b =>{
          if( action.block.hidden.includes(b.IP) ) {
            b.isHidden = false;
            b.selected = true;
          }
          else b.selected = false;

          return b;
        }).map(b => {
          if ( b.IP == action.block.IP ) {
            b.name = action.block.name == '+' ? '-' : '+';
            b.dependedOnBy = b.firstDependedOnBy;
          }
          if (b.IP == action.block.lastDependedOnBy) {
            b.depends = action.block.preLastDependedOnBy;
          }
          return b;
        }),
        loading: false,
      });
    case HIDE_BLOCKS:
      return Object.assign({}, state, {
        currentBlocks: state.currentBlocks.map(b =>{
          if( action.block.hidden.includes(b.IP) ) b.isHidden = true;
          b.selected = false;

          return b;
        }).map(b => {
          if ( b.IP == action.block.IP ) {
            b.name = action.block.name == '+' ? '-' : '+';
            b.dependedOnBy = b.lastDependedOnBy;
          }
          if (b.IP == action.block.lastDependedOnBy) {
            b.depends = [action.block.IP];
          }
          return b;
        }),
        loading: false,
      });
    case GET_BLOCKS:
      return Object.assign({}, state, {
        originalBlocks: convertBlocks(action.data),
        currentBlocks:  compactBlocks(convertBlocks(action.data)),
        loading: false,
      });
    case GET_TOPOLOGY:
      return Object.assign({}, state, {
        topology: action.data,
        nodes: action.nodesData,
        currentBlocks:  compactBlocks(state.originalBlocks),
        loading: false,
      });
    case GET_DAG_NEST:
      return Object.assign({}, state, {
        dagNest: action.data,
        currentBlocks:  compactBlocks(state.originalBlocks, action.data),
        loading: false,
      });

    case BLOCKS_LOADING:
      return Object.assign({}, state, {
        loading: true,
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
        data: action.data,
        loading: false,
      });

    case TRANSACTIONS_LOADING:
      return Object.assign({}, state, {
        loading: true,
      });

      default:
        return state;
  }
  return state;
}

function batchesReducer(state=initialBatches, action) {
  switch(action.type) {
    case GET_BATCHES:
      return Object.assign({}, state, {
        data: action.data,
        loading: false,
      });

    case BATCHES_LOADING:
      return Object.assign({}, state, {
        loading: true,
      });
    case GET_BATCH:
      return Object.assign({}, state, {
        batch: action.data,
        batchLoading: false,
      });

    case BATCHES_LOADING:
      return Object.assign({}, state, {
        batchLoading: true,
      });
      default:
        return state;
    case GET_RUN:
      return Object.assign({}, state, {
        command: action.data,
        batch_link: undefined,
        batchLoading: false,
      });
    case GET_REFRESH:
      return Object.assign({}, state, {
        batch_link: action.data,
        batchLoading: false,
      });
  }
  return state;
}

function peersReducer(state=initialPeersState, action) {
  switch(action.type) {
    case GET_PEERS:
      return Object.assign({}, state, {
        data: action.data,
        loading: false,
      });

    case PEERS_LOADING:
      return Object.assign({}, state, {
        loading: true,
      });

      default:
        return state;
  }
  return state;
}

function modalReducer(state=initialModalState, action) {
  switch(action.type) {
    case SHOW_MODAL:
      return Object.assign({}, state, action.json);

      default:
        return state;
  }
  return state;
}

function familiesReducer(state=initialState, action) {
  switch(action.type) {
    case LOAD_TX_FAMILY:
      return Object.assign({}, state, {
        data: action.data,
        loading: false,
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
  batchesReducer,
  modalReducer,
  familiesReducer,
  demoReducer,
})

export default BJXReducer;
