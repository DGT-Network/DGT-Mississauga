import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import {trimSpaces} from '../helpers/helper'

import Hash from './Hash'

class Legend extends React.Component {
  render() {
    const {peer} = this.props;
    let t = -1;

    if (peer == null)
      return '';

    else
      return (
        <div id='accordion' className='legend'>
          {peer.legend.map((i) => {

            t++;

            const key = Object.keys(i)[0]
            return (
               <div className="card">
                  <div className="card-header" id={`heading${trimSpaces(key)}`}>
                    <button className={classNames('btn btn-sm  btn-link')}
                      data-toggle='collapse'
                      data-target={`#part${trimSpaces(key)}`}>
                      {key}
                    </button>
                  </div>
                  <div id={`part${trimSpaces(key)}`} className={classNames('collapse', t == 0 ? 'show' : '' )}
                    data-parent='#accordion'>
                    <div className="card-body">
                      {Object.keys(i[key]).map((j) => {
                        return (<div>{`${j}: ${i[key][j]}`}</div>)
                      })}
                    </div>
                  </div>
                </div>
            );
          })}
        </div>
      );
  }
}
function mapStateToProps(store) {
  return {
    peer: undefined ==  store.peersReducer.data.data ?
          null :
          store.peersReducer.data.data.find((p) => {return  p.IP == store.peersReducer.selectedPeerIP}),
  };
}

export default connect (mapStateToProps, null)(Legend);
