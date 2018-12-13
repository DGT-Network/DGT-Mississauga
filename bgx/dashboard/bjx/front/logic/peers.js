import colorbrewer from 'colorbrewer';

export const NODETYPE = {
  inactive: 'Inactive',
  active: 'Active',
  plink: 'Permalink',
  aux: 'Secondary',
  arbiter: 'Arbiter',
  leader: 'Leader',
  //------------------------
  node_type: 'Type',
  node_state: 'Activity',
}

export function humanize(string) {
  if (!Object.keys(NODETYPE).includes(string))
    return string
  else
    return NODETYPE[string]
}

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
  convertNode(r, data.data.net_structure.parent_node )
  return {
    data: r,
    filters: convertFilters(data.data.groups, r),
  }
}

function convertFilters(filters, d){
  let f = filters.map((f) => {
    d.forEach((i) => {
      if ( !f.list.includes(i[f.field]) ){
        f.list.push(i[f.field])
      }
    })
    return f
  })

  let count =0
  let ff = []

  f.forEach((f) => {
    count += f.list.length
    ff = ff.concat(f.list)
  })
  let colors = colorbrewer.Set3[count+5];

  let r = 0;

  f.forEach((f) => {
    let arr = {}
    f.list.forEach((i) => {
      return arr[i] = colors[r++]
    })
    f.list = arr;
  })

  let i={}
  ff.map((f) => { i[f] = colors[r++]; return i})

  return {filters: f,
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

  let legend = []

  legend.push({"Main": {
    'Public Key': node.public_key,
    'Address': `${node.IP}:${node.port}`,
    'State': node.node_state,
    'Type': node.node_type,
    'Date Created': '15.04.2018',
    'Date Updated': '17.08.2018',
    'KYCKey': '0ABD7E',
    'SLA': 'blocked',
    'Claster': 'eea98-0ABD7E-ff7ea-0BCDA',
    'Transactions Count' : 42,
  }})

  let keys_for_legend = Object.keys(node).filter((k) => {
  return !['IP', 'port', 'node_type', 'node_type_desc', 'node_state', 'public_key',
            'children'].includes(k) })

  keys_for_legend.forEach((k) => {
    let r = {}
    r[k] = node[k]
    legend.push( r )
    })


  r.push({
      name: node.IP,
      IP: node.IP,
      port: node.port,
      node_state: node.node_state,
      node_type: node.node_type,
      public_key:  node.public_key,
      type: node.IP,
      dependedOnBy:  ch.map((j) => {
        return j.IP;
        }),
      depends: parentRelation,
      legend: legend,
      filtered: false,
    });

  return r;
}


// export function filterPeers(filter) {
//   let filterKey = Object.keys(filter)[0];

//   let r = data;

//   r.data = r.data.map((i) => {i.filtered = (i[filterKey] != filter[filterKey]); return i;});

//   return data;
// }
