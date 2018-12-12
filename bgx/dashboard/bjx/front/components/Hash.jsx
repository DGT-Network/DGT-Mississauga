import React from 'react'
import { trimHash } from '../helpers/helper'

class Hash extends React.Component {
  render() {
    const { hash, length} = this.props
    return (
<div data-toggle="tooltip" data-placement="top" title={hash} style={{padding: '3px'}}>
          {trimHash(hash, length)}
        </div>);
  }
}

export default Hash;
