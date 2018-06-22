const Queue = require('./queue-with-stacks')

const peek = queue => queue.first.data

class DanceFloor {
  constructor() {
    this.pairs = new Queue()
    this.spares = new Queue()
  }

  join(sex, name) {
    if (this.spares.first) {
      if (peek(this.spares).sex !== sex) {
        let pair = [this.spares.dequeue(), { sex, name }]
        this.pairs.enqueue(pair)
        return pair
      } else {
        let start = peek(this.spares)
        let person = this.spares.dequeue()
        while (person.name !== start.name) {
          if (person.sex !== sex) {
            let pair = [{ ...person }, { sex, name }]
            this.pairs.enqueue(pair)
            return pair
          }
          this.spares.enqueue(person)
          person = this.spares.dequeue()
        }
        return null
      }
    } else {
      this.spares.enqueue({ sex, name })
      return null
    }
  }

  show() {
    let start = peek(this.pairs)
    let pair = this.pairs.dequeue()
    while (start !== peek(this.pairs)) {
      if (pair[0].sex === 'M') {
        console.log(
          `Female dancer is: ${pair[1].name} and the male dancer is: ${
            pair[0].name
          }`
        )
      }
      //
      else {
        console.log(
          `Female dancer is: ${pair[0].name} and the male dancer is: ${
            pair[1].name
          }`
        )
      }
      this.pairs.enqueue(pair)
      pair = this.pairs.dequeue()
    }

    if (this.spares.first) {
      let count = 0
      let start = peek(this.spares)
      let spare = this.spares.dequeue()
      while (start !== peek(this.spares)) {
        count++
        this.spares.enqueue(spare)
        spare = this.spares.dequeue()
      }

      let sex = 'female'
      if (peek(this.spares).sex === 'M') {
        sex = 'male'
      }
      console.log(`There are ${count} ${sex} dancers waiting to dance`)
    }
  }
}

const main = () => {
  const floor = new DanceFloor()
  floor.join('F', 'Jane')
  floor.join('M', 'Frank')
  floor.join('M', 'John')
  floor.join('M', 'Sherlock')
  floor.join('F', 'Madonna')
  floor.join('M', 'David')
  floor.join('M', 'Christopher')
  floor.join('F', 'Beyonce')
  floor.show()
}

if (require.main === module) {
  main()
}
