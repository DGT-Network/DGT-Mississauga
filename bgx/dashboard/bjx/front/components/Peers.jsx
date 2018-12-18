import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

import humanize from '../helpers/humanize';

import Graph from './Graph'
import Legend from './Legend'
import Filters from './Filters'

import Hash from './Hash'

import ReactTable from 'react-table'

class Peers extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      selectedIP: null,
      selectedFilters: {},
    }
  }

  selectPeer(ip) {
    this.setState({selectedIP: ip})
  }

  filterPeer(filters) {
    this.setState({selectedFilters: filters})
  }

  render() {
    const { data, filters } = this.props
    const { selectedIP, selectedFilters } = this.state

    return (
    <div>
      <div className='row'>
        <div className='col-9'>
          <Graph data={data}
            filters={filters}
            selectedPeerIP={selectedIP}
            selectedFilters={selectedFilters}
            id='peers_graph'
            title='Node'
            onSelect={(e) => this.selectPeer(e)}
            onFilter={(e) => this.filterPeer(e)}/>
        </div>
        <div className='col-3'>
          <Legend/>
        </div>
      </div>
      <Filters
        filters={filters}
        selectedFilters={selectedFilters}
        onFilter={(e) => this.filterPeer(e)}/>
    </div>
    )
  }
}

Peers.defaultProps = {
  peers: [],
};

function mapStateToProps(store) {
  return {
    data: store.peersReducer.data.data,
    filters:  store.peersReducer.data.length == 0 ?
      [] : store.peersReducer.data.filters.filters,
  };
}

export default connect (mapStateToProps, null)(Peers);
