import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import Hash from './Hash'

import ReactTable from "react-table"

import { getState } from '../actions/actions';

class State extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showTooltip: false}
  }

  showDetails(info) {
    this.setState({showTooltip: true})
    store.dispatch(getState(info.original.address));
  }

  render() {
    const {state, columns, className, id, role} = this.props;
    return (<div className={className} id={id} role={role}>
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
      </div>
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
  },{
    id: 'data',
    Header: 'Data',
    accessor: t => {
      if (t.decoded_data == null)
        return <Hash hash={t.data}/>
      else
        return (<div>
          key: <Hash hash={t.decoded_data.key} />
          granularity: {t.decoded_data.data.granularity}
          <br/>
          balance: {t.decoded_data.data.balance}
          <br/>
          decimals: {t.decoded_data.data.decimals}
          <br/>
          owner key: {t.decoded_data.data.owner_key}
          <br/>
          group code: <Hash hash={t.decoded_data.data.group_code} />
          <br/>
        </div>);
    },
  }]
};

function mapStateToProps(store) {
  return {
    state: store.stateReducer.data,
  };
}

export default connect (mapStateToProps, null)(State);
