const man = new Object({
  firstName: "J ",
  lastName: "B",
  age: 27,
  wife: {
    firstName: "A ",
    lastName: "B",
    age: 24,
    eyeColor: "brown",
  },
  eyeColor: "Green",
  fullname(parent = " G") {
    return this.firstName + this.lastName + parent
  },
  fn() {
    return this.fullname
  },
  fullNamePrint: function () {
    console.log(`${this.fullname()}`)
  },
  bookRead: ["Books", "Books2", "Books10", "Books50"],
  booksRead: [],
  get books() {
    return this.bookRead
  },
  set book(value) {
    return this.booksRead.push(value)
  },
  hasChildren: true,
  children: ["Maria", "Ivanka"],
  parent: {
    dad: "G",
    mom: "R",
  },
  "main title": "JavaScript",
  myObject: o.object,
})

console.log(man["main title"])
console.log(man.myObject)

man.car = "Tesla Model S Plaid"
man.listOfCars = ["Ferrari", "Porsche", "Fiat"]

const john = man
john.firstName = "John "
john.car = "Tesla Model X"
john.book = "Books1"
john.book = "Books2"
let johnCar
//delete john.fn

for (let x in man) {
  if (man[x] === "Tesla Model X") {
    johnCar = man[x]
  }
}
const obj123 = Object.values(john)
const json = JSON.stringify(john)

// console.log(john.books)
// console.log(john.booksRead)
//console.log(john.fullname())

const children1 = Object.create(man)
children1.firstName = "Maria"
children1.lastName = " B "
children1.age = 2
// console.log("car" in children1)
// delete children1.car
// console.log(children1)

// constructor

function Person(first, last, age, eye) {
  this.firstName = first
  this.lastName = last || null
  this.age = age || null
  this.eyeColor = eye
  this.city = "Chisinau"

  this.fullName = function () {
    return this.firstName + this.lastName
  }

  this.something = function (value) {
    this.sss = value
  }
}

// prototype

Person.nationality = "English" // does not work
Person.prototype.nationality = "MD"

// Create two Person objects
const myFather = new Person("G", "B", 60, "green")
const myMother = new Person("R", "B", 60, "blue")

// myFather.fullName = function () {
//   return this.firstName + " " + this.lastName
// }

// console.log(
//   myFather.fullName(),
//   (myFather.something = "something"),
//   (myMother.something = "something")
// )

// асоциативные массивы

const obj = [
  {
    company0: { compnay: "ibm", share: 10, price: 5 },
  },
  {
    company1: { compnay: "bmw", share: 20, price: 9 },
  },
]
function addd(obj, company, n, s, p) {
  this.company = company
  this.n = n
  this.s = s
  this.p = p
  ;(this.pp = {
    company2: { company: n, share: s, price: p },
  }),
    obj.push(this.pp)
}

function add(obj, company, n, s, p) {
  addd.call(this, obj, company, n, s, p)
  this.name = "honda"
}

function total(obj) {
  let totalCost
  let totalTotal = 0
  for (let i = 0; i < obj.length; i++) {
    let shares = obj[i][`company${i}`]["share"]
    let priciet = obj[i][`company${i}`]["price"]
    totalCost = priciet * shares
    totalTotal += totalCost
  }
  return totalTotal
}

add(obj, "company3", "honda", 30, 6.88)
let totalCost = total(obj)
//console.log(totalCost)

let o = {
  firstName: "John",
  m(m) {
    return this.firstName + m
  },
  get mm() {
    return this.m
  },
}

o.x = 1
// o.m = function () {
//   console.log("object o")
// }

// наследование

let p = Object.create(o)
p.y = 2

let q = Object.create(p)
q.z = 3
q.x = 100
q.g = 10
//q.qTotal = 1000
delete q["g"]
console.log(q.g)

let qTotal = null

if (q) {
  if (q.qTotal) {
    qTotal = q.x
  }
}

let qTotal2 = q?.qTotal
console.log(qTotal2)

console.log(qTotal)

// check

let obj45 = {
  a: 1,
  b: 2,
  10: 10,
  10: "100",
  true: true,
  hi: "hi",
  arr: [1, 2],
  obj: { a: 1 },
  func() {
    return "hi"
  },
}

console.log(Object.keys(obj45))
console.log(Object.getOwnPropertyNames(obj45))
console.log(JSON.stringify(obj45))
console.log(obj45["10"])
console.log(obj45["true"])

for (let i in obj45) {
  console.log(obj45[i])
}

//  merge

let obj99 = {
  a: 1,
  b: 2,
  c: 3,
  d: 400,
  f() {
    return this.a + this.b
  },
}

obj99.newV = "newV"

let obj465 = {
  d: 4,
  e: 5,
  f() {
    return this.d + this.e
  },
}
let objectResult = Object.assign({}, obj465, obj99)
let objectResult2 = { ...obj465, ...obj99 }

//console.log(objectResult)
//console.log(objectResult2)

function merge(target, ...source) {
  for (let s in source) {
    console.log(source[s])
    for (let k of Object.keys(source[s])) {
      console.log(k)
      console.log(target)
      console.log(k in target)
      if (!(k in target)) target[k] = source[s][k]
    }
  }
  return target
}

console.log(Object.assign({ x: 1 }, { x: 2, y: 3 }, { y: 3, z: 4 }))

console.log(merge({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }))

// serialization

const objSerialization = {
  a: 1,
  b: 2,
}

const arrSerialization = [1, 2, 3, 4, 5]

const str = "string"

const t = true

const n = null

const objJson = JSON.stringify(objSerialization)
//console.log(objJson)
//console.log(JSON.parse(objJson))
//console.log(JSON.stringify(arr))
//console.log(JSON.stringify(str))
//console.log(JSON.stringify(t))
//console.log(JSON.stringify(n))

//console.log(JSON.stringify(undefined)) // function RegExp Error

// toString toLocaleString

const objtoLocal = {
  a: 1,
  b: 2,
  c: "",
  toString() {
    return this
  },
}

const arr = [100, 22045, 3427, 4, 537567, 6, 7, 8, 9]

const date = new Date()

const date2 = new Date()

const number = 10500

console.log(objtoLocal.toString())
console.log(arrSerialization.toString())
console.log(arrSerialization.toLocaleString())

console.log(date.toLocaleString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

console.log(number.toLocaleString())

// valueOf

console.log(date.valueOf())
console.log(date2.valueOf())

// Расширенный синтаксис объектных литералов

// Сокращенная запись свойств

let x = 1,
  y = 2
let myObj = { x, y }
//console.log(myObj)

// Вычисляемые имена свойств

const PROPERTY_NAME = "p1"
function computePropertyName() {
  return "p" + 2
}
let myObj2 = {
  [PROPERTY_NAME]: 1,
  [computePropertyName()]: 2,
}
//console.log(myObj2.p1)
//console.log(PROPERTY_NAME)
//console.log(computePropertyName())
//console.log(myObj2.p1 + myObj2.p2)

// Операция распространения

let objectCreate = Object.create(myObj)
let position = { x: 0, y: 0 }
let dimensions = { width: 100, height: 75 }
let rect = { ...position, ...dimensions, ...objectCreate }
let res = rect.x + rect.y + rect.width + rect.height

//console.log(rect)

// Сокращенная запись методов
const OBJECT_PROPERTY1 = "p"
let shortNameObj = {
  "Method name": "name",
  [OBJECT_PROPERTY1](x) {
    return x + x
  },
}
//console.log(shortNameObj["Method name"])
//console.log(shortNameObj.p(10))

// Методы получения и установки свойств

const objSetGet = {
  n: 1,
  get nn() {
    return this.n++
  },
  set nn(value) {
    if (value > this.n) {
      return (this.n = value + 1)
    } else {
      throw new Error("error")
    }
  },
}

console.log(objSetGet.nn)
console.log(objSetGet.nn)
console.log(objSetGet.nn)
objSetGet.nn = 10
console.log(objSetGet.nn)
console.log(objSetGet.nn)
console.log(objSetGet.nn)
console.log(objSetGet.nn)
console.log(objSetGet.nn)
objSetGet.nn = 20
console.log(objSetGet.nn)

// objects method

// defineProperty defineProperties
const object1 = {
  property1: "String",
  property3: "property3",
}

object1.new = [1, 2, 3, 4, 5]

Object.defineProperties(object1, {
  property1: {
    value: "new string!",
    writable: false,
  },
})
//console.log(object1, "defineProperties")

// getOwnPropertyDescriptor getOwnPropertyDescriptors
const descriptor1 = Object.getOwnPropertyDescriptors(object1) // Object.getOwnPropertyDescriptor(object1, "property1")
//console.log(descriptor1.property1.value, "getOwnPropertyDescriptors")

// getOwnPropertyNames
//console.log(Object.getOwnPropertyNames(object1), "getOwnPropertyNames")

// preventExtensions
Object.preventExtensions(object1)
try {
  Object.defineProperties(object1, {
    property2: {
      value: "property2",
      writable: false,
      enumerable: true,
      // configurable: false,
    },
  })
} catch (error) {
  //console.log(error)
} finally {
  //console.log("preventExtensions")
}

// isExtensible
//console.log(Object.isExtensible(object1))

// seal
Object.seal(object1)
delete object1.new
object1.seal = "seal"
//console.log(object1, Object.isSealed(object1))

// freeze
Object.freeze(object1)
object1.property3 = "33@"
//console.log(object1, Object.isFrozen(object1))

myNumbers = {}

// Make it Iterable
myNumbers[Symbol.iterator] = function () {
  let n = 0
  done = false
  return {
    next() {
      n += 10
      if (n == 100) {
        done = true
      }
      return { value: n, done: done }
    },
  }
}

// console.log(myNumbers)

let textt1 = ""
for (const num of myNumbers) {
  textt1 += num + "<br>"
}

Object.prototype.sayHello = () => {
  //console.log('Hello')
}

const wife = {
  firstName: "A ",
  lastName: "B",
  age: 24,
  eyeColor: "brown",
}

//console.log(man.fullname())
//console.log(man.fullname.bind(wife, ' V')())
//console.log(man.fullname.call(children1, 'I'))
//console.log(man.fullname.apply(wife, [' V']))

//console.log(person.fn())

//const {children, firstName='John'} = person
//console.log(person.fullname())
//console.log(person.age)
//console.log(children, firstName)

/*
for (key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key, person[key])
    }
    
}


const logger = {
    key() {
        console.log(Object.keys(this))
    },
}
const bind = logger.key.bind(person)
bind()
const call = logger.key.call(person)
console.log(call)
*/

const element = (document.getElementById("demo").innerHTML = "Hi from JS")

const getElement = document.getElementById("demo")
//changedElements(getElement, 'JS')

setTimeout(() => changedElements(getElement, "JavaScript"), 1000)

getElement.addEventListener("click", (event) => {
  if (getElement.style.color === "green") {
    getElement.textContent = `Click count: ${event.detail}`
    getElement.style.backgroundColor = "red"
  }
})

const getP = document.querySelector("#tag")
changedElements(getP)
//console.dir(getP)

const getElements = document.querySelectorAll("h1")
for (let e of getElements) {
  setTimeout(() => changedElements(e, "Javascript"), 1000)
  //changedElements(e, 'Javascript')
}

function changedElements(change, text = "Changed") {
  change.textContent = text
  change.style.color = "green"
  change.style.textAlign = "center"
  change.style.backgroundColor = "black"
  change.style.padding = "1rem"
  change.style.fontSize = "50px"
}

const pers = [
  {
    firstName: "J ",
    lastName: "B",
    age: 27,
    eyeColor: "Green",
    fullname(parent = " G") {
      return this.firstName + this.lastName + parent
    },
    fn() {
      return this.fullname
    },
    hasChildren: true,
    children: ["Maria", "Matt", "Ivanka"],
    parent: {
      dad: "G",
      mom: "R",
    },
  },
]

let bob = {
  person: "Bob",
}
let cate = { ...bob }
cate.person = "Cate"

//console.log(cate)

function x(p) {
  pers.map((pp) => {
    if (pp.firstName === "J ") {
      //console.log('Name of person is John')
    } else {
      //console.log('No ')
    }
  })
}

x(pers)
