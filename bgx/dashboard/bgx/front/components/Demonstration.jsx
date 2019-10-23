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
import {Line} from 'react-chartjs-2';
import humanize from '../helpers/humanize';

import { showModal2, getReceipt, getBatches, getBatchDetails, runDemo, refreshLink, loadTxFamilies } from '../actions/actions';
import BatchDetails from './BatchDetails';

import ReactTable from 'react-table'
import Card from './Card'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const fails = {
  bgt: {
    dec: [
      {
        desc: 'decrease more than have',
        args: {
          amount: 1000,
        }
      },
      {
        desc: 'decrease negative',
        args: {
          amount: -1000,
        }
      },
    ],
    inc: [
      {
        desc: 'increase negative',
        args: {
          amount: -1000,
        }
      },
    ],
    set: [
      {
        desc: 'set negative',
        args: {
          amount: -1000,
        }
      },
    ],
    show: [],

  }
}

const goods = {
  bgt: {
    dec: [
      {
        desc: 'decrease 10',
        args: {
          amount: 10,
        }
      },
      {
        desc: 'decrease 20',
        args: {
          amount: 20,
        }
      },
    ],
    inc: [{
      desc: 'increase 10',
        args: {
          amount: 10,
        }
      },
      {
        desc: 'increase 20',
        args: {
          amount: 20,
        }
      },],
    set: [
      {
        desc: 'set 1000',
        args: {
          amount: 500,
        }
      },
    ],
    show: [],
  }
}

const names=['alpha', 'bravo', 'charlie']

class Demonstration extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      family: 0,
      command: 0,
      params: {},
      url: 0,
      total: 25,
      failed: 5,
      names: [Math.random().toString(36).substring(7), Math.random().toString(36).substring(7)]

    }
  }

  randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

  componentDidMount(){
    //store.dispatch(getBatches());
    this.props.onLoadTxFamilies();
  }

  transaction(failed=false) {
    const {family, names, url} = this.state;

    const commands = failed ? fails[family] : goods[family];

    const keys = Object.keys(commands).filter(k => commands[k].length > 0)
    const key = keys[Math.floor(Math.random()*keys.length)];

    const cmds = commands[key];
    let cmd = cmds[Math.floor(Math.random()*cmds.length)];

    cmd.args.wallet = names[Math.floor(Math.random()*names.length)];

    return {...cmd.args, family: family, command: key, url: url};
  }

  initialTransactions() {
    const {family, names} = this.state;
    let tr=[]
    for (let i = 0; i < 2; i++) {
      tr.push({
        family: family,
        cmd: 'set',
        vallet: names[i],
        amount: 500,
      });
    }
    return tr;
  }

  generateTransactions() {
    const {failed, total} = this.state;
    var tr = this.initialTransactions();

    let i = 0;
    for (; i < failed; i++)
      tr.push(this.transaction(true))

    for (;i < total; i++)
      tr.push(this.transaction())


    this.runTransactions(tr, 0);

    return tr;
  }

  runTransactions(tr, index) {
    if (tr.length <= index) return
    this.props.onRun(tr[index]);
    console.log('index', index);
    setTimeout(() => this.runTransactions(tr, ++index), 100);
  }

  familySelector() {
    const {tfamilies} = this.props;
    return (
    <div class="form-group">
      <label for="familyInput">Family</label>
      <select class="form-control" id="familyInput" onChange={(e) => this.setState({family: e.target.value })}>
      <option value="0" selected>Choose</option>
      {Object.keys(tfamilies).map(k => {
        return <option value={k}>{k}</option>
      })}
      </select>
    </div>);
  }

  urlSelector() {
    const {urls} = this.props;
    return (
    <div class="form-group">
      <label for="urlInput">Url</label>
      <select class="form-control" id="urlInput" onChange={(e) => this.setState({url: e.target.value })}>
      <option value="0" selected>Choose</option>
      {urls.map(k => {
        return <option value={k}>{k}</option>
      })}
      </select>
    </div>);
  }

  commandSelector() {
    const {tfamilies} = this.props;
    const {family} = this.state;

    if (family == 0)
      return null

    const commands = Object.keys(tfamilies[family].commands)
    return (
      <div class="form-group">
      <h5> Available commands</h5>
        {commands.map(k => {
          return <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id={k}/>
            <label class="form-check-label" for={k}>
              {k}
            </label>
          </div>
        })}
      </div>);
  }

  configInputs() {
    return (
      <div>
        <div class="form-group">
          <label for="totalInput">Total</label>
          <input type="number" class="form-control" id="totalInput" value={this.state.total} onChange={(e) => this.setState({total: e.target.value })}/>
        </div>
        <div class="form-group">
          <label for="totalInput">Failed</label>
          <input type="number" class="form-control" id="failedInput" value={this.state.failed} onChange={(e) => this.setState({failed: e.target.value })}/>
        </div>
        <div class="form-group">
          <label for="totalInput">Delay (seconds)</label>
          <input type="number" class="form-control" id="totalInput" value={this.state.delay} onChange={(e) => this.setState({delay: e.target.value })}/>
        </div>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.generateTransactions();
  }

  render() {
    const {demoData, batches, onRefresh, columns, loading, onShowModal, onGetReceipt, onGetBatches, onGetBatchDetails, tfamilies} = this.props


    const data = {
      labels: demoData.map(d=> d.date),
      datasets: [
        {
          label: 'Network load',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: demoData.map(d=> d.date)
        }
      ]
    };


    return (
      <div>
        <Card id='batch_demo' title='Demonstration'>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            {this.familySelector()}
            {this.urlSelector()}
            {this.commandSelector()}
            {this.configInputs()}
            <button type="submit" class="btn btn-secondary">Execute</button>
          </form>

          <Line data={data}
            options={{
              scales: {
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: "Transaction count"
                  }
                }],
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: "Time"
                  }
                }]
              }
            }}
          />
        </Card>
      </div>
    )
  }
}

Demonstration.defaultProps = {
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
    command: state.batchesReducer.command,
    receipt: state.batchesReducer.batch_link,
    urls: [state.blocksReducer.nodes.identity.IP].concat(state.blocksReducer.nodes.data.map(d => d.component).filter(dd => {return dd != null})),
    tfamilies: state.familiesReducer.data,
    demoData: state.demoReducer.data
  }),
  dispatch => ({
    onLoadTxFamilies: () => loadTxFamilies(dispatch),
    onRun: params => runDemo(dispatch, params),
    onRefresh: (link) => refreshLink(dispatch, link)
  })
  )(Demonstration);
