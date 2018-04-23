const assert = require('assert')
const Image = require('../src/image.js')
const fs = require('fs')

describe.only('Image', function () {
  let image

  before(function () {
    image = new Image()
    image.originalUrl = 'http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/10/DSC09516_Fotor.jpg'
  })

  describe('download original data', function () {
    it('save image data', async function () {
    // 画像のダウンロードと保存
    try {
      await image.downloadOriginalData()
      fs.statSync('./dest/savedImage.jpg')
    } catch (err) {
      throw err
      assert.ok(false)
    }
    assert.ok(true)
  })
})

  describe('delete saved data', function () {
    it('delete save data', async function () {
      // 保存した画像の削除
      assert.ok(false)
    })
  })

  describe ('upload to gyazo', function () {
    it ('returns image url', async function () {
      // 画像のアップロード
      assert.ok(false)
    })
  })
})
