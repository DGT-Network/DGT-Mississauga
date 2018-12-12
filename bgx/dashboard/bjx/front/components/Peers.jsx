import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

import {selectPeer} from '../actions/actions'

import Graph from './Graph'

import Hash from './Hash'

import ReactTable from 'react-table'

class Peers extends React.Component {
  constructor(props){
    super(props)
    this.state= { selectedIP: null}
  }


  showDetails(info) {
    store.dispatch(selectPeer(info.original.IP));
  }

  render() {
    const {peers, columns, className, id, role} = this.props
    return (
    <div className={classNames('row', className)} id={id} role={role}>
      <Graph/>
      {peers.length &&
        <div className={classNames('tab-offset')}>
          <div className="col-12">
            <ReactTable data={peers}
              defaultPageSize={10}
              columns={columns}
              minRows={0}
              className='-striped'
              getTdProps={(state, rowInfo, column, instance) => {
                return {
                  onClick: (e, handleOriginal) => {
                    this.showDetails(rowInfo)

                    // IMPORTANT! React-Table uses onClick internally to trigger
                    // events like expanding SubComponents and pivots.
                    // By default a custom 'onClick' handler will override this functionality.
                    // If you want to fire the original onClick handler, call the
                    // 'handleOriginal' function.
                    if (handleOriginal) {
                      handleOriginal();
                    }
                  }
                };
              }}
              getTrProps={(state, rowInfo) => {
                if (rowInfo && rowInfo.row) {
                  return {
                    onClick: (e) => {
                      this.setState({
                        selectedIP: rowInfo.row.ip,
                      })
                    },
                    style: {
                      background: rowInfo.row.ip === this.state.selectedIP ? '#b8daff' :
                       rowInfo.viewIndex%2 == 0 ? 'rgba(0,0,0,.05)' : 'white',
                    }
                  }
                }else{
                  return {}
                }
              }}/>
          </div>
        </div>
      }
    </div>
    )
  }
}

Peers.defaultProps = {
  peers: [],
  columns: [
  {
    id: 'ip',
    Header: 'IP',
    accessor: t => `${t.IP}:${t.port}`,
  },
  { id: 'node_state',
    Header: 'Node State',
    accessor: t => t.node_state,
  },
  {
    id: 'node_type',
    Header: 'Node Type',
    accessor: t => t.node_type,
  },
  {
    id: 'node_type_desc',
    Header: 'Node Type desc',
    accessor: t => t.node_type_desc,
  },
  { id: 'public_key',
    Header: 'Public Key',
    accessor: t => <Hash hash={t.public_key}/>,
  },]
};

function mapStateToProps(store) {
  return {
    peers: store.peersReducer.data.data,
  };
}

export default connect (mapStateToProps, null)(Peers);
