class _Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

module.exports = class Stack {
  constructor() {
    this.top = null
  }

  push(data) {
    if (!this.top) {
      this.top = new _Node(data, null)
      return
    }
    this.top = new _Node(data, this.top)
  }

  pop() {
    const node = this.top
    this.top = node ? node.next : null
    return node ? node.data : null
  }
}

function main() {
  const starTrek = new Stack()
  starTrek.push('Kirk')
  starTrek.push('Spock')
  starTrek.push('McCoy')
  starTrek.push('Scotty')
  console.log(JSON.stringify(starTrek, null, 2))
}

if (require.main === module) {
  main()
}
