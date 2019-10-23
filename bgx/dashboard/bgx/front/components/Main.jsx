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

import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import packageJson from '../../package.json';
import $ from 'jquery';
import JSONPretty from 'react-json-pretty';
import ReactTable from 'react-table'
import Hash from './Hash'

import Transactions from './Transactions';
import Blocks from './Blocks';
import State from './State';
import Peers from './Peers';
import Network from './Network';
import Stat from './Stat';
import Wallet from './Wallet';
import Feedback from './Feedback';
import LogoSvg from '../assets/logo.svg';
import Modal from './Modal';
import Batches from './Batches';
import BatchCreator from './BatchCreator';
import Demonstration from './Demonstration';

import { getTransactions, getPeers, getStates, getBlocks } from '../actions/actions';

class Main extends React.Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this);
    this.state= {name: packageJson.name,
      version: packageJson.version}
  }
  handleClick() {
    store.dispatch(getTransactions());
    store.dispatch(getPeers());
    store.dispatch(getStates());
    store.dispatch(getBlocks());
  }

  render() {
    const {name, version} = packageJson;

    return (
      <div>
      <div className='web'>
        <Modal/>
        <nav className={classNames('navbar', 'navbar-light', 'navbar-expand-lg', 'bg-light')}>
          <a className="navbar-brand" href="#">
           <span className="logo" dangerouslySetInnerHTML={{ __html: LogoSvg }}></span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={classNames('collapse', 'navbar-collapse')} id="navbarNav">
            <ul className={classNames('nav', 'navbar-nav')}>
              <li className="nav-item">
                <a className={classNames('nav-link active')}
                   id="network-tab"
                   data-toggle="tab"
                   href="#network"
                   role="tab">
                  Network
                </a>
              </li>
              <li className="nav-item">
                <a className='nav-link'
                   id="peers-tab"
                   data-toggle="tab"
                   href="#peers"
                   role="tab">
                  Nodes
                </a>
              </li>
              <li className="nav-item">
                <a className='nav-link'
                   id="transactions-tab"
                   data-toggle="tab"
                   href="#transactions"
                   role="tab">
                  Transactions
                </a>
              </li>
              <li className="nav-item">
                <a className='nav-link'
                   id="blocks-tab"
                   data-toggle="tab"
                   href="#blocks"
                   role="tab">
                  Ledger
                </a>
              </li>
              <li className="nav-item">
                <a className='nav-link'
                   id="batches-tab"
                   data-toggle="tab"
                   href="#batches"
                   role="tab">
                  Batches
                </a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dev
                </a>
                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className='dropdown-item'
                       id="state-tab"
                       data-toggle="tab"
                       href="#state"
                       role="tab">
                      State
                    </a>
                    <a className='dropdown-item'
                       id="batchCreator-tab"
                       data-toggle="tab"
                       href="#batchCreator"
                       role="tab">
                      Batch Creator
                    </a>
                    <a className='dropdown-item'
                       id="demonstration-tab"
                       data-toggle="tab"
                       href="#demonstration"
                       role="tab">
                      Demonstartion
                    </a>

                </div>
                </li>

            </ul>
          </div>

          <span className='navbar-text'>
            {`${name} ${version} [ALPHA]`}
          </span>
          <span className='navbar-text'>

            <button className="btn btn-sm btn-info" onClick={() => { $('#feedbackForm').modal('show')}}>
            <FontAwesomeIcon icon="envelope" />
            &nbsp;Submit feedback</button>
          </span>
          {
          //<a to="#" onClick={this.handleClick} className="btn btn-outline-success">Update</a>
        }
        </nav>

        <Stat/>

        <div className={classNames("tab-content", 'tab-offset')} id="btcontent">
          <div className={classNames("tab-pane", "fade")} id="peers" role="tabpanel">
            <Peers />
          </div>
          <div className={classNames("tab-pane", "fade")} id="transactions" role="tabpanel">
            <Transactions/>
          </div>
          <div className={classNames("tab-pane", "fade")} id="blocks" role="tabpanel">
            <Blocks/>
          </div>
          <div className={classNames("tab-pane", "fade")} id="batches" role="tabpanel">
            <Batches/>
          </div>
          <div className={classNames("tab-pane", "fade")} id="state" role="tabpanel">
            <State/>
          </div>
          <div className={classNames("tab-pane", "fade", "show", "active")} id="network" role="tabpanel">
            <Network/>
          </div>
          <div className={classNames("tab-pane", "fade")} id="wallet" role="tabpanel">
            <Wallet/>
          </div>
          <div className={classNames("tab-pane", "fade")} id="batchCreator" role="tabpanel">
            <BatchCreator/>
          </div>
          <div className={classNames("tab-pane", "fade")} id="demonstration" role="tabpanel">
            <Demonstration/>
          </div>
        </div>

        <Feedback/>
      </div>
        <div className={`for-printer ${this.props.print==0 ? 'print' : 'no-print'}`}>
          <h3>Topology</h3>
          <JSONPretty json={this.props.data}/>
        </div>

        <div className={`for-printer ${this.props.print==1 ? 'print' : 'no-print'}`}>
          <h3>Transactions</h3>
          <table>
            <tr>
              <th>Family name</th>
              <th>Hash TX</th>
              <th>From</th>
              <th>To</th>
              <th>Transaction</th>
            </tr>
            { this.props.transactions.map(d => {
              return <tr>
                <td>{`${d.header.family_name} ${d.header.family_version}`}</td>
                <td><Hash hash={d.header_signature}/></td>
                <td>{d.header.inputs.map(i => {return <Hash hash={i}/>})}</td>
                <td>{d.header.outputs.map(i => {return <Hash hash={i}/>})}</td>
                <td><Hash hash={d.header.signer_public_key}/></td>
                </tr>
              })
            }
          </table>
        </div>

        <div className={`for-printer ${this.props.print==2 ? 'print' : 'no-print'}`}>
          <h3>Batches</h3>
          <table>
            <tr>
              <th>Batch ID</th>
              <th>Transactions</th>
              <th>Transactions Count</th>
              <th>Timestamp</th>
              <th>Signer Public Key</th>
            </tr>
            { this.props.batches.map(d => {
              var date = new Date(d.timestamp*1000);
              return <tr>
                <td>{<Hash hash={d.header_signature}/>}</td>
                <td>{d.header.transaction_ids.map(i => {return <div><Hash hash={i}/><br/></div>})}</td>
                <td>{d.header.transaction_ids.length}</td>
                <td>{date.toISOString()}</td>
                <td><Hash hash={d.header.signer_public_key}/></td>
                </tr>
              })
            }
          </table>
        </div>

        <div className={`for-printer ${this.props.print==3 ? 'print' : 'no-print'}`}>
          <h3>{this.props.printHeader}</h3>
          <JSONPretty json={this.props.printJson}/>
        </div>
      </div>
    );
  }
}
Main.defaultProps = {
  transactions: [],
  batches: [],
  loading: false,
};
export default connect (
  state => ({
    batches: state.batchesReducer.data,
    transactions: state.transactionReducer.data,
    data: state.blocksReducer.nodes.data.map(d =>  d.raw_data),
    print: state.stateReducer.print,
    printJson: state.stateReducer.print_json,
    printHeader: state.stateReducer.print_header,
  }),
  dispatch => ({
      onChangeDashboard: () => changeDashboard(dispatch),
  }))(Main);
