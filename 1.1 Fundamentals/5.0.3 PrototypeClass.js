class Person {
  constructor(first, last) {
    this.first = first
    this.last = last
    console.log(this.first, this.last)
  }

  show() {
    return `Hi ${this.first}`
  }
}

//const person = new Person("John", "B")

class Developer extends Person {
  constructor(first, last, skills) {
    super(first, last)
    console.log(first, last, skills)
  }

  show() {
    return super.show()
  }

  status() {
    return "Senior"
  }
}

const developer = new Developer("John", "B", ["html", "css", "js"])

console.log(developer.show())
