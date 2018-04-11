const fetch = require('node-fetch')
const fileType = require('file-type')

class Post {
  constructor (postText) {
    this.postText = postText
    this.images = []
  }

  async downloadImages () {
    const imageUrls = this.imageUrls(this.postText)
    const imageModels = imageUrls.map(async function (url) {
      let imageData
      try {
        imageData = await this.downloadImage(url)
        const image = new Image({
          originalUrl: url,
          imageData: imageData
        })
        return image
      } catch (err) {
        console.log('failed to download image:', url)
      }
    })
    this.images = imageModels
  }

  async uploadImages () {

  }

  async replaceUrls() {

  }

  imageUrls (text) {
    const regExp = /http:\/\/mountainboy\.boo\.jp\/wordpress\/wp-content\/uploads\/\w*\.(jpg||png)/g
    const urls = text.match(regExp)
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
