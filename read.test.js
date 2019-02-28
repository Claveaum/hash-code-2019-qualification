/* eslint-env mocha */

const assert = require("assert");
const { parse } = require("./read");

describe("parse", function () {
  it("parses correctly", function () {
    const textFromInputFile = `1
H 1 cat`;
    //assert.deepEqual(parse(textFromInputFile), { "photos": [{ "orientation": "H", "tags": ["cat", "beach", "sun"] }, { "orientation": "V", "tags": ["selfie", "smile"] }, { "orientation": "V", "tags": ["garden", "selfie"] }, { "orientation": "H", "tags": ["garden", "cat"] }] });
  });
});
