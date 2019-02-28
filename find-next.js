const assert = require("assert");
const debug = require("debug")("findNext");
const _ = require("lodash");
const score = require("./score")

module.exports = function findnext(photo, tags, used, photos) {
  let max = 0;
  let res;
  for (let tag of photo.tags) {
    if (tags[tag])
      for (let next of tags[tag])
        if (!used[next]) {
          const s = score(photo, photos[next])
          if (s > max) {
            res = photos[next]
            max = s
          }
        }
  }
  return res && res.index
};
