const starTrekQ = require('./sample-queue')

const peek = queue => {
  return queue.first.value
}

const display = queue => {
  let start = peek(queue)
  let item = queue.dequeue()
  while (start !== peek(queue)) {
    console.log(item)
    queue.enqueue(item)
    item = queue.dequeue()
  }
}

const main = () => {
  console.log(peek(starTrekQ))
  display(starTrekQ)
}

if (require.main === module) {
  main()
}

module.exports = {
  display,
  peek
}
