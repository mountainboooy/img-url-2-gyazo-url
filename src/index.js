const fs = require('fs')
const constants = require('./constants.js')

main ()

function main () {
  const posts = readPosts(constants.postsDirPath)
  if (!posts) return
  posts.forEach (function (post) {
  })
}

function readPosts (path) {
  //return fs.readdirSync('./_posts_original')
}
