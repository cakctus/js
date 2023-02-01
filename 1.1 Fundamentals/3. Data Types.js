let num = 10.5 // Number
let str = "some text" // String
let xx = 10.5 // (xx == num) Boolean
let mars // undefined
//console.log(typeof(mars))

typeof "John" // Returns "string"
typeof 3.14 // Returns "number"
typeof NaN // Returns "number"
typeof false // Returns "boolean"
typeof undefined // return undefidn
typeof null // return null
typeof [1, 2, 3, 4] // Returns "object"
typeof { name: "John", age: 34 } // Returns "object"
typeof new Date() / // Returns "object"
  typeof function () {} // Returns "function"

function checkNull(number) {
  if (number == null) {
    //console.log('number is null')
  } else {
    //console.log(`number is ${number}`)
  }
}

checkNull(5)
