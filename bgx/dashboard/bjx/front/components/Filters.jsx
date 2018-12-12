import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import {trimSpaces} from '../helpers/helper'
import { filterPeers } from '../actions/actions';
import { humanize } from '../logic/peers';

import Hash from './Hash'

class Filters extends React.Component {
  constructor(props) {
    super(props)

    this.clickFilter = this.clickFilter.bind(this);
  }
  clickFilter(value){
    store.dispatch(filterPeers(value));
  }

  isSelected(t) {
    console.log(t.f)
    return false
}

  render() {
    const {filters, selectedFilters} = this.props


   return (<div className='filters'>
      {filters.length &&
       <div className='card'>
       <div className='card-header'>
        <button className={classNames('btn btn-sm  btn-link')}
          data-toggle='collapse'
          data-target='#ffilters'>
          Filters
        </button>
       </div>

      <ul id='ffilters' className={classNames('list-group show')}>

        {filters.map((f) => {
          return (<>
            <li className={classNames('list-group-item', 'disabled')}>
            {humanize(f.field)}</li>
              {
                Object.keys(f.list).map((key) => {
                  let value = f.list[key]
                  let selected = {}
                  selected[f.field] = key
                return (<li className='list-group-item'
                            style={ {backgroundColor: selectedFilters[f.field] !== undefined &&
                                                      selectedFilters[f.field] === key ? value : false } }>

                  <div onClick={() => this.clickFilter(selected)}>
                  <span className='marker' style={ {backgroundColor: value} } ></span>{humanize(key)}</div>
                </li>)
              })}
          </>
          )
        })}
      </ul>
      </div>
      }
    </div>)
  }
}

Filters.defaultProps = {
  filters: [],
  selectedFilters: {},
}

function mapStateToProps(store) {
  return {
    filters:  store.peersReducer.data.length == 0 ?
      [] : store.peersReducer.data.filters.filters,
    selectedFilters: store.peersReducer.selected,
  };
}

export default connect (mapStateToProps, null)(Filters);
