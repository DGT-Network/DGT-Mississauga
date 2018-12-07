import React from 'react'
import classNames from 'classnames/bind'

import Transactions from './Transactions'
import Blocks from './Blocks'
import State from './State'
import Peers from './Peers'
import LogoSvg from '../assets/logo.svg'

import { getTransactions, getPeers, getStates, getBlocks } from '../actions/actions';

class Main extends React.Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    store.dispatch(getTransactions());
    store.dispatch(getPeers());
    store.dispatch(getStates());
    store.dispatch(getBlocks());
  }

  render() {
    return (
      <div>
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
                   id="peers-tab"
                   data-toggle="tab"
                   href="#peers"
                   role="tab">
                  Peers
                </a>
              </li>
              <li className="nav-item">
                <a className={classNames('nav-link')}
                   id="transactions-tab"
                   data-toggle="tab"
                   href="#transactions"
                   role="tab">
                  Transactions
                </a>
              </li>
              <li className="nav-item">
                 <a className={classNames('nav-link')}
                   id="blocks-tab"
                   data-toggle="tab"
                   href="#blocks"
                   role="tab">
                  Blocks
                </a>
              </li>
              <li className="nav-item">
                 <a className={classNames('nav-link')}
                   id="state-tab"
                   data-toggle="tab"
                   href="#state"
                   role="tab">
                  State
                </a>
              </li>
            </ul>
          </div>

          <span className='navbar-text'>
            BGX Web viewer [ALPHA]
          </span>
          <a to="#" onClick={this.handleClick} className="btn btn-outline-success">Update</a>
        </nav>


        <div className={classNames("tab-content", 'tab-offset')} id="btcontent">
          <Peers className={classNames("tab-pane", "fade", "show", "active")} id="peers" role="tabpanel"/>
          <Transactions className={classNames("tab-pane", "fade")} id="transactions" role="tabpanel"/>
          <Blocks className={classNames("tab-pane", "fade")} id="blocks" role="tabpanel"/>
          <State className={classNames("tab-pane", "fade")} id="state" role="tabpanel"/>
        </div>
      </div>);
  }
}

export default Main;
