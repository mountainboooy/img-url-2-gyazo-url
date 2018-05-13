const assert = require('assert')
const ImageConverter = require('../src/image-converter.js')
const fs = require('fs')
const Image = require('../src/image.js')

describe('image-converter', function () {
  let converter
  before(function () {
    converter = new ImageConverter()
  })

  describe('init with file path', function () {
    it('returns correnct number of image urls', async function () {
      try {
        await converter.initWithFilePath('./test/sample.xml')
      } catch (err) {
        throw (err)
        assert.ok(false)
      }
      assert.equal(2, converter.images.length)
    })
  })

  describe('read file', function () {
    it('read file properly', async function () {
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

  describe('pick image urls', function () {
    it('picks up image urls', function () {
      const text = fs.readFileSync('./test/sample.xml', 'utf-8')
      const expected = ['http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/11/DSC09951__1416928028_58.85.255.147.jpg', 'http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/11/DSC09749_Fotor.jpg']
      const result = converter.pickImageUrls(text)
      console.log('RESULT', result.toString())
      assert.equal(result.toString(), expected.toString())
    })
  })

  describe('replace url', function () {
    it('replaces original url to new url', function () {
      const originalUrl = 'http://mountainboy.boo.jp/wordpress/wp-content/uploads/aaa.jpg'
      converter.originalText = originalUrl
      const image = new Image(originalUrl)
      image.newUrl = 'https://i.gyazo.com/aaa.png'
      converter.replaceUrl(image)
      assert.equal(converter.originalText, image.newUrl)
    })
  })

  describe('excute convert', function () {
    it.only('converts one image url', async function () {
      this.timeout(10000)
      await converter.initWithFilePath('./test/sample.xml')
      try {
        await converter.excuteConvert(converter.images[0])
      } catch (err) {
        throw err
        assert.ok(false)
      }
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
