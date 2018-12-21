import axios from 'axios';

import { nodes, transactions, states, state, blocks } from '../dummies'

import { convertPeers } from '../logic/peers'
import { convertTransactions } from '../logic/transactions'
import { convertStates, convertState } from '../logic/state'
import { convertBlocks } from '../logic/blocks'

const apiUrl = 'http://18.222.233.160:8003';

export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';

export const GET_STATES = 'GET_STATES';
export const GET_STATE = 'GET_STATE';

export const GET_BLOCKS = 'GET_BLOCKS';

export const GET_PEERS = 'GET_PEERS';

export const SHOW_MODAL = 'SHOW_MODAL';

export function getTransactions() {
  return function(dispatch) {
    return axios.get(`${apiUrl}/transactions`)
      .then( response => {
        dispatch(getTransactionsSuccess(convertTransactions(response.data)))
      })
      .catch(error => {
        throw(error);
        // console.log(error)
        // dispatch(getTransactionsSuccess(convertTransactions(transactions)));
      })
  };
}

export function getStates() {
  return function(dispatch) {
    return axios.get(`${apiUrl}/state`)
      .then( response => {
        dispatch(getStatesSuccess(convertStates(response.data)))
      })
      .catch(error => {
        throw(error);
        // console.log(error)
        // dispatch(getStatesSuccess(convertStates(states)));
      })
  };
}

export function getState(address) {
  return function(dispatch) {
    return axios.get(`${apiUrl}/state/${address}`)
      .then( response => {
        dispatch(getStateSuccess(convertState(response.data, address)))
        dispatch(showModal(response.data))
      })
      .catch(error => {
        throw(error);
        // console.log(error)
        // dispatch(getStateSuccess(convertState(state, address)));
        // dispatch(showModal({title: 'State raw data',
          // json: state.data
        // }))
      })
  };
}

export function getBlocks() {
  return function(dispatch) {
    return axios.get(`${apiUrl}/blocks`)
      .then( response => {
        dispatch(getBlocksSuccess(convertBlocks(response.data)))
      })
      .catch(error => {
        throw(error);
        // console.log(error)
        // dispatch(getBlocksSuccess(convertBlocks(blocks)));
      })
  };
}

export function getPeers() {
  return function(dispatch) {
    return axios.get(`${apiUrl}/peers`)
      .then( response => {
        dispatch(getPeersSuccess(convertPeers(response.data)))
      })
      .catch(error => {
        throw(error);
        // console.log(error)
        // dispatch(getPeersSuccess(convertPeers(nodes)))
      })
  };
}

function getStatesSuccess(data) {
  return {
    type: GET_STATES,
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
    data,
    };
}

function getPeersSuccess(data) {
  return {
    type: GET_PEERS,
    data,
    };
}

function getTransactionsSuccess(data) {
  return {
    type: GET_TRANSACTIONS,
    data,
    };
}

export function showModal(json) {
   return {
    type: SHOW_MODAL,
    json,
    };
}
