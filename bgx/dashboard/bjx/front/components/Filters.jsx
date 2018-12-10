import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import {trimSpaces} from '../helpers/helper'
import { filterPeers } from '../actions/actions';

import Hash from './Hash'

class Filters extends React.Component {
  constructor(props) {
    super(props)

    this.clickFilter = this.clickFilter.bind(this);
  }
  clickFilter(field, value){
    let r = {}
    r[field] = value;
    store.dispatch(filterPeers(r));
  }
  render() {
    const {filters} = this.props
   return (filters.length &&
    <div className='filters'>
      <ul className='list-group'>

        {filters.map((f) => {
          return (<li className='list-group-item'>
            {f.name}
             <ul className='list-group'>
              {f.list.map((l) => {
                return (<li className='list-group-item' >
                  <div onClick={() => this.clickFilter(f.field, l)}>{l}</div>
                </li>)
              })}
             </ul>
          </li>)
        })}
      </ul>
    </div>)
  }
}

Filters.defaultProps = {
  filters: [],
}

function mapStateToProps(store) {
  return {
    filters: store.peersReducer.data.filters,
  };
}

export default connect (mapStateToProps, null)(Filters);
