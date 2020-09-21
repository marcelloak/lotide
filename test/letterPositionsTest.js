const assert = require('chai').assert;
const letterPositions   = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns single letter position", () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });

  it("returns multiple letter positions", () => {
    assert.deepEqual(letterPositions("hello").l, [2,3]); 
  });
});