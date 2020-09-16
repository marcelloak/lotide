const map = function(array, callback) {
  const results = [];
  for (let item of array) results.push(callback(item));
  return results;
}

const words1 = ["ground", "control", "to", "major", "tom"];
const results1 = map(words1, word => word[0]);
const words2 = ["ground", "control", "to", "major", "tom"];
const results2 = map(words2, word => word[0] + word[word.length - 1]);
const words3 = ["ground", "control", "to", "major", "tom"];
const results3 = map(words3, word => word.length);

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++)  if (array1[i] !== array2[i]) return false;
  return true;
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["gd", "cl", "to", "mr", "tm"]);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);