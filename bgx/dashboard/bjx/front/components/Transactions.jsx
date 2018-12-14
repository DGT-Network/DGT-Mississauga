import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

import Hash from './Hash'
import $ from 'jquery';
import JSONPretty from 'react-json-pretty'

import humanize from '../helpers/humanize';

import ReactTable from 'react-table'

class Transactions extends React.Component {
  constructor(props){
    super(props)

    this.state = {selectedTr: {a: 'a'}}
  }

  showDetails(info) {
    console.log('12213213', info)
    this.setState({selectedTr: info.original})
    $('#myModal').modal('show')

  }

  render() {
    const {transactions, columns} = this.props
    return (
      <div className='card'>

      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Transactions raw details</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <JSONPretty json={this.state.selectedTr}/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

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
            className='tab-offset -striped'
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
           />
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

      return humanize(d.decoded_data.Verb)
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
