import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

import Hash from './Hash'

class Legend extends React.Component {
  render() {
    const {peer} = this.props;

    if (peer == null)
      return '';

    else
      return (
        <div id='accordion'>
          <div className="card">
            <div className="card-header" id='headingOne'>
              <button className={classNames('btn btn-sm btn-link')}
                data-toggle='collapse'
                data-target='#partOne'>
                Legend
              </button>
            </div>
            <div id='partOne' className={classNames('collapse', 'show')}
              data-parent='#accordion'>
              <div className="card-body">
                Public Key: <Hash hash ={peer.public_key} />
                Ip: {peer.IP}
                <br/>
                Port: {peer.port}
                <br/>
                node_state: {peer.node_state}
                <br/>
                node_type: {peer.node_type}
                <br/>
                node_type_desc: {peer.node_type_desc}
                <br/>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id='headingTwo'>
              <button className={classNames('btn btn-sm  btn-link')}
                data-toggle='collapse'
                data-target='#partTwo'>
                Data1
              </button>
            </div>
            <div id='partTwo' className={classNames('collapse')}
              data-parent='#accordion'>
              <div className="card-body">
                Age: <i className='text-muted'> 4months 3 days 4 hours</i>
                <br/>
                Register Date: <i className='text-muted'> 28 June 2008</i>
                <br/>
                Clusters: <i className='text-muted'> TacoBell AirPlans</i>
                <br/>
                Balance (DEC): <i className='text-muted'> 120.156</i>
                <br/>
                Mined: <i className='text-muted'> 300 blocks</i>
                <br/>
                <br/>
                BGT name: <i className='text-muted'>Tacos</i>
                <br/>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id='headingThree'>
              <button className={classNames('btn btn-sm btn-link')}
                data-toggle='collapse'
                data-target='#partThree'>
                Data2
              </button>
            </div>
            <div id='partThree' className={classNames('collapse')}
              data-parent='#accordion'>
              <div className="card-body">
                Balance (BGT):
                <br/>
                <i className='text-muted'> 120.156 Ice creams</i>
                <br/>
                <i className='text-muted'> 120.156 Tacos</i>
                <br/>
                <i className='text-muted'> 120.156 Miles</i>
                <br/>
            <br/>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id='headingFour'>
              <button className={classNames('btn btn-sm btn-link')}
                data-toggle='collapse'
                data-target='#partFour'>
                Data3
              </button>
            </div>
            <div id='partFour' className={classNames('collapse')}
              data-parent='#accordion'>
              <div className="card-body">
                Fee (%):
                <i className='text-muted'> 1.15</i>
                <br/>
                Transaction summary fee
                <br/>
                <i className='text-muted'> 120.156 Ice creams</i>
                <br/>
                <i className='text-muted'> 120.156 Tacos</i>
                <br/>
                <i className='text-muted'> 120.156 Miles</i>
                <br/>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
function mapStateToProps(store) {
  return {
    peer: store.peersReducer.selectedPeer,
  };
}

export default connect (mapStateToProps, null)(Legend);
