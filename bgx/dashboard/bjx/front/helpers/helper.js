export function trimHash(s, length=5) {
  if (typeof s === 'undefined') return '';
  if (s.length < 3+ 2*length)
    return s;
  else {
    let r = s.slice(0,length) + '...' + s.slice(s.length-length);
    return r;
  }
}

export function trimSpaces(s) {
  if (typeof s === 'undefined') return '';
  return s.replace(/\s/g, '');
}
