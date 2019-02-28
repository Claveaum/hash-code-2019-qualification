const assert = require("assert");
const debug = require("debug")("tags");
const _ = require("lodash");

module.exports = function tags(photos) {
  const tags = {};
  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    photo.tags.forEach(tag => {
      if (tags[tag]) tags[tag].push(i);
      else tags[tag] = [i];
    });
  }
  return tags;
};
