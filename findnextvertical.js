const assert = require("assert");
const debug = require("debug")("findnextvertical");
const _ = require("lodash");

module.exports = function findnextvertical(photo, photos, used) {
  return _.find(
    photos,
    p => p !== photo && p.orientation == "V" && !used[p.index]
  );
};
