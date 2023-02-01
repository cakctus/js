// JavaScript Arithmetic Operators

let c = 10
//console.log(c + c)
//console.log(c - 2)
//console.log(c * 2)
//console.log(c / 2)
//console.log(c ** 3)
// let a = 10;
// const b = a++;
//console.log(`${a}`);

// JavaScript Assignment Operators

let i = 5
// i += 1;
// i -= 1;
// i *= 1;
// i /= 1;
// i **= 3;
// i++
//console.log(i)

// JavaScript Comparison Operators

//var age = 20;
//console.log(age == '20')   true
//console.log(age != '20')   false
//console.log(age === '20')  false
//console.log(age !== '20')  true

//console.log("11" < "1") // string
//console.log("11" > 1) // number
// console.log("num" < 1) // num convert NaN
//console.log(age > 20)      false
//console.log(age >= 20)     true
//console.log(age < 20)      false
//console.log(age <= 20)     true

// Increment & decrement
let a = 3
const incrimentA = x++

// Logical Operators
var x = 10
var y = 5
//console.log(x > 9 && y < 6)  true // logical and
//console.log(x > 15 || y < 6) true  logical or
//console.log(!(x !== 5))      false // logical not

//console.log(true === true && false === false)
//console.log(obj.d && obj.c)
//console.log(obj.d || obj.c || obj.q)
//console.log(!(obj.d === false) && (obj.c === "c"))

// JavaScript String Operators

let firstName = "Lara "
let secondName = "F"
let fullName = firstName + secondName
//console.log(fullName)

//let age = Number(age);
//age = 10;
//console.log(age)

function checkAge() {
  let ageVotable = 18
  let age = document.getElementById("age").value
  if (isNaN(age)) {
    document.getElementById("inner").innerHTML = "input is not integer"
  } else if (age >= 18) {
    document.getElementById("inner").innerHTML = "can vote"
  } else {
    document.getElementById("inner").innerHTML = "can not vote"
  }
}

// ternary operator

// const text = "text";
// text ? console.log("true") : console.log("false");

// Bitwise AND

let num = 9

let result = num > 10 && "result"

// console.log(result)

// 0 & 0	 // result 0
// 0 & 1	 // result 0
// 1 & 0	 // result 0
// 1 & 1	 // result 1

// Bitwise OR

// 0 ^ 0	// result 0
// 0 ^ 1	// result 1
// 1 ^ 0	// result 1
// 1 ^ 1	// result 0

// Nullish coalescing operator

let n = null
const foo = n ?? "default string"
console.log(foo)
// expected output: "default string"

const baz = undefined ?? 42
console.log(baz)
// expected output: 0

// expression

const arr = [null, 2 + 2, (a = "b"), (c = "d"), [0, 1, 2, 3, 4, 5]]
console.log(arr?.[0])
const array = [, , , , 0]

const obj = { x: 1, y: null, d: { d: "d" } }
console.log(obj?.y)

/* console.log(obj.x)
console.log(obj["x"])
console.log(obj.q)

console.log(obj?.y)
console.log(obj?.["q"])
console.log(obj?.d?.d)
 */
//console.log(arr[2])
//console.log(arr.length)

//console.log(arr[4][4])

let f = null,
  x = 0

try {
  f[x]++
  console.log(f[0], "try")
} catch (e) {
  x
  console.log(e.message, x)
}

console.log(f?.[x++], "?.")

console.log(f, x, "original")

// delete

const arr11 = [1, 2, 3, 4, 5, 6, 7, 8]

const obj11 = {
  a: "a",
  b: "b",
}

/* delete arr11[0]
console.log(arr11)
console.log(arr11[0])
console.log(delete arr11[0]) */

delete obj11["a"]
console.log(obj11)
console.log(obj11["a"])

// void

let counter = 10

const func = () => void counter++

console.log(func())
console.log(counter)
console.log(counter)

let aaa = 10,
  bbb = 100,
  ccc = 1000

console.log(aaa)
console.log(bbb)
console.log(ccc)

for (let i = 0, j = 10; i < j; i++, j--) {
  //console.log(i+j)
}

function* range(from, to) {
  /* for(let i = from; i < to; i++) {
	  yield i;
	  } */
  yield "Hi"
  yield "John"
}

let rang = range(10, 100)

//console.log([...range(10,100)])
console.log([...range()].join(" "))
