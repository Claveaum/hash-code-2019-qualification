const assert = require('assert')
const debug = require('debug')('findNext')
const _ = require('lodash')

module.exports = function findnext(photo, tags) {
  for (let tag of photo.tags) {
    if (tags[tag])
      return tags[tag][0];
  }
}
