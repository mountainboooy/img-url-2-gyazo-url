const fs = require('fs')

fs.readFile('./john-muir-trail-day-9-乾燥.md', 'utf-8', function (err, text) {
  if (err) {
    console.log(err)
  }
    console.log(text)
})
