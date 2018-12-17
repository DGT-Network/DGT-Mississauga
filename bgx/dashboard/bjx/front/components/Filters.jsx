import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import {trimSpaces} from '../helpers/helper'
import { filterPeers } from '../actions/actions';
import humanize from '../helpers/humanize';

import Hash from './Hash'
import Card from './Card'

class Filters extends React.Component {
  constructor(props) {
    super(props)

    this.clickFilter = this.clickFilter.bind(this);
  }
  clickFilter(value){
    store.dispatch(filterPeers(value));
  }

  isSelected(t) {
    return false
}

  render() {
    const {filters, selectedFilters} = this.props


   return (<div className='tab-offset filters'>
      {filters.length &&
        <Card id='filters' title='Filters'>

          <ul className={classNames('list-inline')}>

            {filters.map((f) => {
                    return Object.keys(f.list).map((key) => {
                      let value = f.list[key]
                      let selected = {}
                      selected[f.field] = key
                      return (<li className='list-inline-item'
                                style={ {backgroundColor: selectedFilters[f.field] !== undefined &&
                                                          selectedFilters[f.field] === key ? value : false } }>

                      <div onClick={() => this.clickFilter(selected)}>
                      <span className='marker' style={ {backgroundColor: value} } ></span>{humanize(key)}</div>
                    </li>)
                  })
            })}
          </ul>
        </Card>
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
