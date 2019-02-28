/* eslint-env mocha */

const assert = require("assert");
const findnextvertical = require("./findnextvertical");

describe("findnextvertical", function() {
  it("findnextverticals", function() {
    assert.deepEqual(findnextvertical(), undefined);
  });
});
