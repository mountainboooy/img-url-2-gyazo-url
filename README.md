# img-url-2-gyazo-url
img-url-2-gyazo-url converts image urls to gyazo urls in any type of file.  This is very useful for situations like moving blogs. About Gyazo, please see [https://gyazo.com](https://gyazo.com).

<img src='https://i.gyazo.com/db33b1dbc44324b0563fea75dd755db7.jpg' width='500px'>

## Useage
### Installation
```
  git clone git@github.com:mountainboooy/img-url-2-gyazo-url.git
  cd img-url-2-gyazo-url
  npm install
```  



### Setting
- Add your Gyazo Access token to `config.js`. To create your access token, please check [here](https://gyazo.com/api/docs/auth)
- Add your original file path to `config.js`.
```javascript:config.js
module.exports = {
  filePath: 'ORIGINAL_FILE_PATH',
  gyazoAccessToken: 'YOUR_GYAZO_ACCESS_TOKEN',
}
```




### Convert
- Simply type `node src/index.js`
- Then, converted file will appear in same directory where the original file is located.
