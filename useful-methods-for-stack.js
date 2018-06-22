module.exports.peek = stack => {
  return stack.top
}

module.exports.display = stack => {
  let node = stack.top
  while (node) {
    console.log(node.data)
    node = node.next
  }
}

const main = () => {
  const sampleStack = require('./sample-stack')
  module.exports.display(sampleStack)
  let top = module.exports.peek(sampleStack)
  console.log(`top: ${top.data}`)
  console.log('removing McCoy')
  sampleStack.pop()
  sampleStack.pop()
  sampleStack.push(top.data)
  module.exports.display(sampleStack)
}

if (require.main === module) {
  main()
}
