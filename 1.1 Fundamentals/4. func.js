// const t = document.getElementById("time")
// ;(t.style.color = "green"),
//   (t.style.textAlign = "center"),
//   (t.style.fontSize = "2rem"),
//   (t.style.border = "1px solid green"),
//   (t.style.padding = "15px")

function time(t) {
  ;(t.style.color = "green"),
    (t.style.textAlign = "center"),
    (t.style.fontSize = "2rem"),
    (t.style.border = "1px solid green"),
    (t.style.padding = "15px")

  setInterval(function () {
    t.innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a")
  }, 1000)

  return setInterval(function () {
    t.innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a")
  }, 1000)
}
// time(t)

//Объявления функций

function factorial(x) {
  if (x <= 1) return 1
  return x * factorial(x - 1)
}
//console.log(factorial(10))

// Выражения функций

const f = function (x) {
  if (x <= 1) return 1
  return x * factorial(x - 1)
}
//console.log(f(10))

// Стрелочные функции

const arr1 = (a, b) => a + b
const arr2 = (a) => a
const arr3 = () => true
const arr4 = (x) => {
  return { value: x }
}

let filtered = [1, null, 2, 3].filter((x) => x !== null)

// Вложенные функции

let mainFunc = function (p) {
  //console.log("1st arg:", p)
  return function (pp) {
    //console.log("2nd arg:", pp)
    return Math.max(p, pp)
  }
}

let m = mainFunc(10)
//mainFunc(100)(1000)
//console.log(m(22))

// Вызов функций

// как функции
//let total = distance(0,0,2,1) + distance(2,1,3,5);

// Вызов метода
const obj = {
  a: 1,
  b: 2,
  str: "string",
  //c: console.log(this),
  set t(a) {
    return (this.c = a)
  },
  f() {
    let self = this
    console.log(self === this, 1) // => true
    fff()
    function fff() {
      console.log(self === this, 2)
    }

    let ff = () => {
      console.log(self === this, 2, "arrow")
    }
    ff()
  },
}
obj.t = "a"
obj.str.toUpperCase()
console.log(obj.f())

// Косвенный вызов функции
// call apply bind

// Аргументы и параметры функций

// Необязательные параметры и стандартные значения
function f(a, b, arr) {
  //if (arr === undefined) arr = []
  arr = arr || []
  arr.push(a, b)
  return arr
}

let res326 = f(10, 30)
//console.log(res326)

// Параметры остатка и списки аргументов переменной длины

function checkMax(first = -Infinity, ...rest) {
  let maxValue = first
  for (let n of rest) {
    if (n > maxValue) maxValue = n
  }
  let max = rest.filter((i) => i >= maxValue)[0]
  return max
}

let maxValue = [1, 100, 20, 63, 145, 300000, 200, 155, 10054]
let max = checkMax(...maxValue)

console.log(max)

// Операция распространения для вызовов функций

checkMax(...maxValue)
Math.min(...maxValue)

// Деструктуризация аргументов функции в параметры

function dest([a, b], [c, d]) {
  let first = a > b ? a : b
  let second = c > b ? c : d
  let arr = []
  arr.push(first, second)
  return arr
}

let res2648 = dest([10, 32], [45, 65])

//console.log(res2648)

function dest1({ a, b }) {
  let first = a > b ? a : b
  let obj = {}
  obj["a"] = first
  return obj
}

let res22 = dest1({ a: 10, b: 32 }, 10)

//console.log(res22)

function dest2({ a: a1, b }, { c: c1, d: d2 }) {
  a1 += 5
  //console.log(a1, b, "b")
  //console.log(a1, b2)
  //console.log(c1, d2)
}

dest2({ a: 1, b: 2 }, { c: 3, d: 4 })

function dest3([a, b, ...c], d, f) {
  console.log(a, b, c)
  console.log(d, f)
}

dest3([1, 2, 3, 4], 5, 6)

// Типы аргументов

function checkType(arr) {
  for (let a of arr) {
    if (typeof a !== "number")
      throw new TypeError("element in array is not a number")
  }
  return [arr]
}

// Функции как значения
// variable
function someFunction(value) {
  return value
}

const sM = someFunction(10)

console.log(sM)

function square(x) {
  return x + x
}
let s = square
s(4)

//console.log(s(4))

// object values

const objFuncValues = {
  a: s(4),
}

//console.log(objFuncValues.a)

// array element

const arrFuncValues = [10, sM, (x) => x + 10]

//console.log(arrFuncValues[1])
console.log(arrFuncValues[2](arrFuncValues[1]))

// Определение собственных свойств функций

uniqueInteger.counter = 1
uniqueInteger.bool = true
function uniqueInteger() {
  if (uniqueInteger.bool === true) {
    return {
      uniqueInteger: uniqueInteger.counter++,
      boolean: (uniqueInteger.bool = false),
    }
  }
  if (uniqueInteger.bool === false) {
    return {
      uniqueInteger: uniqueInteger.counter++,
      boolean: (uniqueInteger.bool = true),
    }
  }
}
console.log(uniqueInteger().uniqueInteger)
console.log(uniqueInteger().uniqueInteger)
console.log(uniqueInteger().boolean)
console.log(uniqueInteger().boolean)

// with closures

let f = (function uniqueInteger() {
  let bool = true
  return function f() {
    if (bool === true) return (bool = false)
    if (bool === false) return (bool = true)
    return bool
  }
})()

console.log(f())
console.log(f())
console.log(f())

function factorial(n) {
  if (Number.isInteger(n) && n > 0) {
    if (!(n in factorial)) {
      console.log(n, "n")
      factorial[n] = n * factorial(n - 1)
    }
    return factorial[n]
  } else {
    return NaN
  }
}

// closures

let main = (function (arg) {
  let count = 0
  //console.log(arg, "arg")
  return function (arg) {
    count = arg !== undefined ? arg : count
    return count++
  }
})(10)

let a = main()

/* console.log(main())
console.log(main())
console.log(main())
console.log(main(10))
console.log(main(11))
console.log(main(0))
console.log(main())
console.log(main())
console.log(main()) */

let check = "global"
function checkScope() {
  let check = "local"
  function f() {
    return check
  }
  return f()
}

//console.log(checkScope())

function checkScope() {
  let check = "local"
  function f() {
    return check
  }
  return f
}

//console.log(checkScope()())

let f = (function () {
  let count = 0
  return function f() {
    return count++
  }
  //return f()
})()

//console.log(f())
//console.log(f())
//console.log(f())

function counter() {
  let n = 0
  return {
    count: function () {
      return n++
    },
    reset: function () {
      return (n = 0)
    },
  }
}
let c = counter()
//console.log(c.count())

function counter2(n) {
  return {
    get count() {
      return n++
    },
    set count(m) {
      if (m > n) n = m
      else throw Error("счетчик можно устанавливать только в большее значение")
    },
  }
}

let c2 = counter2(10)
c2.count = 100
console.log(c2.count)

// Свойства методы и конструктор функций

// Свойство length

function checkLenght(a, b) {}
console.log(checkLenght.length)

// Свойство name

const func1 = function () {}
const object = { func2: function () {} }

console.log(func1.name)
console.log(object.func2.name)

// function constructor
const functionConstructor = new Function("a", "b", "return a * b") // const myFunction = function (a, b) {return a * b};
let functionConstructor1 = functionConstructor(10, 10)
//console.log(functionConstructor1, "function constructor")

// function hoisting
//console.log("time is " + someFunction(10), "function hoisting")

xxxx = "xxxx"
document.getElementById("x").innerHTML = xxxx

var xxxx
;(function () {
  //console.log("self invoking function")
})()

// let interval = setInterval(function () {
//   t.innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a")
// }, 1000)

// parameters
function myFunction11(x, y) {
  if (y === undefined) {
    y = 2
  }
  return x * y
}
//console.log(myFunction11(10))
const param = (a, b = 100) => a + b
//console.log(param(10))

function factorial(n) {
  let total = 1
  for (let i = 1; i <= n; i++) {
    console.log(i)
    total *= i
  }
  // console.log(this)  global object
  return total
}
//console.log(factorial(5))

function factorial(n) {
  let total = 1
  for (let i = 0; i <= n; i++) {
    total += i
  }
  return total
}
console.log(factorial(5))

function func() {
  let total = 1
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total
}
console.log(func(1, 2, 3, 4, 5))

const arrFunc = (...args) => {
  let total = 1
  args.forEach((i) => (total += i))
  return total
}
console.log(arrFunc(1, 2, 3, 4, 5))

var arr = [1, 2, 3, 5, 2, 8, 9, 2, 2, 5, 5]

countFunc = function (v) {
  var count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === v) {
      count++
    }
  }
  return count
}
// console.log(countFunc(5))

function argumentsFunc() {
  let max = Math.max(arguments.length)
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i]
    }
  }
  return max
}
//console.log(argumentsFunc(10, 100, 1000, 10000, 100000))

// callback

function main(callback) {
  setTimeout(() => {
    console.log("main")
    callback()
  }, 5000)

  //callback()
}

function second() {
  setTimeout(() => {
    console.log("second")
  }, 5000)
}

//main(second)

function funcA(a, b, callback) {
  if (!isNaN(a) && isNaN(b)) {
    return "Not a numbers"
  }
  return callback(a, b)
}

function funcB(a, b) {
  return a + b
}
console.log(funcA(1, 10, funcB))

const ffff = (function () {
  let count = 0
  return function () {
    return ++count
  }
})()

console.log(ffff())

// call bind apply

function product(x, xx, madeIn) {
  this.x = x
  this.xx = xx
  this.madeIn = madeIn

  this.fullNameOfProduct = function () {
    return this.x + " price is " + this.xx + "$" + " and made in " + this.madeIn
  }
}

function iphone(name, price, madeIn) {
  product.call(this, name, price, madeIn)
  this.category = "phone"
}

const product1 = new iphone("samsung", 1000, "china")
//console.log(product1)

const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country
  },
}

function hiWorld() {
  //console.log("hi", this)
}

const person1 = {
  firstName: "John",
  lastName: "Doe",
  t() {
    return this
  },
  tt: this,
}

const person2 = {
  firstName: "Mary",
  lastName: "Doe",
}

//console.log(person.fullName.call(person1, "Chisinau", "MD"))
// console.log(person1.t())

const array11 = [
  { title: "iphone", price: 1000 },
  { title: "samsung", price: 1000 },
]

function printt(i) {
  this.print = function () {
    //console.log(`${i} price for ${this.title} is: ${this.price}`)
  }
  this.print()
}

for (let i = 0; i < array11.length; i++) {
  printt.call(array11[i], i)
}

function sayHi() {
  //console.log("Hi")
}
setTimeout(sayHi(), 2000)
clearTimeout()

function sayHello(a) {
  console.log(a)
}

//setInterval(sayHello('Hello'), 1000);
//clearInterval(sayHello)

function returnAge(year) {
  return 2022 - year
}
//console.log(returnAge(1994))

const retAge = (year = 1994) => {
  if (year >= 2022) {
    console.log("This is a future")
  } else {
    return 2022 - year
  }
}
//console.log(retAge())

const nums = (...nums) => {
  let total = 0
  for (let x of nums) {
    total += x
  }
  return total
}

//console.log(nums(1,2,3,4))

function firstFunc(fname) {
  return function (lname) {
    //console.log(fname + lname)
  }
}
const funct = firstFunc("John")

// console.log(funct('B'))

// console.log(funct('B'))

function math(n) {
  //return Math.round(a);
  //return Math.ceil(a);
  //return Math.max(a);
  return Math.ceil(Math.random() * n)
}

const m = (n) => Math.ceil(Math.random() * n)

//console.log(math(10))
//console.log(m(10))

//function firstFunc(fname) {
//return function(lname) {
//console.log(fname + lname)
//}
//}
const fFunc = firstFunc("John")(" B")
//console.log(fFunc)

function JustAnotherFunction(num) {
  return function (n) {
    //console.log(num + n)
  }
}
const jf = JustAnotherFunction(10)
//console.log(jf(1))

function urlGenerator(url) {
  return function (domain) {
    //console.log(`https//:${domain}.${url}`)
  }
}
const url = urlGenerator("com")

//console.log(url('motorsfy'))
//console.log(url('cartopsales'))

function calculateKg(weight = 190) {
  return weight - 100
}

const personInfo = calculateKg(165)
const personI = function (weight) {
  return weight - 100
}

//console.log(personInfo)
//console.log(personI(185))

const price1 = [10, 20, 30]
const price2 = [10, 20, 30]

function calculate(arr1) {
  let total = 0
  for (let i = 0; i < arr1.length; i++) {
    total += arr1[i]
  }
  //console.log(total)
}

calculate(price1)

let bobo = "bobo"

function b() {
  console.log(bobo)
  bobo = "peter"
  console.log(bobo)
  const peter = "peter"
  globalName = "john"
  function bb() {
    bobo = "didi"
    console.log(bobo)
  }
  bb()
}

//b()

const ten = 10

function someCalculate(a, b) {
  const sCalc = a + b
  function anotherCalculate() {
    //const ten = 10
    const newS = sCalc + ten
    return newS
  }
  //return sCalc
  return anotherCalculate()
}

const res = someCalculate(1, 1)
//console.log(res)

//console.log(globalName)

function charF(source) {
  let frequency = {}
  for (let i = 0; i < source.length; i++) {
    let character = source.charAt(i)
    if (frequency[character]) {
      frequency[character]++
    } else {
      frequency[character] = 1
    }
  }
  return frequency
}

function charF(source) {
  let frequency = {}
  for (let i = 0; i < source.length; i++) {
    let character = source.charAt(i)
    console.log(character)
    frequency[character] = character
  }
  console.log(frequency)
  return frequency
}

charF("afafsffaeee")

let obj = {
  o: 1,
  o: 2,
}

const frequency = {}

frequency.a = "a"
frequency[b] = "b"
//console.log(frequency)

// console.log(charF("aaabbabcbdbabdbdbabababcbcbabf"))

let strChange = "string"
let strChange1 = "new String"

let array1 = [1]
let newArray1 = (array1[0] = 100)
//console.log(array1)

function weekFn(n) {
  var str = ""
  switch (n) {
    case 1:
      str = "Monday"
      break
    case 2:
      str = "Tuesday"
      break
    case 3:
      str = "Wednesday"
      break
    case 4:
      str = "Thursday"
      break
    case 5:
      str = "Friday"
      break
    case 6:
      str = "Saturday"
      break
    case 7:
      str = "Sunday"
      break
    default:
      n = null
  }
  return n
}

console.log(weekFn(1))

const fruits = [
  { name: "apple", price: 100, mag: "california" },
  { name: "apple", price: 200 },
  { name: "orange", price: 200 },
  { name: "grapes", price: 300, mag: "california" },
  { name: "apple", price: 100 },
]

const hasFruitDuplicated = () => {
  const duplicatedDeleteFruits = fruits.filter(
    (fruit1, index1) =>
      fruits.findIndex(
        (item) => item.name === fruit1.name && "mag" in fruit1
      ) === index1
  )
  return duplicatedDeleteFruits
}

console.log(hasFruitDuplicated())
