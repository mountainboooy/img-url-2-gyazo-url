const assert = require('assert')
const index = require('../src/index.js')

describe('index', function () {
  describe('readPosts', function () {
    it ('returns array of post files', async function () {
      const dirPath = './test/sample-posts'
      const expected = [
        'sample-post-1.md',
        'sample-post-2.md',
        'sample-post-3.html'
      ]
      const result = await index.readPosts(dirPath)
      assert.equal(result.toString(), expected.toString())
    })
  })

  describe('readPost' ,function () {
    it ('returns text of post', async function () {
      const filePath = './test/sample-posts/sample-post-1.md'
      const expected = 'this is sample-post-1\n'
      let result
      try {
        result = await index.readPost(filePath)
      } catch(err) {
        throw(err)
        assert.ok(fail)
      }
      assert.equal(result, expected)
    })
  })
})
