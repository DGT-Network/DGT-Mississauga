import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

import Graph from './Graph'
import Legend from './Legend'

import Hash from './Hash'

import ReactTable from 'react-table'

class Peers extends React.Component {
  render() {
    const {peers, columns, className, id, role} = this.props
    return (
    <div className={classNames('row', className)} id={id} role={role}>
      <div className='col-12'>
        <div className="row">
          <div className="col-9">
            <Graph/>
          </div>
          <div className="col-3">
            <Legend/>
          </div>
        </div>
        {peers.length &&
          <div className={classNames("row", 'tab-offset')}>
            <div className="col-12">
              <ReactTable data={peers}
                defaultPageSize={10}
                columns={columns}
                minRows={0}
                className='-striped'/>
              </div>
          </div>
        }
      </div>
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
