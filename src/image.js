const fetch = require('node-fetch')
const fs = require('fs')
const Gyazo = require('gyazo-api')
const constants = require('./constants.js')
const savedDataDir = './dl'
const savedDataPath = `${savedDataDir}/savedImage.jpg`
const imagesize = require('imagesize')

class Image {
  constructor (originalUrl) {
    if (!originalUrl) return null
    this.originalUrl = originalUrl
    this.newUrl = null
    this.gyazoClient = new Gyazo(constants.gyazoAccessToken)
  }

  async downloadOriginalData () {
    const res = await fetch(this.originalUrl)
    const data = res.body
    try {
      fs.mkdirSync(savedDataDir)
    } catch (err) {}
    const dest = fs.createWriteStream(savedDataPath)

    //check
    imagesize(data, (err, result) => {
      const errMessage = new Error('Saved image is invalid')
      if (err) throw errMessage
      if (!result) throw errMessage
      if (result.width < 1 || result.height < 1) {
        throw errMessage
      }
    })
    data.pipe(dest)
  }

  async deleteSavedData () {
    try {
      fs.unlinkSync(savedDataPath)
    } catch (err) {
      throw err
    }
  }

  async uploadToGyazo () {
    const res = await this.gyazoClient.upload(savedDataPath, {})
    this.newUrl = res.data.url
  }
}

module.exports = Image
