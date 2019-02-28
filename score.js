const assert = require('assert')
const debug = require('debug')('score')
const _ = require('lodash')



module.exports = function score(photo1, photo2) {
  const commun = _.intersection(photo1.tags, photo2.tags).length;
  const left = _.without(photo1.tags, ...photo2.tags).length;
  const right = _.without(photo2.tags, ...photo1.tags).length;

  return Math.min(commun, left, right)
}
