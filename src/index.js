const ImageConverter = require('./image-converter.js')
const constants = require('./constants.js')

main()

async function main () {
  let converter = new ImageConverter()
  try {
    await converter.initWithFilePath(constants.filePath)
  } catch (err) {
    throw (err)
  }
  console.log(`${converter.images.length} images fond`)
  await converter.excuteConverts()
}
