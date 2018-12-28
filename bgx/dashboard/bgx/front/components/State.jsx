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

import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import Hash from './Hash';
import DecodedData from './DecodedData';
import Card from './Card';

import ReactTable from "react-table";

import { getStates, showModal } from '../actions/actions';

class State extends React.Component {

  update(){
    store.dispatch(getStates());
  }

  render() {
    const {state, columns} = this.props;
    return (<Card id='card_state' title='State'
      btns={[{name: 'Update', handler: this.update}]}>
      {!state.length  ? (
        <strong> No State</strong>
      ) : (
        <ReactTable data={state}
          defaultPageSize={10}
          columns={columns}
          minRows={0}
          className='-striped'
          getTdProps={(state, rowInfo, column, instance) => {
            return {
              onClick: (e, handleOriginal) => {
                store.dispatch(showModal({title: 'State raw data',
                  json: rowInfo.original
                }))

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
          }}/>
      )}
      </Card>
    );
  }
}

State.defaultProps = {
  decodedData: {},
  state: [],
  columns: [{
    id: 'address',
    Header: 'Address',
    accessor: t => <Hash hash={t.address} />,
    width: 150,
  },{
    id: 'data',
    Header: 'Data',
    accessor: t => {
        return <Hash hash={t.data} /> //<DecodedData data={t.data} decodedData={t.decoded_data}/>;
    },
  }]
};

function mapStateToProps(store) {
  return {
    state: store.stateReducer.data,
  };
}

export default connect (mapStateToProps, null)(State);
