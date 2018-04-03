const fs = require('fs')

fs.readFile('./john-muir-trail-day-9-乾燥.md', 'utf-8', function (err, text) {
  if (err) {
    console.log(err)
  }
    console.log('read ok')
    const newText = text.replace(/mountainboy\.me\/wp-content/g, 'mountainboy.boo.jp/wp-content')

    fs.writeFile('./john-muir-trail-day-9-乾燥.md', newText, function (err) {
      console.log('ok')
    })
})
