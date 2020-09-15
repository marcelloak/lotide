const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++)  if (array1[i] !== array2[i]) return false;
  return true;
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  else console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
};

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

assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);