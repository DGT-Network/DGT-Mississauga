import React from 'react'
import JSONPretty from 'react-json-pretty'

import  Hash  from './Hash'

class DecodedData extends React.Component {
  constructor(props) {
    super(props)

    this.state ={open: false}
  }

  render() {
    const { decodedData, data } = this.props
    const {open} = this.state


    return (<div onClick={(e) => {
      this.setState({open: !this.state.open})
    }}>
    {
      open && decodedData != null?
        <JSONPretty json={decodedData.data}/>

        // Object.keys(decodedData.data).map((key) => {
        //   console.log('eee',decodedData.data)
        //   return (
        //     <div>{key}:&nbsp;
        //     {decodedData.data[key].length > 10 ?
        //     <Hash hash={decodedData.data[key]}/> : decodedData.data[key]}
        //     </div>);
        // })
       :
        (<Hash hash={data}/>)

    }
    </div>)
  }
}
DecodedData.defaultProps = {
  decodedData: {},
}

export default DecodedData;
