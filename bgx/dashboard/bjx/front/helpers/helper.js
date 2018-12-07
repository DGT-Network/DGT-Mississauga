export function trimHash(s) {
  if (typeof s === 'undefined') return '';
  if (s.length < 13)
    return s;
  else {
    let r = s.slice(0,5) + '...' + s.slice(s.length-5);
    return r;
  }
}
