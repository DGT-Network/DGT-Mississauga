import { trimHash } from '../helpers/helper'

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
  let r = {
    graph: data.data.map((d) => {
      const prev = data.data.find(dd => dd.header_signature == d.header.previous_block_id)
        return {
          name: trimHash(d.header_signature),
          IP: d.header_signature,
          depends: prev == undefined ? [] : [prev.header_signature],
          dependedOnBy: data.data.filter((dd) => {
            return dd.header.previous_block_id == d.header_signature
          }).map((dd) => {return dd.header_signature})
        }
      }),
    data: data.data,
  }
  return r
}
