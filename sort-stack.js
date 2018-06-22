const Stack = require('./stack')

const sort = stack => {
  const tmpStack = new Stack()
  let min = null
  let tmpMin = stack.pop()

  while (true) {
    if (!tmpStack.top && min === tmpMin) {
      tmpStack.push(tmpMin)
      while (stack.top) {
        tmpStack.push(stack.pop())
      }
      return tmpStack
    }
    if (!stack.top || stack.top.data === min) {
      min = tmpMin
      stack.push(tmpMin)
      while (tmpStack.top) {
        stack.push(tmpStack.pop())
      }
      tmpMin = stack.pop()
      continue
    }
    if (tmpMin < stack.top.data) {
      tmpStack.push(stack.pop())
      continue
    }
    if (stack.top.data !== min && stack.top.data < tmpMin) {
      tmpStack.push(tmpMin)
      tmpMin = stack.pop()
      continue
    }
  }
}

const main = () => {
  const stack = new Stack()
  stack.push(1)
  stack.push(3)
  stack.push(4)
  stack.push(2)
  console.log(JSON.stringify(sort(stack), null, 2))
}

if (require.main === module) {
  main()
}
