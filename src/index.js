const ImageConverter = require('./image-converter.js')
const config = require('../config.js')

main()

async function main () {
  let converter = new ImageConverter()
  try {
    await converter.initWithFilePath(cofig.filePath)
  } catch (err) {
    throw (err)
  }
  console.log(`${converter.images.length} images found.`)
  await converter.excuteConverts()
}
