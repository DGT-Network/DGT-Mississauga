import React from 'react'
import {Bar} from 'react-chartjs-2';

import { connect } from 'react-redux'

class Network extends React.Component {

  randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

  render() {

    const { nodes_count, transactions_count } = this.props

    let success_transactions = 0;
    let failed_transactions = 0;

    if (transactions_count > 0){
      if (transactions_count < 5){
        success_transactions = 4;
        failed_transactions = 0;
      }
      else {
        success_transactions = transactions_count - 4;
        failed_transactions = 4
      }
    }

    let generatedData = [0],
    generatedLabels = ['']

    for (let i = 200; i < 24*60; i+=5){
      let h = Math.floor(i / 60);
      let m = i % 60;
      generatedLabels.push(`${h}:${m}`)
      generatedData.push(this.randomInteger(200,500))
    }

    const data = {  labels: generatedLabels,
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
      data: generatedData
    }
]}

    return (<div className="tab-offset">
      <div className="card">
        <div className='card-header'>
        Network
        </div>
        <div className='card-body'>
          <p>
            <strong>Cluster:</strong>&nbsp;<span className='text-secondary'>eea98-0ABD7E-ff7ea-0BCDA </span>
          </p>
          <p>
            <strong>Node count:</strong>&nbsp;<span className='text-secondary'>{nodes_count}</span>
          </p>
          <p>
            <strong>Transaction count:</strong>&nbsp;
            <span className='text-secondary'>{transactions_count}&nbsp;(</span>
            <span className='text-success'>{success_transactions}</span>/
            <span className='text-warning'>{failed_transactions}</span>
             <span className='text-secondary'>)</span>
          </p>
          <p>
            <strong>DAG size:</strong>&nbsp;
            <span className='text-secondary'>{transactions_count}&nbsp;15Mb</span>
          </p>
        </div>
      </div>
      <div className="tab-offset card">
        <div className='card-header'>
        Network Load
        </div>
        <div className='card-body'>
        <Bar data={data}/>
        </div>
      </div>
    </div>);
  }
}

Network.defaultProps = {
  nodes_count: 0,
  transactions_count: 0,
};


function mapStateToProps(store) {
  return {
    nodes_count: store.peersReducer.data.data == undefined ?
                  0 : store.peersReducer.data.data.length,
    transactions_count: store.transactionReducer.data == undefined ?
                  0 : store.transactionReducer.data.length,
  };
}

export default connect (mapStateToProps, null)(Network);
