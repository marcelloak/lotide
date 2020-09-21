const assert = require('chai').assert;
const eqObjects   = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const nested = { a: { z: 1 }, b: 2 };
const deeplyNested = { a: { z: { z: 1 }}, b: 2 , c: {d : {e: {f: 3}}}};

describe("#eqObjects", () => {
  it("returns true for exact same object", () => {
    assert.isTrue(eqObjects(ab, ab));
  });

  it("returns true for same key/value pairs, different order", () => {
    assert.isTrue(eqObjects(ab, ba));
  });

  it("returns false for extra key in one object", () => {
    assert.isNotTrue(eqObjects(ab, abc));
  });

  it("returns true for arrays as values", () => {
    assert.isTrue(eqObjects(cd, dc));
  });

  it("returns false for same keys, different value for one", () => {
    assert.isNotTrue(eqObjects(cd, cd2));
  });

  it("returns true for nested objects", () => {
    assert.isTrue(eqObjects(nested, nested));
  });

  it("returns true for deeply nested objects", () => {
    assert.isTrue(eqObjects(deeplyNested, deeplyNested));
  });
});