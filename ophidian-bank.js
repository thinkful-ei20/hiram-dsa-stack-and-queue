const Queue = require('./queue.js')
const { display } = require('./queue-methods')

const fewMinutesLobby = () => {
  const line = new Queue()
  line.enqueue('Person 1')
  line.enqueue('Person 2')
  line.enqueue('Person 3')
  line.enqueue('Person 4')
  line.enqueue('Person 5')
  let correct = Math.floor(Math.random() * 4)
  let num = 5
  let person = null
  let interval = setInterval(() => {
    num++
    line.enqueue(`Person ${num}`)
    person = line.dequeue()
    if (correct === 3) {
      line.enqueue(person)
    }
    correct = Math.floor(Math.random() * 4)
    if (num === 15) {
      clearInterval(interval)
      display(line)
    }
  }, 1000)
}

if (require.main === module) {
  fewMinutesLobby()
}
