import React from 'react'
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

        Object.keys(decodedData.data).map((key) => {
          return (
            <div>{key}:&nbsp;
            {decodedData.data[key].length > 10 ?
            <Hash hash={decodedData.data[key]}/> : decodedData.data[key]}
            </div>);
        })
       :
        (<Hash hash={data}/>)

    }
    </div>)
  }
}
DecodedData.defaultProps = {
  decodedData: {data: []},
}

export default DecodedData;
