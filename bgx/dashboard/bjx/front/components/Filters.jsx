import React from 'react'
import classNames from 'classnames/bind'
import {trimSpaces} from '../helpers/helper'
import humanize from '../helpers/humanize';

import Hash from './Hash'
import Card from './Card'

class Filters extends React.Component {
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
                      return (<li key={key} className='list-inline-item'
                                style={ {backgroundColor: selectedFilters[f.field] !== undefined &&
                                                          selectedFilters[f.field] === key ? value : false } }>

                      <div onClick={() => this.props.onFilter(selected) }>
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

export default Filters;
