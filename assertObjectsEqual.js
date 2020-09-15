const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++)  if (array1[i] !== array2[i]) return false;
  return true;
}

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false
  for (var key in object1) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      if (!eqArrays(object1[key],object2[key])) return false;
    }
    else if (object1[key] !== object2[key]) return false;
  }
  return true;
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(object1,object2)) console.log(`✅✅✅Assertion Passed: ${object1} === ${object2}`);
  else console.log(`🛑🛑🛑Assertion Failed: ${object1} !== ${object2}`);
};

