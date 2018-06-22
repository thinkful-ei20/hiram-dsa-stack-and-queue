const starTrekQ = require('./sample-queue')
const { display, peek } = require('./queue-methods')

const main = () => {
  let start = peek(starTrekQ)
  while (true) {
    starTrekQ.enqueue(starTrekQ.dequeue())
    if (peek(starTrekQ) === start) break
    if (peek(starTrekQ) === 'Spock') {
      starTrekQ.dequeue()
      continue
    }
  }
  display(starTrekQ)
}

if (require.main === module) {
  main()
}
