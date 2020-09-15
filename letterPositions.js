const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++)  if (array1[i] !== array2[i]) return false;
  return true;
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  else console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
};

const letterPositions = function(sentence) {
  const count = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] != " ") {
      if (count[sentence[i]]) {
        count[sentence[i]].push(i);
      } else {
        count[sentence[i]] = [i];
      }
    }
  }
  return count;
};

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);