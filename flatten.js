const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++)  if (array1[i] !== array2[i]) return false;
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  else console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
};

const flatten = function(nestedArray) {
  let flatArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (!Array.isArray(nestedArray[i])) flatArray.push(nestedArray[i]);
    else for (let j = 0; j < nestedArray[i].length; j++) flatArray.push(nestedArray[i][j]);
  }
  return flatArray;
};

const nested = [1, 2, [3, 4], 5, [6]];
const flat = [1, 2, 3, 4, 5, 6];
assertArraysEqual(flatten(nested), flat);