const fs = require('fs')
const Image = require('./image.js')
const destDir = './dest'

class ImageConverter {
  constructor () {
    this.images = []
    this.originalText = null
  }

  async initWithFilePath (filePath) {
    this.originalText = await readFile(filePath)
    const imageUrls = pickImageUrls(this.originalText)
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

  async excuteConvert(image) {
    if (!image) return
    await image.downloadOriginalData()
    await image.uploadToGyazo()
    await image.deleteSavedData()
    this.replaceUrl()
    await this.saveText()
  }

  async excuteConverts() {
    //this.images.forEach
  }
}

module.exports = imageConver



/*
const fetch = require('node-fetch')
const fs = require('fs')
const fileType = require('file-type')
const Image = require('./image.js')
const accessToken = '31f273c5c18b6c5f72388719ba7221c3e3a4f66828a5d6a60517bcfe2034094d'
const Gyazo = require('gyazo-api')
const client = new Gyazo(accessToken)


class Post {
  constructor (postText) {
    this.postText = postText
    this.images = []
  }

  async downloadImages () {
    const imageUrls = this.imageUrls(this.postText)
    let imageModels = []
    let promises = Promise.all(
      imageUrls.map((url) => {
        return new Promise(async (res, rej) => {
          let imageData
          try {
            imageData = await this.downloadImage(url)
            let image = new Image()
            image.originalUrl = url
            image.data = imageData
            imageModels.push(image)
            res()
          } catch (err) {
            console.log('failed to download image:', url, err)
          }
        })
      })
    )

    return promises.then(()=>{
      this.images = imageModels
      console.log('bbb')
    })
  }

  async uploadImages () {
    return Promise.all(this.images.map((image) => {
      return new Promise(async (resolve) => {
        let res
        try {
          res = await this.uploadImage(image.data)
        } catch(err) {
          console.log('failed to upload image:', image.originalUrl, err, '-----')
        }
        image.gyazoUrl = res.data.url
        resolve()
      })
    }))
  }

  async uploadImage(imagePath) {
    return await client.upload(imagePath)
  }

  async replaceUrls() {

  }

  imageUrls (text) {
    const regExp = /http:\/\/mountainboy\.boo\.jp\/wordpress\/wp-content\/uploads\/(\w||\/)*\.(jpg||png)/g
    const urls = text.match(regExp)
    if (!urls) return []
    return urls.filter (function (prev, current , self) {
      return self.indexOf(prev) === current
    })
  }

  async downloadImage(url) {
    const res = await fetch(url)
    return res.body
  }

  save () {
  }
}

module.exports = Post
*/
