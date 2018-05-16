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
      const expected = ['http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/11/DSC09728_Fotor.jpg', 'http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/11/DSC09749_Fotor.jpg']
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
    it('converts one image url', async function () {
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
