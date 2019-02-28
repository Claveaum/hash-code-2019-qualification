/* eslint-env mocha */

const assert = require("assert");
const unparse = require("./write").unparse;

describe("unparse", function() {
  it("unparses correctly", function() {
    assert.deepEqual(
      unparse([{ photos: [0] }, { photos: [3] }, { photos: [1, 2] }]),
      [3, "0", "3", "1 2"]
    );
  });
});
