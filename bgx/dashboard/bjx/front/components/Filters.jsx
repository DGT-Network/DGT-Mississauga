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
  clickFilter(value){
    store.dispatch(filterPeers(value));
  }
  render() {
    const {filters, colors} = this.props


   return (<div className='filters'>
      {filters.length &&

      <ul className='list-group'>

        {filters.map((f) => {
          return (<li className='list-group-item'>
            {f.name}
             <ul className='list-group'>
              {
                Object.keys(f.list).map((key) => {
                  let value = f.list[key]
                  let selected = {}
                  selected[f.field] = key
                return (<li className='list-group-item' >

                  <div onClick={() => this.clickFilter(selected)}>
                  <span className='marker' style={ {backgroundColor: value} } ></span>{key}</div>
                </li>)
              })}
             </ul>
          </li>)
        })}
      </ul>
      }
    </div>)
  }
}

Filters.defaultProps = {
  filters: [],
}

function mapStateToProps(store) {
  return {
    filters:  store.peersReducer.data.length == 0 ?
      [] : store.peersReducer.data.filters.filters,
    colors:  store.peersReducer.data.length == 0 ?
      [] : store.peersReducer.data.filters.colors,
  };
}

export default connect (mapStateToProps, null)(Filters);
