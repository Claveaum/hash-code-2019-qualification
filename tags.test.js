/* eslint-env mocha */

const assert = require('assert')
const tags = require('./tags')

describe('tags', function () {
  it('tagss', function () {
    assert.deepEqual(
      tags([
        { tags: ['cat', 'beach', 'sun'] },
        { tags: ['selfie', 'smile'] },
        { tags: ['garden', 'selfie'] },
        { tags: ['garden', 'cat'] },
      ]),
      {
        'cat': [0, 3],
        'beach': [0],
        'garden': [2, 3],
        'smile': [1],
        'selfie': [1, 2],
        'sun': [0],
      }
    )
  })
})
