const tail = require('../tail');
const assertEqual = require('../assertEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const empty = [];
const one = [1];
assertEqual(tail(empty).length, 0);
assertEqual(tail(one).length, 0);