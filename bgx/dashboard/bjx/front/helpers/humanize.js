const DICT = {
  inactive: 'Inactive',
  active: 'Active',
  plink: 'Permalink',
  aux: 'Secondary',
  arbiter: 'Arbiter',
  leader: 'Leader',
  //------------------------
  node_type: 'Type',
  node_state: 'Activity',

  //--------------------------
  transfer: 'Transfer',
  init: 'Initialize BGT'
}

export default function humanize(string) {
  if (!Object.keys(DICT).includes(string))
    return string
  else
    return DICT[string]
}
