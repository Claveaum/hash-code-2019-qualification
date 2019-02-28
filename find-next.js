const assert = require("assert");
const debug = require("debug")("findNext");
const _ = require("lodash");

module.exports = function findnext(photo, tags, used) {
  for (let tag of photo.tags) {
    if (tags[tag])
      for (let next of tags[tag])
        if (!used[next]) {
          return next;
        }
  }
};
