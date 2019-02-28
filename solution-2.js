const assert = require("assert");
const debug = require("debug")("solution2");
const _ = require("lodash");
const tags = require("./tags");
const findNext = require("./find-next");
const findnextvertical = require("./findnextvertical");

module.exports = function solution2(photos) {
  let t = tags(photos);
  let used = {};
  let res = [];

  for (let i = 0; i < photos.length; i++) {
    let pos = i;
    let photo;
    while (pos && !used[pos]) {
      photo = photos[pos];
      //console.log(pos);
      used[pos] = true;
      if (photo.orientation == "H") {
        res.push({ photos: [pos] });
      }
      if (photo.orientation == "V") {
        let otherVertical = findnextvertical(photo, photos, used);
        //console.log(otherVertical)
        if (otherVertical) {
          used[otherVertical.index] = true;
          res.push({ photos: [pos, otherVertical.index] });
        }
      }
      pos = findNext(photo, t, used);
    }
  }
  return res;
};
