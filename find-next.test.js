/* eslint-env mocha */

const assert = require('assert')
const findNext = require('./find-next')

describe('findNext', function () {
  it('findNexts', function () {
    assert.deepEqual(
      findNext({ tags: ['cat'] }, { 'cat': [1] }),
      1)
  })
})
