const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function(obj, callback) {
  for (let key in obj) if (callback(obj[key])) return key;
  return undefined;
}

let galaxy = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
let test1 = findKey(galaxy, x => x.stars === 2)
let test2 = findKey(galaxy, x => x.stars === 3)
let test3 = findKey(galaxy, x => x.stars === 4)

assertEqual(test1,"noma");
assertEqual(test2,"Akaleri");
assertEqual(test3,undefined);