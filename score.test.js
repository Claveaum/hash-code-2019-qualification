/* eslint-env mocha */

const assert = require('assert')
const score = require('./score')

describe('score', function () {
  it('scores', function () {
    assert.deepEqual(
      score({ tags: ['a', 'b'] }, { tags: ['a', 'c'] }),
      1)
  })

  it('scores 2', function () {
    assert.deepEqual(
      score({ tags: ['a', 'b', 'c', 'f'] }, { tags: ['a', 'd', 'e', 'b'] }),
      2)
  })
})
