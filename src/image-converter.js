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
    const regExp = /(http|https):(\w|\/|\.|\-)*\.(png|jpg)/g
    const urls = text.match(regExp)
    if (!urls) return []
    return urls.filter (function (prev, current , self) {
      return self.indexOf(prev) === current
    })
  }

  replaceUrl (image) {
    if (!image) return
    const regExp = new RegExp(image.originalUrl, 'g')
    this.originalText = this.originalText.replace(regExp, image.newUrl)
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
    await this.sleep(1000)
    if (!image) return
    await image.downloadOriginalData()
    await this.sleep(1000)
    await image.uploadToGyazo()
    this.replaceUrl(image)
    await this.saveText()
  }

  async excuteConverts() {
    let index = 0
    while (index < this.images.length) {
      const image = this.images[index]
      const imageIndexDesc = `${index + 1} / ${this.images.length}`
      try {
        await this.excuteConvert(image)
        this.consoleLog('success', 'SUCCESS : ', imageIndexDesc)
      } catch (err) {
        this.consoleLog('danger', 'FAILED : ', imageIndexDesc)
        this.consoleLog('danger', image.originalUrl)
        //console.log(err)
      }
      await image.deleteSavedData()
      index += 1
    }
  }

  consoleLog(status, text, imageIndexDesc) {
    let index = imageIndexDesc ? imageIndexDesc : ''
    let color
    let reset = '\u001b[0m'

    switch (status) {
      case 'success': {
        color = '\u001b[32m'
        break
      }
      case 'danger': {
        color = '\u001b[31m'
        break
      }
    }
    console.log(color + text + reset + index)
  }
}

module.exports = ImageConverter
