const ex1 = 1 + "10"
console.log(typeof ex1 + ",", ex1)

const ex2 = "2" - "10"
console.log(typeof ex2 + ",", ex2)

const ex3 = "2" * "10"
console.log(typeof ex3 + ",", ex3)

const ex4 = "10" / "2"
console.log(typeof ex4 + ",", ex4)

const ex5 = "2" ** "10"
console.log(typeof ex5 + ",", ex5)

console.log("---")

console.log(null == undefined)
console.log("0" == 0)

console.log("---")

console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(1))

console.log(String(false))
console.log(String(1))

console.log(Number("10"))

console.log("---")

console.log(!!5)
console.log(12345 + "asdsad" + "")
console.log(+"1161 ")
console.log(+true)

console.log("---")

// let numm1 = 555011.56789
// console.log(numm1.toFixed(2))

// let nummm31 = 1333.3714
// console.log(nummm31.toPrecision(5))

let num111 = "10.3px"
let num1111 = parseInt(num111)
console.log(typeof num1111, num1111)

let num221 = "10.1rem"
let num2211 = parseFloat(num221)
console.log(typeof num2211, num2211)

let arrTrue = []

let objTrue = {}

let funcTrue = function () {}

console.log(Boolean(arrTrue))
console.log(Boolean(objTrue))
console.log(Boolean(funcTrue))
