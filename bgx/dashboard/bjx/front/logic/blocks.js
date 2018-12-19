import { trimHash, decode } from '../helpers/helper'

// export function convertBlocks(data) {
//     let parent = {name: 'initial'}
//     let initial = parent
//     data.data.forEach((i) => {
//       i.header.block_num = parseInt(i.header.block_num)

//       let node = {
//         name: trimHash(i.header_signature),
//         number: i.header.block_num,
//         children: []
//       }
//       parent.children = [node]
//       parent = node
//     })

//     data.graph = initial.children[0];
//     data.data = data.data.reverse();
//   return data;
// }


export function convertBlocks(data) {
  return data.data.map((d) => {
    const prev = data.data.find(dd => dd.header_signature == d.header.previous_block_id)

    d.decoded_data = decode(d.payload)

    d.name = trimHash(d.header_signature)
    d.IP = d.header_signature;
    d.tooltip = {
      1: d.header_signature,
    }
    d.depends = prev == undefined ? [] : [prev.header_signature],
    d.dependedOnBy = data.data.filter((dd) => {
        return dd.header.previous_block_id == d.header_signature
      }).map((dd) => {return dd.header_signature})

    return d
  })
}
