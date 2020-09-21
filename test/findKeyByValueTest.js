const assert = require('chai').assert;
const findKeyByValue   = require('../findKeyByValue');

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("returns key with good value", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined with missing value", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});