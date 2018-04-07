
class Test {
  constructor () {

  }

  async say () {
    await this.sayGoodBye()
  }

  async sayGoodBye () {
    console.log('good bye')
  }
}

(async function() {
  const aaa = new Test()
  aaa.say()
})()
