const assert = require('assert')
const Image = require('../src/image.js')
const fs = require('fs')

describe('Image', function () {
  let image

  before(function () {
    const orignalUrl = 'http://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/10/DSC09516_Fotor.jpg'
    image = new Image(orignalUrl)
  })

  describe('download original data', function () {
    it('save image data', async function () {
      try {
        await image.downloadOriginalData()
        fs.statSync('./dl/savedImage.jpg')
      } catch (err) {
        throw(err)
        assert.ok(false)
      }
      assert.ok(true)
    })
  })

  describe ('upload to gyazo', function () {
    it ('returns image url', async function () {
      // 画像のアップロード
      try {
        await image.uploadToGyazo()
      } catch (err) {
        throw err
        assert.ok(false)
      }
      console.log('NEW_URL:', image.newUrl)
      assert.ok(true)
    })
  })

  describe('delete saved data', function () {
    it ('delete save data', async function () {
      // 保存した画像の削除
      try {
        await image.deleteSavedData()
      } catch (err) {
        throw err
        assert.ok(false)
      }
    })
  })
})
