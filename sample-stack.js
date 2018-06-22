const Stack = require('./stack')

const main = () => {
  const starTrek = new Stack()
  starTrek.push('Kirk')
  starTrek.push('Spock')
  starTrek.push('McCoy')
  starTrek.push('Scotty')
  return starTrek
}

module.exports = main()
