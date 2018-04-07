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

  imageUrls () {
    const reqExp = /http:\/\/mountainboy\.boo\.jp\/wordpress.+jpg/g
    console.log(str.match(reqExp))
  }

  async downloadImage(url) {
    return new Promise( function (resolve, recect) {

    })
  }

  save () {

  }
}

module.exports = Post
