function evenFn(n) {
  // console.log(evenFn.arguments[0])
  var arr = []
  for (var i = 1; i < n; i++) {
    //console.log(++i)
    arr.push(++i)
  }
  return arr
}

//console.log(evenFn(10))

function addFn(arg) {
  let n = 1

  while (n < arg) {
    let res = (n = n + 2) - 2
    console.log(res)
  }
}

// oddFn(10) → [1, 3, 5, 7, 9]
// oddFn(15) → [1, 3, 5, 7, 9, 11, 13, 15]
// oddFn(20) → [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

addFn(15)

let myArr = [1, 2, 3, 4, 5]
for (var i = 0; i < 20; i += 3) {
  console.log(i)
}

function mainFunc(a, b, func) {
  if (typeof func !== "function") {
    return false
  }
  return func(a, b)
}

function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function cbPow(num, pow) {
  return Math.pow(num, pow)
}

function cbAdd(a, b) {
  return a + b
}

// console.log(mainFunc(1, 10, cbRandom))
// console.log(mainFunc(1, 10, cbPow))
// console.log(mainFunc(1, 10, cbAdd))
