export function convertStates(data) {
  //console.log(data.data)
  data.data = data.data.map((i) => {
    i.decoded_data = null;
    return i;
  });

  return data.data;
}

export function convertState(data, address) {


  let keys = Object.keys(data.data)

  let key = null;

  let decoded = null;

  if (keys.length) {
    key = keys[0];

    let p = JSON.parse(data.data[key]);

    let k = Object.keys(p)[0]
    let v = JSON.parse(Object.values(p)[0])

    decoded = v;
  }

  return {
    data: decoded,
    key: key,
    address: address
  }
}

export function addState(to, data) {
  return to.map((i) => {
    if (i.address === data.address)
      i.decoded_data=data
    return i;
  });
}
