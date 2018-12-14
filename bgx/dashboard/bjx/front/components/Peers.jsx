import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

import humanize from '../helpers/humanize';
import {selectPeer} from '../actions/actions'

import Graph from './Graph'
import Legend from './Legend'
import Filters from './Filters'

import Hash from './Hash'

import ReactTable from 'react-table'

class Peers extends React.Component {
  constructor(props){
    super(props)
    this.state= { selectedIP: null}
  }


  showDetails(info) {
    store.dispatch(selectPeer(info.original.IP));
  }

  render() {
    const {peers, columns} = this.props
    return (
    <div>
      <div className='row'>
        <div className='col-9'>
          <Graph/>
        </div>
        <div className='col-3'>
          <Legend/>
        </div>
      </div>
      <Filters/>
    </div>
    )
  }
}

Peers.defaultProps = {
  peers: [],
};

function mapStateToProps(store) {
  return {
    peers: store.peersReducer.data.data,
  };
}

export default connect (mapStateToProps, null)(Peers);
