import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

import Hash from './Hash'

import ReactTable from 'react-table'

class Transactions extends React.Component {
  render() {
    const {transactions, columns} = this.props
    return (
      <div>
        <div className='col-12'>
          {!transactions.length ? (
          <strong> No transactions</strong>
          ) : (
          <ReactTable data={transactions}
            defaultPageSize={10}
            filterable
            minRows={0}
            columns={columns}
            className='-striped'/>
            )}
        </div>
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
  { id: 'inputs',
    Header: 'Inputs',
    filterable: false,
    accessor: t =>{
      let index = 0;
      return t.header.inputs.map((i) => {
          return (  <Hash key={index++} hash={i}/> )
        })
    }
  },
  {
    id: 'outputs',
    Header: 'Outputs',
    filterable: false,
    accessor: t => {
      let index = 0;
      return t.header.outputs.map((i) => {
          return (  <Hash key={index++} hash={i}/> )
        })
   }
  },
  { id: 'from',
    Header: 'From',
    filterable: false,
    accessor: d => <i>wallet key</i>,
  },
  { id: 'to',
    Header: 'To',
    filterable: false,
    accessor: d => <i>wallet key</i>,
  },
  { id: 'transaction_hash',
    Header: 'Transaction Hash',
    filterable: false,
    accessor: d => <i>transaction hash</i>,
  },
  { id: 'signerPublicKey',
    Header: 'Signer Public Key',
    filterable: false,
    accessor: d => <Hash hash={d.header.signer_public_key}/>,
  }]
};

function mapStateToProps(store) {
  return {
    transactions: store.transactionReducer.data,
  };
}

export default connect (mapStateToProps, null)(Transactions);
