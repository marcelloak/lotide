const assert = require('chai').assert;
const countOnly   = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("returns count if there", () => {
    assert.strictEqual(result1["Jason"], 1); 
  });

  it("returns undefined if not there", () => {
    assert.strictEqual(result1["Karima"], undefined); 
  });

  it("returns undefined if set as false", () => {
    assert.strictEqual(result1["Agouhanna"], undefined); 
  });
});