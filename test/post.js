const assert = require('assert')
const Post = require('../src/post.js')
const fs = require('fs')

describe('post', function () {
  describe('imageUrls', function () {
    it ('return array of image urls', function () {
      const text = fs.readFileSync('./test/sample-posts/sample-post-2.md', 'utf-8')
      const expected = [
        'http://mountainboy.boo.jp/wordpress/wp-content/uploads/aaa.jpg',
        'http://mountainboy.boo.jp/wordpress/wp-content/uploads/bbb.jpg'
      ]
      const post = new Post(text)
      const result = post.imageUrls(text)
      assert.equal(expected.toString(), result.toString())
    })
  })
})
