const fs = require('fs')
const constants = require('./constants.js')
const Post = require('./Post.js')

const index = {
  main: async function () {
    const dirPath = constants.postsDirPath
    const postFiles = readPosts(dirPath)
    if (!postFiles) return
    postFiles.forEach (function (postFile) {
      const post = new Post(`${bdirPath}/${postFile}`)
      post.downloadImages()
      post.uploadImages()
      post.replaceUrls()
      post.save()
    })
  },

  readPosts: async function (dirPath) {
    return new Promise (function (res) {
      fs.readdir(dirPath, function (err, data) {
        if (err) throw err
        res(data)
      })
    })
  },

  readPost: function (filePath) {
    return new Promise (function (res, rej) {
      fs.readFile(filePath, 'utf-8', function (err, data) {
        if (err) {
          rej(err)
        } else {
          console.log('look', data)
          res(data)
        }
      })
    })
  }
}

module.exports = index
