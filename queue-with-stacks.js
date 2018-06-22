const Stack = require('./stack')

module.exports = class Queue {
  constructor() {
    this.stack1 = new Stack()
    this.first = null
    this.stack2 = new Stack()
    this.last = null
  }

  enqueue(value) {
    if (!this.stack1.top) {
      this.stack1.push(value)
      this.first = this.stack1.top
      this.last = this.first
    }
    //
    else {
      while (this.stack1.top) {
        this.stack2.push(this.stack1.pop())
      }
      this.stack1.push(value)
      this.last = this.stack1.top
      while (this.stack2.top) {
        this.stack1.push(this.stack2.pop())
      }
    }
  }

  dequeue() {
    let value = null
    if (this.stack1.top) {
      value = this.stack1.pop()
      this.first = this.stack1.top
      if (!this.first) this.last = null
    }
    return value
  }
}
