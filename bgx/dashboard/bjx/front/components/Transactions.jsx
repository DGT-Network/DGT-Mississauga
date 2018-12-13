import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

import Hash from './Hash'

import ReactTable from 'react-table'

class Transactions extends React.Component {
  render() {
    const {transactions, columns} = this.props
    return (
      <div className='card'>

      <div className='card-header'>
      Transactions
      </div>
          {!transactions.length ? (
          <strong> No transactions</strong>
          ) : (
          <ReactTable data={transactions}
            defaultPageSize={10}
            filterable
            minRows={0}
            columns={columns}
            className='tab-offset -striped'/>
            )}
      </div>
    )
  }
}

Transactions.defaultProps = {
  transactions: [],
  columns: [
  {
    id: 'family',
    Header: 'Family name (version)',
    accessor: t => `${t.header.family_name} ${t.header.family_version}`,
  },
  {
    id: 'type',
    Header: 'Type',
    filterable: false,
    accessor: d => {
      if (d.decoded_data == undefined ||
          d.decoded_data.Verb == undefined )
        return <i>No data</i>

      return d.decoded_data.Verb
    },
  },
  { id: 'from',
    Header: 'From',
    accessor: d => {
      if (d.decoded_data == undefined ||
          d.decoded_data.Name == undefined )
        return <i>No data</i>

      return d.decoded_data.Name
    },
  },
  { id: 'to',
    Header: 'To',
    accessor: d => {
      if (d.decoded_data == undefined ||
          d.decoded_data.to_addr == undefined )
        return <i>No data</i>

      return d.decoded_data.to_addr
    },
  },
  { id: 'amount',
    Header: 'Amount',
    filterable: false,
    accessor: d => {
      if (d.decoded_data == undefined ||
          d.decoded_data.num_bgt == undefined ||
          d.decoded_data.group_id == undefined )
        return <i>No data</i>

      return `${d.decoded_data.num_bgt} ${d.decoded_data.group_id}`
    },
  },
]
};

function mapStateToProps(store) {
  return {
    transactions: store.transactionReducer.data,
  };
}

export default connect (mapStateToProps, null)(Transactions);
