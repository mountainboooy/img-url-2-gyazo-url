

const str = '[[[https://aaa.jpg]]]http://bbb.jpg]]]'
const reqExp = /(https||http):\/\/\w*\.(jpg||png)/g
const result = str.match(reqExp)
console.log(result)
