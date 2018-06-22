const Stack = require('./stack')

const openTokens = ['(', '{', '[', '"', "'"]
const closeTokens = [')', '}', ']', '"', "'"]

const matchTok = s => {
  const stack = new Stack()
  for (let i = 0; i < s.length; i++) {
    // Continue if close quotes not found
    if (
      stack.top &&
      (stack.top.data.open === '"' || stack.top.data.open === "'")
    ) {
      if (s[i] !== '"' || s[i] !== "'") continue
    }
    // If token in openTokens, push to stack
    if (openTokens.includes(s[i])) {
      let index = openTokens.indexOf(s[i])
      stack.push({ open: s[i], close: closeTokens[index], index: i })
    }
    // Else if token in closeTokens, compare to top
    else if (closeTokens.includes(s[i])) {
      if (!stack.top || stack.pop().close !== s[i]) {
        // If fails comparison, add new error to stack and break
        let index = closeTokens.indexOf(s[i])
        stack.push({ open: openTokens[index], close: s[i], index: i })
        break
      }
    }
  }

  // if stack has error return error, else return null
  let error = stack.top ? stack.pop() : null
  return error ? error.index : error
}

const main = () => {
  console.log(matchTok('8 + 8 (6 /3)')) // null
  console.log(matchTok('8 + (6 - 7')) // 4
  console.log(matchTok('8 + (6 - 7))')) // 11
  console.log(matchTok('(8 + (6 - 7)')) // 0
  console.log(matchTok('(8 + "(6 - 7))')) // 5
}

if (require.main === module) {
  main()
}
