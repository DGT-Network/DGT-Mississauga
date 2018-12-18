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
      legend: [],
    }
  }

  selectPeer(ip) {
    this.setState({selectedIP: ip,
      legend: this.legendFor(ip)})
  }

  legendFor(ip) {
    const { data } = this.props
    console.log('123213', data)

    if (data == undefined){
      return []
    }
    let f = data.find(p => {return  p.IP == ip} )

    if (f == undefined)
      return []
    else
      return data.find(p => {return  p.IP == ip} ).legend
  }

  filterPeer(filters) {
    this.setState({selectedFilters: filters})
  }

  render() {
    const { data, filters } = this.props
    const { selectedIP, selectedFilters, legend } = this.state

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
          <Legend legend= {legend}/>
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
  data: [],
  filters: [],
};

function mapStateToProps(store) {
  return {
    data: store.peersReducer.data.data,
    filters:  store.peersReducer.data.length == 0 ?
      [] : store.peersReducer.data.filters.filters,
  };
}

export default connect (mapStateToProps, null)(Peers);
