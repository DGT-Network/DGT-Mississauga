import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import {trimSpaces} from '../helpers/helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import humanize from '../helpers/humanize';

import Hash from './Hash'

class Legend extends React.Component {
  constructor(props){
    super(props)

    this.state = {collapsed: false}
  }

  render() {
    const {peer} = this.props;
    let t = -1;
    let tt = -1;

    if (peer == null)
      return '';

    else
      return (
        <div className='card'>
          <div className='card-header' onClick={() => this.setState({collapsed: !this.state.collapsed})} data-toggle="collapse" data-target='#legend' aria-expanded="false" aria-controls="collapseExample">
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
            <div className='close-icon'>
              <FontAwesomeIcon icon={this.state.collapsed ? "plus" : "minus"} />
            </div>
          </div>

          <div id='legend' className="card-body collapse show">
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
