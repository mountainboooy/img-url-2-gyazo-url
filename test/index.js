const assert = require('assert')
const index = require('../src/index.js')

describe('index', function () {
  describe('readPosts', function () {
    it ('return array of post files', async function () {
      const dirPath = './test/sample-posts'
      const expected = [
        'sample-post-1.md',
        'sample-post-2.md',
        'sample-post-3.html'
      ]
      const result = await index.readPosts(dirPath)
      assert.equal(result.toString, expected.toString)
    })
  })
})
