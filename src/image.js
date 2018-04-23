const fetch = require('node-fetch')
const fs = require('fs')
const Gyazo = require('gyazo-api')
const constants = require('./constants.js')
const savedDataDir = './dest'
const savedDataPath = `${savedDataDir}/savedImage.jpg`

class Image {
  constructor () {
    this.originalUrl = null
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
    const res = await this.gyazoClient.upload()
    this.newUrl = res.url
  }
}

module.exports = Image
