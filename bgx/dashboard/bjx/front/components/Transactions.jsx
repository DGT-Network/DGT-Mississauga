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
  { id: 'from',
    Header: 'From',
    accessor: d => <i>wallet key</i>,
  },
  { id: 'to',
    Header: 'To',
    accessor: d => <i>wallet key</i>,
  },
  { id: 'amount',
    Header: 'Amount',
    filterable: false,
    accessor: d => <i>amount</i>,
  },
]
};

function mapStateToProps(store) {
  return {
    transactions: store.transactionReducer.data,
  };
}

export default connect (mapStateToProps, null)(Transactions);
