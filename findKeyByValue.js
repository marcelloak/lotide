const findKeyByValue = function(obj, value) {
  for (var key in obj) {
    if (obj[key] === value) return key;
  }
  return undefined;
}

module.exports = findKeyByValue;