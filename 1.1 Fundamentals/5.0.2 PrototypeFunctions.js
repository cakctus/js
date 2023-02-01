const Person = function (first, last) {
  ;(this.first = first), (this.last = last)
}

const params = {
  status() {
    return "Status"
  },
  key: "value",
}

Person.prototype = params
Person.prototype.constructor = Person

const peter = new Person("Peter", "Parker")

const Developer = function (first, last, skills) {
  Person.apply(this, arguments)
  this.skills = skills || []
}

Developer.prototype = Object.create(Person.prototype)
Developer.prototype.constructor = Developer

Developer.prototype.lang = function () {
  return "Js"
}

const developer = new Developer("Peter", "Parker", ["html", "css", "js"])
