import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import {trimSpaces} from '../helpers/helper'

import { humanize } from '../logic/peers'

import Hash from './Hash'

class Legend extends React.Component {
  render() {
    const {peer} = this.props;
    let t = -1;
    let tt = -1;

    if (peer == null)
      return '';

    else
      return (
        <div className='tab-offset card'>
          <div className='card-header'>
            <ul class="nav nav-tabs card-header-tabs">
            {
              peer.legend.map((i) => {
                t++;
                const key = Object.keys(i)[0]
                return (
                <li className="nav-item">
                   <a className={classNames('nav-link', t == 0 ? 'active' : '' )}
                     id={`${key}-tab`}
                     data-toggle="tab"
                     href={`#${trimSpaces(key)}`}
                     role="tab">
                    {key}
                  </a>
                </li>)
              })
            }
            </ul>
          </div>

          <div className="card-body">
            <div className="tab-content" id="filtercontent">
            {
              peer.legend.map((i) => {
                tt++;
                const key = Object.keys(i)[0]
                return (
                  <div className={classNames("tab-pane", "fade",  tt == 0 ? 'show active' : '' )} id={trimSpaces(key)} role="tabpanel">
                    {
                      Object.keys(i[key]).map((j) => {
                        return (<div>
                          <strong>{`${j}: `}</strong>
                          <span>{humanize(i[key][j])}</span>
                          </div>)
                      })
                    }
                  </div>)

              })
            }
            </div>
          </div>
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
