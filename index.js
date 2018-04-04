const fs = require('fs')


main ()

function readPosts () {
  return fs.readdirSync('./_posts_original')
}

function main () {
  const posts = readPosts()
  posts.forEach (function (post, index) {
    updateImageUrl(post)
  })
}

function updateImageUrl(post) {
  fs.readFile(`./_posts_original/${post}`, 'utf-8', function (err, text) {
    if (err) {
      console.log(err)
    }
      const newText = text.replace(/mountainboy\.me\/wp-content/g, 'mountainboy.boo.jp/wordpress/wp-content')
      fs.writeFile(`./_posts/${post}`, newText, function (err) {
        console.log('ok')
      })
  })
}
