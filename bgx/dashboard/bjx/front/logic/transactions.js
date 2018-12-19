import { decode } from '../helpers/helper'

export function convertTransactions(data) {

  return data.data.map((d) => {
    d.decoded_data = decode(d.payload)
    return d;
  })
}
