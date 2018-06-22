const Queue = require('./queue')

const main = () => {
  const startTrekQ = new Queue()
  startTrekQ.enqueue('Kirk')
  startTrekQ.enqueue('Spock')
  startTrekQ.enqueue('Uhura')
  startTrekQ.enqueue('Sulu')
  startTrekQ.enqueue('Checkov')
  return startTrekQ
}

module.exports = main()
