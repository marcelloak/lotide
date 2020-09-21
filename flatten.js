const flatten = function(nestedArray) {
  let flatArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (!Array.isArray(nestedArray[i])) flatArray.push(nestedArray[i]);
    else for (let j = 0; j < nestedArray[i].length; j++) flatArray.push(nestedArray[i][j]);
  }
  return flatArray;
};

module.exports = flatten;