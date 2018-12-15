import React from 'react'

import Card from './Card'

class Stat extends React.Component {
  render() {
    const data = [
      [
        ['PubKey', 'fbb1b73c4f0bda4f67dca266ce6ef42f520eea98'],
        ['KYCKey', '0ABD7E'],
        ['IP', '18.222.2333.160'],
      ],
      [
        ['Name', 'BGX TEST Network'],
        ['Cluster', 'eea98-0ABD7E-ff7ea-0BCDA'],
        ['Cluster Name', 'BGX-GROUP'],
      ],
      [
        ['Parent Node', 'fbb1b73c4f0bda4f67dca266ce6ef42f520eea98'],
        ['Leader', 'fbb1b73c4f0bda4f67dca266ce6ef42f520eea98'],
        ['Genesis', 'fbb1b73c4f0bda4f67dca266ce6ef42f520eea98'],
      ],
    ]

    return (
      <div className='tab-offset'>
        <Card id="Identity" title='Identity'>
            <div className='row'>
              { data.map((dd) => {
                  return (
                    <div className='col-4'>
                      {
                        dd.map((d) => {
                          return (
                            <p key={d[0]}>
                              <strong>{d[0]}:</strong>
                              <span className='text-secondary'>{` ${d[1]}`}</span>
                            </p>
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </div>
        </Card>
      </div>);
  }
}

export default Stat;
