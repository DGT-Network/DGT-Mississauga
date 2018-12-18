import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

import Hash from './Hash'
import Card from './Card'
import Graph from './Graph'

import ReactTable from "react-table"

class Blocks extends React.Component {
  constructor(props){
    super(props)
    this.state= { selectedBlock: null}
  }

  selectBlock(ip) {
    this.setState({selectedBlock: ip})
  }

  render() {
    const that = this;
    const {graph_blocks, columns, blocks_data} = this.props;
    const {selectedBlock} = this.state;
    return (
      <div>
        {
        graph_blocks == null ?
        (
          <div>
            <strong> No Blocks</strong>
          </div>
        ) : (
            <div >

              <Graph data={graph_blocks} id='blocks_graph' title='Ladger'
                size={{width: 1000, height: 800}}
                selectedPeerIP={selectedBlock}
                onSelect={(e) => this.selectBlock(e)}/>

              <div className="tab-offset">
                <Card id='ledger' title='Ledger Data'>
                  <ReactTable data={blocks_data}
                  defaultPageSize={10}
                  minRows={0}
                  columns={columns}
                  className='-striped'

                  getTdProps={(state, rowInfo, column, instance) => {
                    return {
                      onClick: (e, handleOriginal) => {
                        that.setState({
                          selectedBlock : rowInfo.row._original.header_signature,
                        })

                        // IMPORTANT! React-Table uses onClick internally to trigger
                        // events like expanding SubComponents and pivots.
                        // By default a custom 'onClick' handler will override this functionality.
                        // If you want to fire the original onClick handler, call the
                        // 'handleOriginal' function.
                        if (handleOriginal) {
                          handleOriginal();
                        }
                      },
                      style: {
                          background: rowInfo.row._original.header_signature === selectedBlock ? '#b8daff' :
                           rowInfo.viewIndex%2 == 0 ? 'rgba(0,0,0,.05)' : 'white',
                    },
                  }}}
                />
                </Card>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

Blocks.defaultProps = {
  graph_blocks: null,
  blocks_data: [],
  columns: [
  {
    id: 'blockNum',
    Header: 'Block Num',
    accessor: d => parseInt(d.header.block_num),
    width: 100,
  },
  { id: 'batchIds',
    Header: 'Batch ID',
    accessor: d => d.header.batch_ids.map((i) => {
          return (  <Hash key={i} hash={i}/> )
        })
  },
  { id: 'headerSignature',
    Header: 'Header Signature',
    accessor: d => <Hash hash={d.header_signature}/>,
  },
  {
    id: 'consensus',
    Header: 'Consensus',
    accessor: d => d.header.consensus,
  },
    { id: 'prevBlockId',
    Header: 'Previous Block ID',
    accessor: d => <Hash hash={d.header.previous_block_id}/>,
  },
    { id: 'signerPublicKey',
    Header: 'Signer Public Key',
    accessor: d => <Hash hash={d.header.signer_public_key}/>,
  },
    { id: 'stateRootHash',
    Header: 'State Root Hash',
    accessor: d =><Hash hash={d.header.state_root_hash}/>,
  },]
};

function mapStateToProps(store) {
  return {
    graph_blocks: store.blocksReducer.data.graph,
    blocks_data: store.blocksReducer.data.data,
  };
}

export default connect (mapStateToProps, null)(Blocks);
