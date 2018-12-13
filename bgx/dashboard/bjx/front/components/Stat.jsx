import React from 'react'

class Stat extends React.Component {
  render() {
    const data = [
      ['PubKey', 'fbb1b73c4f0bda4f67dca266ce6ef42f520eea98'],
      ['KYCKey', '0ABD7E'],
      ['IP', '18.222.2333.160'],
      ['Name', 'BGX TEST Network'],
      ['Cluster', 'eea98-0ABD7E-ff7ea-0BCDA'],
      ['Cluster Name', 'BGX-GROUP'],
      ['Parent Node', 'fbb1b73c4f0bda4f67dca266ce6ef42f520eea98'],
      ['Leader', 'fbb1b73c4f0bda4f67dca266ce6ef42f520eea98'],
      ['Genesis', 'fbb1b73c4f0bda4f67dca266ce6ef42f520eea98'],
      ]

    return (<div className="card tab-offset">
      <div className='card-header'>
      Identity
      </div>
      <div className='card-body'>
        { data.map((d) => {
            return (<span key={d[0]}><strong>{d[0]}:</strong><span className='text-secondary'>&nbsp;{`${d[1]} `}</span></span>);
          })

        }

      </div>
      </div>);
  }
}

export default Stat;
