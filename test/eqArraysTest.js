const assert = require('chai').assert;
const eqArrays   = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for exact same array", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("returns false for same values, different order", () => {
    assert.isNotTrue(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it("returns true for strings", () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it("returns false for same value, different variable type", () => {
    assert.isNotTrue(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });

  it("returns true for nested arrays", () => {
    assert.isTrue(eqArrays(["1", ["2", "3"], "4"], ["1", ["2", "3"], "4"]));
  });

  it("returns true for deeply nested arrays", () => {
    assert.isTrue(eqArrays(["1", ["2", [[["3"]]]], "4"], ["1", ["2", [[["3"]]]], "4"]));
  });
});