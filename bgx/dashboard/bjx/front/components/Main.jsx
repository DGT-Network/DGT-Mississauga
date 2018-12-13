import React from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import packageJson from '../../package.json'

import Transactions from './Transactions'
import Blocks from './Blocks'
import State from './State'
import Peers from './Peers'
import Network from './Network'
import Stat from './Stat'
import Wallet from './Wallet'
import LogoSvg from '../assets/logo.svg'

import { getTransactions, getPeers, getStates, getBlocks } from '../actions/actions';

class Main extends React.Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this);

    console.log('123213', packageJson)

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
                <a className={classNames('nav-link')}
                   id="network-tab"
                   data-toggle="tab"
                   href="#network"
                   role="tab">
                  Network
                </a>
              </li>
              <li className="nav-item">
                <a className={classNames('nav-link active')}
                   id="peers-tab"
                   data-toggle="tab"
                   href="#peers"
                   role="tab">
                  Nodes
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
                   id="wallet-tab"
                   data-toggle="tab"
                   href="#wallet"
                   role="tab">
                  Wallet
                </a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dev
                </a>
                 <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className={classNames('dropdown-item')}
                       id="state-tab"
                       data-toggle="tab"
                       href="#state"
                       role="tab">
                      State
                    </a>
                    <a className={classNames('dropdown-item')}
                       id="blocks-tab"
                       data-toggle="tab"
                       href="#blocks"
                       role="tab">
                      Blocks
                    </a>
                </div>
                </li>

            </ul>
          </div>

          <span className='navbar-text'>
            {`${name} ${version} [ALPHA]`}
          </span>
          <span className='navbar-text'>
            <a href="mailto:info@bgx.ai?subject=Dashboard" className="btn btn-sm btn-outline-info">
            <FontAwesomeIcon icon="envelope" />
            &nbsp;Submit feedback</a>
          </span>
          {
          //<a to="#" onClick={this.handleClick} className="btn btn-outline-success">Update</a>
        }
        </nav>

        <Stat/>

        <div className={classNames("tab-content", 'tab-offset')} id="btcontent">
          <div className={classNames('row', "tab-pane", "fade", "show", "active")} id="peers" role="tabpanel">
            <Peers />
          </div>
          <div className={classNames('row', "tab-pane", "fade")} id="transactions" role="tabpanel">
            <Transactions/>
          </div>
          <div className={classNames('row',"tab-pane", "fade")} id="blocks" role="tabpanel">
            <Blocks/>
          </div>
          <div className={classNames('row', "tab-pane", "fade")} id="state" role="tabpanel">
            <State/>
          </div>
          <div className={classNames("tab-pane", "fade")} id="network" role="tabpanel">
            <Network/>
          </div>
          <div className={classNames('row', "tab-pane", "fade")} id="wallet" role="tabpanel">
            <Wallet/>
          </div>
        </div>
      </div>);
  }
}

export default Main;
