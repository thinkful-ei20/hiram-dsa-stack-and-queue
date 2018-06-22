const Stack = require('./stack')

const isPalindrome = s => {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  const stack = new Stack()
  for (const char of s) {
    stack.push(char)
  }
  for (const char of s) {
    if (stack.pop() !== char) return false
  }
  return true
}

const main = () => {
  console.log(isPalindrome('dad')) // true
  console.log(isPalindrome('A man, a plan, a canal: Panama')) // true
  console.log(isPalindrome('1001')) // true
  console.log(isPalindrome('Tauhida')) // false
}

if (require.main === module) {
  main()
}
