let fname, lname
const v = "variable"
let vv = "new variable"
fname = "john"
lname = "b"
//v = vv  TypeError: Assignment to constant variable.

//console.log(v)

let obj = {
  obj: 1,
  obj2: 2,
}
let obj2 = {}

let arr = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < arr.length; i++) {
  /* console.log(arr[i]) */
}

for (const i in obj) {
  // console.log(`${i}: ${obj[i]}`)
}

for (const i of arr) {
  // console.log(i)
}

let x = 0
let x4
if (x === 0) {
  let x = 1 // only inside this `if`
  var x2 = 1
  x3 = "x3"
  console.log(x)
}
x = 10
var x2 = "x2"
// var x3
x4 = "x4"
console.log(x)
console.log(x2)
console.log(x3)
console.log(x4)
