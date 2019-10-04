// Copyright 2018 NTRlab
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// -----------------------------------------------------------------------------

import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import JSONPretty from 'react-json-pretty';
import Hash from './Hash'

import humanize from '../helpers/humanize';

import { showModal2, getReceipt, getBatches, getBatchDetails } from '../actions/actions';


import ReactTable from 'react-table'
import Card from './Card'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Batches extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      selectedTr: {a: 'a'},
      batchId: null,
    }
  }

  componentDidMount(){
    store.dispatch(getBatches());
  }

  render() {
    const {batches, receipt, columns, loading, onShowModal, onGetReceipt, onGetBatches, onGetBatchDetails} = this.props
    return (
      <div>

        <Card id='batch_details' title='Search Batch'>
          <div className='input-group mb-2'>
            <div className="input-group-prepend">
              <div className="input-group-text">
                <FontAwesomeIcon icon="search" />
              </div>
            </div>
            <input type="text"
              class="form-control"
              placeholder="BatchId"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => this.setState({batchId: e.target.value})}
             />
            <div class="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => {
                  onGetBatchDetails(this.state.batchId)
                  }
                }>Search</button>
            </div>
          </div>
          <JSONPretty json={receipt}/>

        </Card>

      <div className='tab-offset'>
        <Card id='batches_card' title='Batches'
          btns={[{name: 'Update', handler: () => {store.dispatch(getBatches())}}]}
          loading={loading}>
          {!batches.length ? (
          <strong> No batches</strong>
          ) : (
          <ReactTable data={batches}
            defaultPageSize={10}
            filterable
            minRows={0}
            columns={columns}
            className='-striped'
            getTdProps={(state, rowInfo, column, instance) => {
              return {
                onClick: (e, handleOriginal) => {
                    onShowModal({
                      title: 'Batch raw details',
                      json: rowInfo.original
                    });

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
        </Card>
      </div>
      </div>
    )
  }
}

Batches.defaultProps = {
  batches: [],
  loading: false,
  columns: [
  { id: 'header_signature',
    Header: 'Batch ID',
    filterable: false,
    accessor: d => {
      return <Hash hash={d.header_signature}/>
    },
  },
  { id: 'transactions',
    Header: 'Transactions',
    filterable: false,
    accessor: d => {
      return d.header.transaction_ids.map(i => {return <Hash hash={i}/>})
    },
  },
  { id: 'transaction_count',
    Header: 'Transaction Count',
    filterable: false,
    accessor: d => {
      return d.header.transaction_ids.length
    },
  },
  {
    id: 'signer_public_key',
    Header: 'Signer Public Key',
    filterable: false,
    accessor: d => {
      return <Hash hash={d.header.signer_public_key}/>
    },
  },
]
};

export default connect (
  state => ({
    batches: state.batchesReducer.data,
    loading: state.batchesReducer.loading,
    receipt: state.batchesReducer.batch,
    receiptLoading: state.batchesReducer.batchLoading,
  }),
  dispatch => ({
    onShowModal: json => showModal2(dispatch, json),
    onGetReceipt: id => getReceipt(dispatch, id),
    onGetBatches: () => getBatches(dispatch),
    onGetBatchDetails: id => getBatchDetails(dispatch, id),
  })
  )(Batches);