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

import axios from 'axios';
import { nodes, transactions, states, state, blocks, topology,
  dagNest, batches, reciept,linkLink, linkData, tx_families  } from '../dummies'

import { convertPeers } from '../logic/peers'
import { convertTransactions } from '../logic/transactions'
import { convertStates, convertState } from '../logic/state'
import { convertTopology } from '../logic/topology'
import { convertDagNest } from '../logic/dagNest'
import { convertBatches, convertBatch } from '../logic/batches'

export const apiUrl = location.origin;
//const apiUrl = 'http://18.217.2.175:8003';
//const apiUrl = 'http://18.222.233.160:8003';

export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const GET_BATCHES = 'GET_BATCHES';
export const GET_BATCH = 'GET_BATCH';
export const GET_STATES = 'GET_STATES';
export const GET_STATE = 'GET_STATE';
export const GET_BLOCKS = 'GET_BLOCKS';
export const HIDE_BLOCKS = 'HIDE_BLOCKS';
export const SHOW_BLOCKS = 'SHOW_BLOCKS';
export const GET_PEERS = 'GET_PEERS';
export const GET_TOPOLOGY = 'GET_TOPOLOGY';
export const GET_DAG_NEST = 'GET_DAG_NEST';
export const GET_RUN = 'GET_RUN';
export const GET_REFRESH = 'GET_REFRESH';

export const TRANSACTIONS_LOADING = 'TRANSACTIONS_LOADING';
export const BATCHES_LOADING = 'BATCHES_LOADING';
export const BATCH_LOADING = 'BATCH_LOADING';
export const STATES_LOADING = 'STATES_LOADING';
export const BLOCKS_LOADING = 'BLOCKS_LOADING';
export const PEERS_LOADING = 'PEERS_LOADING';
export const TOPOLOGY_LOADING = 'TOPOLOGY_LOADING';
export const DAG_NEST_LOADING = 'DAG_NEST_LOADING';

export const PRINT_TOPOLOGY = 'PRINT_TOPOLOGY';
export const PRINT_TRANSACTIONS = 'PRINT_TRANSACTIONS';
export const PRINT_BATCHES = 'PRINT_BATCHES';
export const PRINT_JSON = 'PRINT_JSON';
export const LOAD_TX_FAMILY = 'LOAD_TX_FAMILY';

export const SHOW_MODAL = 'SHOW_MODAL';

export const GET_RUN_DEMO = 'GET_RUN_DEMO'

const local = false;

function nextPage(url, data, resolve, reject){
  return axios.get(url).
    then( response => {
      var r = response.data
      var recievedData = data.concat(r.data)

      if ('paging' in r && 'next' in r.paging){
        nextPage(r.paging.next, recievedData, resolve, reject);
      }
      else {
        resolve(recievedData);
      }
    })
    .catch(error => {
      console.log(error)
      reject(error);
    })
}

export function getTransactions() {
  return function(dispatch) {
    dispatch(transactionsLoading());

    if (local) {
      return new Promise(resolve => {
        resolve( dispatch(getTransactionsSuccess(convertTransactions(transactions.data))));
      });
    }

    new Promise((resolve, reject) => {
      nextPage(`${apiUrl}/transactions`,[],resolve, reject)
    }).then( data => {
        dispatch(getTransactionsSuccess(convertTransactions(data)));
      })
      .catch(error => {
        console.log(error)
        throw(error);
      })
  };
}

export function getBatches() {
  return function(dispatch) {
    dispatch(batchesLoading());

    if (local) {
      return new Promise(resolve => {
        resolve( dispatch(getBatchesSuccess(convertBatches(batches.data))));
      });
    }

    new Promise((resolve, reject) => {
      nextPage(`${apiUrl}/batches`,[],resolve, reject)
    }).then( data => {
        dispatch(getBatchesSuccess(convertBatches(data)));
      })
      .catch(error => {
        console.log(error);
        throw(error);
      })
  };
}

export function getBatchDetails(dispatch, id) {
    dispatch(batchLoading());

    if (local) {
       // dispatch(convertTransactions(transactions.data));
      dispatch(getBatchSuccess(convertBatch(reciept.data)));
      return;
    }

  return axios.get(`${apiUrl}/batch_statuses?id=${id}`).then( response => {
    dispatch(getBatchSuccess(convertBatch(response.data)));
  })
  .catch(error => {
        alert(error);
    throw(error);
  })
}

export function getStates() {
  return function(dispatch) {
    dispatch(statesLoading());
     new Promise((resolve, reject) => {
      nextPage(`${apiUrl}/state`,[],resolve, reject)
    }).then( data => {
        dispatch(getStatesSuccess(convertStates(data)));
      })
      .catch(error => {
        throw(error);
      })
  };
}

export function getState(address) {
  return function(dispatch) {
    new Promise((resolve, reject) => {
      nextPage(`${apiUrl}/state/${address}`,[],resolve, reject)
    }).then( data => {
        dispatch(getStateSuccess(convertState(data, address)));
      })
      .catch(error => {
        throw(error);
      })
  };
}

export function getBlocks() {
  return dispatch => {
    dispatch(blocksLoading());

    if (local)
      return new Promise(resolve => {
        resolve( dispatch(getBlocksSuccess(blocks.data)) );
      });

    return new Promise((resolve, reject) => {
      nextPage(`${apiUrl}/blocks`,[],resolve, reject)
    }).then( data => {
      dispatch(getBlocksSuccess(data));
    })
  };
}

export function getPeers() {
  return function(dispatch) {
    dispatch(peersLoading());
    return axios.get(`${apiUrl}/peers`)
      .then( response => {
        dispatch(getPeersSuccess(convertPeers(response.data)));
      })
      .catch(error => {
        throw(error);
      })
  };
}

export function getTopology() {
  return function(dispatch) {
    dispatch(topologyLoading());

    if (local)
      return new Promise(resolve => {
        resolve( dispatch(getTopologySuccess(topology.data)));
      });

    return axios.get(`${apiUrl}/topology`)
      .then( response => {
        dispatch(getTopologySuccess(response.data.data));
      })
      .catch(error => {
        throw(error);
      })
  };
}

export function getBlocksAndTopology() {
  return dispatch => {
    return dispatch(getBlocks()).then(() => {
      return dispatch(getTopology());
    });
  }
}

export function getBlocksAndTopologyAndDagNest() {
  return dispatch => {
    return dispatch(getBlocks()).then(() => {
      return dispatch(getTopology()).then(() => {
        return dispatch(getDagNest());
      });
    });
  }
}

export function getDagNest() {
  return function(dispatch) {
    dispatch(dagNestLoading());

    if (local)
      return new Promise(resolve => {
        resolve( dispatch(getDagNestSuccess(convertDagNest(dagNest.data)) ));
      });

    return axios.get(`${apiUrl}/dag/nest`)
      .then( response => {
        dispatch(getDagNestSuccess(convertDagNest(response.data.data)));
      })
      .catch(error => {
        throw(error);
      })
  };
}

export function changeDashboard(dispatch, code = null) {
  const url = code == null ? `${apiUrl}/validator` : `${apiUrl}/validator?endpoint=${encodeURI(code)}`
  return axios.get(`${url}`).then( response => {
    dispatch(getBlocksAndTopologyAndDagNest());

    dispatch(getTransactions());
    dispatch(getStates());
  })
  .catch(error => {
        alert(error);
    throw(error);
  })
}

export function run(dispatch, params) {
  if (local) {
    dispatch(getRunSuccess(linkData))
    return;
  }

  return axios.get(`${apiUrl}/run?${new URLSearchParams(params).toString()}`).then( response => {
    dispatch(getRunSuccess(response.data))
  })
  .catch(error => {
        alert(error);
    throw(error);
  })
}

export function getRunDemoSuccess(dispatch, link) {
  if (local) {
    if ('data' in link)
      dispatch(getRunDemoStatusSuccess(link))
    else
      setTimeout(() => getRunDemoSuccess(dispatch, link), 500);
    return;
  }

  return axios.get(`${apiUrl}/run_statuses?link=${encodeURI(link)}`).then( response => {
      dispatch(getRunDemoStatusSuccess(convertBatch(response.data)));
  })
  .catch(error => {
        alert(error);
    throw(error);
  })
}

export function runDemo(dispatch, params) {
  if (local) {
    getRunDemoSuccess(dispatch, linkData);
    return;
  }

  return axios.get(`${apiUrl}/run?${new URLSearchParams(params).toString()}`).then( response => {
    getRunDemoSuccess(dispatch, response.data);
  })
  .catch(error => {
        alert(error);
    throw(error);
  })
}


export function refreshLink(dispatch, link) {
  if (local) {
    dispatch(getRefreshSuccess(reciept))
    return;
    params.url = 'http://127.0.0.1:8080'
  }

  return axios.get(`${apiUrl}/run_statuses?link=${encodeURI(link)}`).then( response => {
      dispatch(getRefreshSuccess(convertBatch(response.data)));
  })
  .catch(error => {
        alert(error);
    throw(error);
  })
}

export function loadTxFamilies(dispatch) {
  if (local) {
    dispatch(loadTxFamiliesSuccess(tx_families.data))
    return;
  }

  return axios.get(`${apiUrl}/tx_families`).then( response => {
    dispatch(loadTxFamiliesSuccess(response.data.data))
  })
  .catch(error => {
        alert(error);
    throw(error);
  })
}

export function getReceipt(dispatch, id) {
  return axios.get(`${apiUrl}/receipts?id=${id}`).then( response => {
    dispatch(showModal({title: 'Raw Receipt',
                        json: response.data}
                        ))
  })
  .catch(error => {
        alert(error);
    throw(error);
  })
}

export function showModal2(dispatch, json) {
  return new Promise(resolve => {
    resolve( dispatch(showModal(json)));
  });
}


export function changeCollapseBlocks(block) {
  return {
    type: block.name == '+' ? HIDE_BLOCKS : SHOW_BLOCKS,
    block: block,
  }
}

export function showModal(json) {
   return {
    type: SHOW_MODAL,
    json,
    };
}

function getStatesSuccess(data) {
  return {
    type: GET_STATES,
    loading: false,
    data,
    };
}

function getStateSuccess(data) {
  return {
    type: GET_STATE,
    data,
    };
}

function getBlocksSuccess(data) {
  return {
    type: GET_BLOCKS,
    loading: false,
    data,
    };
}

function getPeersSuccess(data) {
  return {
    type: GET_PEERS,
    loading: false,
    data,
    };
}

function getTopologySuccess(data) {
  return {
    type: GET_TOPOLOGY,
    loading: false,
    data: convertTopology(data),
    nodesData: convertPeers(data)
    };
}

function loadTxFamiliesSuccess(data) {
  return {
    type: LOAD_TX_FAMILY,
    loading: false,
    data,
    };
}

function getDagNestSuccess(data) {
  return {
    type: GET_DAG_NEST,
    loading: false,
    data,
    };
}

function getTransactionsSuccess(data) {
  return {
    type: GET_TRANSACTIONS,
    loading: false,
    data,
    };
}

function getBatchesSuccess(data) {
  return {
    type: GET_BATCHES,
    loading: false,
    data,
    };
}

function getBatchSuccess(data) {
  return {
    type: GET_BATCH,
    loading: false,
    data,
    };
}

function getRunSuccess(data) {
  return {
    type: GET_RUN,
    loading: false,
    data,
    };
}

function getRefreshSuccess(data) {
  return {
    type: GET_REFRESH,
    loading: false,
    data,
    };
}

function getRunDemoStatusSuccess(data) {
  return {
    type: GET_RUN_DEMO,
    loading: false,
    data,
    };
}

function blocksLoading() {
  return {
    type: BLOCKS_LOADING,
    loading: true,
    };
}

function statesLoading() {
  return {
    type: STATES_LOADING,
    loading: true,
    };
}

function transactionsLoading() {
  return {
    type: TRANSACTIONS_LOADING,
    loading: true,
    };
}

function batchesLoading() {
  return {
    type: BATCHES_LOADING,
    loading: true,
    };
}

function batchLoading() {
  return {
    type: BATCH_LOADING,
    loading: true,
    };
}
function peersLoading() {
  return {
    type: PEERS_LOADING,
    loading: true,
    };
}

function topologyLoading() {
  return {
    type: TOPOLOGY_LOADING,
    loading: true,
    };
}

function dagNestLoading() {
  return {
    type: DAG_NEST_LOADING,
    loading: true,
    };
}
