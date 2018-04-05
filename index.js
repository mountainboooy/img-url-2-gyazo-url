const fs = require('fs')


main ()



function main () {
  const strs = 'これはテストhttp://mountainboy.boo.jp/wordpress/wp-content/uploads/2014/11/DSC09773.jpgです。'
  selectImageExpression(str)
}

function readPosts () {
  return fs.readdirSync('./_posts_original')
}

function selectImageExpression (str) {
  const reqExp = /http:\/\/mountainboy\.boo\.jp\/wordpress.+jpg/g
  console.log(str.match(reqExp))
}
