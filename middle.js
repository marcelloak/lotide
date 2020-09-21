const middle = function(array) {
  if (array.length < 3) return [];
  let mid = [];
  if (array.length % 2 === 0) {
    mid.push(array[Math.floor((array.length - 1) / 2)]);
    mid.push(array[Math.ceil((array.length - 1) / 2)]);
  }
  else mid.push(array[(array.length - 1) / 2]);
  return mid;
}

module.exports = middle;