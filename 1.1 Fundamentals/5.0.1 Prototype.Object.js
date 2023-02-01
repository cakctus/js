const Person = {
  constructor(first, last) {
    ;(this.first = first), (this.last = last)
    return this
  },

  show() {
    console.log(`Hi ${this.first}`)
  },

  a: "A",
  b: "B",
}

Person.statuss = function () {
  return "status!"
}

/* const j = Object.create(Person) */

const bob = {
  first: "Bob",
  last: "Smith",
}
//bob.__proto__ = Person
//Object.setPrototypeOf(bob, Person)

const mary = {
  first: "Mary",
  last: "Larrow",
}
//Object.setPrototypeOf(john, Person)

const peter = Object.create(Person).constructor("Peter", "Parker")
peter.key = "value"

const Developer = Object.create(Person) // template

Developer.constructor = function (first, last, skills) {
  Person.constructor.apply(this, arguments)
  this.skills = skills || []
  return this
}
Developer.status = "FrontEnd Developer"

const developer = Object.create(Developer).constructor("Peter", "Parker", [
  "html",
  "css",
  "js",
])

console.dir(peter)
console.dir(developer)
