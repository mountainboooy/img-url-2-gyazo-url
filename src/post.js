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
