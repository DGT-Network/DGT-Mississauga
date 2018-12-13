import base64js from 'base64-js'
import cbor from 'borc'

export function convertTransactions(data) {

  return data.data.map((d) => {
    try{
    d.decoded_data = cbor.decode(base64js.toByteArray(d.payload))
    }
    catch (e)
    {
      d.decoded_data = {}
    }
    return d;
  })
}
