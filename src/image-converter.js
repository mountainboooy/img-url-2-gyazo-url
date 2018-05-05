const fs = require('fs')
const Image = require('./image.js')
const destDir = './dest'

class ImageConverter {
  constructor () {
    this.images = []
    this.originalText = null
  }

  async initWithFilePath (filePath) {
    this.originalText = await this.readFile(filePath)
    const imageUrls = this.pickImageUrls(this.originalText)
    this.images = imageUrls.map(function (url) {
       return new Image(url)
    })
  }

  readFile (filePath) {
    return new Promise (function (res, rej) {
      fs.readFile(filePath, 'utf-8', function (err, data) {
        if (err) {
          rej(err)
        } else {
          res(data)
        }
      })
    })
  }

  pickImageUrls (text) {
    const regExp = /http:\/\/mountainboy\.boo\.jp\/wordpress\/wp-content\/uploads\/(\w||\/)*\.(jpg||png)/g
    const urls = text.match(regExp)
    if (!urls) return []
    return urls.filter (function (prev, current , self) {
      return self.indexOf(prev) === current
    })
  }

  replaceUrl (image) {
    if (!image) return
    this.originalText.replace(image.originalUrl, image.newUrl)
  }

  async saveText () {
    try {
      fs.mkdirSync(destDir)
    } catch (err) {}

    const path = `${destDir}/converted.xml`
    return new Promise ((res, rej) => {
      fs.writeFile(path, this.originalText, 'utf-8', function (err) {
        if (err) rej(err)
        res()
      })
    })
  }

  sleep (ms) {
    return new Promise ((res) => {
      setTimeout(()=> {
        res()
      }, ms)
    })
  }

  async excuteConvert(image) {
    if (!image) return
    await image.downloadOriginalData()
    await image.uploadToGyazo()
    await image.deleteSavedData()
    this.replaceUrl()
    await this.saveText()
  }

  async excuteConverts() {
    await this.sleep(1000)
    this.images.forEach(async (image, index) => {
      try {
        this.excuteConvert(image)
        console.log('success : ', `${index + 1} / ${this.images.length}` )
      } catch (err) {
        console.log('failed : ', err)
      }
    })
  }
}

module.exports = ImageConverter
