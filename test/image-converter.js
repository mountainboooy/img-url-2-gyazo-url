const assert = require('assert')
const ImageConverter = require('../src/image-converter.js')
const fs = require('fs')

describe('image-converter', function () {
  let converter
  before(function () {
    converter = new ImageConverter()
  })

  describe('read file', function () {
    it.only('read file properly', async function () {
      const path = './test/sample.xml'
      try {
        await converter.readFile(path)
      } catch (err) {
        throw err
        assert.ok(false)
      }
      assert.ok(true)
    })
  })
})

/*
describe('post', function () {
  describe('imageUrls', function () {
    it('return array of image urls', function () {
      const text = fs.readFileSync('./test/sample-posts/sample-post-2.md', 'utf-8')
      const expected = [
        'http://mountainboy.boo.jp/wordpress/wp-content/uploads/2018/10/aaa.jpg',
        'http://mountainboy.boo.jp/wordpress/wp-content/uploads/2018/10/bbb.jpg'
      ]
      const post = new Post(text)
      const result = post.imageUrls(text)
      console.log(result.toString())
      assert.equal(expected.toString(), result.toString())
    })
  })

  describe('downloadImage', function () {
    it('should returns image data', async function () {
      const url = 'http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/10/DSC09516_Fotor.jpg'
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
    it('uploads image', async function () {
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

  describe('uploadImages', function () {
    it('uploads images', async function () {
      const text = 'http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/10/DSC09516_Fotor.jpg'
      const post = new Post(text)
      try {
        await post.downloadImages()
      } catch (err) {
        throw err
        assert.ok(false)
      }

      try {
        await post.uploadImages()
      } catch (err) {
        throw err
        assert.ok(false)
      }
      console.log('aaa', post.images.length)
      const image = post.images[0]
      console.log('gyazoUrl',image.gyazoUrl)
      assert.ok(image.gyazoUrl)
    })
  })
})
*/
