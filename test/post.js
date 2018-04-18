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

  describe('downloadImage', function () {
    it ('should returns image data', async function () {
      const url = 'http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/11/DSC09771.jpg'
      const post = new Post('aaa')
      let data
      try {
        data = await post.downloadImage(url)
      } catch (err) {
        throw err
        assert.ok(false)
      }
      const dest = fs.createWriteStream('./test.jpg');
      data.pipe(dest)
      try {
        fs.statSync('./test.jpg')
        fs.unlinkSync('./test.jpg')
        assert.ok(true)
      } catch (err) {
        throw err
        assert.ok(false)
      }
    })
  })

  describe('uploadImage', function () {
    it.only('uploads image', async function () {
      const imagePath = './test/test_image.jpg'
      const post = new Post('aaa')
      let res
      try {
        res = await post.uploadImage(imagePath)
        console.log(res.data.permalink_url)
      } catch (err) {
        throw err
        assert.ok(false)
      }
      assert.ok(res.data.permalink_url)
    })
  })
})
