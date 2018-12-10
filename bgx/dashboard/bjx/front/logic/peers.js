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
  let r = []

  return {
    data: convertNode(r, data.data.net_structure.parent_node )
  }
}

function convertNode(r, node, parent_node = null){

  let ch = []
  let parentRelation = []

  if (parent_node != null)
    parentRelation = [parent_node.IP]

 if (typeof node.children !== 'undefined'){
    ch = node.children

    ch.forEach((j) => {
      convertNode(r, j, node);
    })
  }

  r.push({
      name: node.IP,
      IP: node.IP,
      port: node.port,
      node_state: node.node_state,
      node_type: node.node_type,
      node_type_desc: typeof node.node_type_desc !== 'undefined' ? node.node_type_desc : '',
      public_key:  node.public_key,
      type: "group0",
      dependedOnBy:  ch.map((j) => {
        return j.IP;
        }),
      depends: parentRelation,
    });

  return r;
}
