import React from 'react';
import { render } from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import 'bootstrap';
import './app.scss';

import Main from './components/Main';

import BJXReducer from './reducers/BJXReducer';

import { getTransactions, getPeers, getStates, getBlocks } from './actions/actions';


library.add(faEnvelope)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

window.store = createStore(BJXReducer,
  composeEnhancer(applyMiddleware(thunk)),);

store.dispatch(getTransactions());
store.dispatch(getPeers());
store.dispatch(getStates());
store.dispatch(getBlocks());

render(
  <Provider store={store}>
    <Main/>
  </Provider>
  , document.getElementById("app")
);
