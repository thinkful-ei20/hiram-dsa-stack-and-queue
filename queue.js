class _Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

module.exports = class Queue {
  constructor() {
    this.first = null
    this.last = null
  }

  enqueue(data) {
    const node = new _Node(data)

    if (!this.first) this.first = node
    if (this.last) {
      node.next = this.last
      this.last.prev = node
    }

    this.last = node
  }

  dequeue() {
    if (!this.first) return

    const node = this.first
    this.first = node.prev

    if (node === this.last) this.last = null

    return node.value
  }
}

const main = () => {
  const startTrekQ = new Queue()
  startTrekQ.enqueue('Kirk')
  startTrekQ.enqueue('Spock')
  startTrekQ.enqueue('Uhura')
  startTrekQ.enqueue('Sulu')
  startTrekQ.enqueue('Checkov')

  console.log(startTrekQ)
}

if (require.main === module) {
  main()
}
