/* eslint-env mocha */

const assert = require("assert");
const groupVertical = require("./group-vertical");

describe("groupVertical", function() {
  it("groupVerticals", function() {
    assert.deepEqual(groupVertical(), undefined);
  });
});
