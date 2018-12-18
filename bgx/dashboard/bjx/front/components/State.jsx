import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import Hash from './Hash'
import DecodedData from './DecodedData'
import Card from './Card'

import ReactTable from "react-table"

import { getState, showModal } from '../actions/actions';

class State extends React.Component {
  showDetails(info) {
    store.dispatch(getState(info.original.address));
  }

  render() {
    const {state, columns} = this.props;
    return (<Card id='card_state' title='State'>
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
          }}/>
      )}
      </Card>
    )
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
