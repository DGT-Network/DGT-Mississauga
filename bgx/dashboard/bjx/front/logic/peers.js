export function convertPeers(data) {
  //console.log('data',data)
  let parent_node = data.data.net_structure.parent_node
  const data2 = {
      IP: parent_node.IP,
      public_key: parent_node.public_key,
      children: parent_node.children.map((j) => {
        return {IP: j.IP,
                size: 4000}
      }),
  }
  let r = {}

  let t = convertNode(r, data.data.net_structure.parent_node )

  console.log (t)

  return t
}

function convertNode(r, node, parent_node = null){

  console.log(node)

  let ch = []
  let parentRelation = []

  if (parent_node != null)
    parentRelation = [parent_node.IP]

 if (typeof node.children !== 'undefined'){
    ch = node.children
    ch.forEach((j) => {
          (convertNode(r, j, node));
        })


  }

  r[node.IP] =  {
      name: node.IP,
      type: "group0",
      depends:  ch.map((j) => {
        return j.IP;
        }),
      dependedOnBy: parentRelation,
    }

  return r;

  // node.children.map((j) => {
  //       return {IP: j.IP,
  //               size: 4000}
  //     })
  // return {
  //   "IP": {
  //     name: node.IP,
  //     type: "group0",
  //     depends: [],
  //     dependedOnBy: [],
  //   }
  // }
}
