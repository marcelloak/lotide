const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(array) {
  return array.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const empty = [];
const one = [1];
assertEqual(tail(empty).length, 0);
assertEqual(tail(one).length, 0);