//const num = 10
//const float = 10.5

// console.log(num, float)

//document.getElementById('demo').innerHTML = minMax(1,10)

//const age = Number('s')
//console.log(Number.isFinite(1,'s')) // 1, 's' false
//console.log(Number.isInteger((1, 's'))) // 1 true
//console.log(Number.isSafeInteger(99.5)) // 99.5 false
//console.log(Number.isNaN('hi'))

let nummm = "1"
//console.log(typeof nummm)
let n3 = Number(nummm)
//console.log(typeof n3)

let afds = 1
let adfsn = afds.toString()
//console.log(typeof adfsn)

let num1 = 10.3
// console.log(typeof num1)
let num11 = parseInt(num1)
// console.log(num11)
// console.log(typeof num11, num11)

let num2 = 10
//console.log(typeof num1)
let num22 = parseFloat(num2)
// console.log(num22)
//console.log(typeof num22, num22)

let nummmm = 1000000
//console.log(nummmm.toLocaleString())

let numm = 555011.56789
// console.log(numm.toFixed(2))

let nummm3 = 1333.3714
//console.log(nummm3.toPrecision(5))

const form = document
  .querySelector(".form")
  .addEventListener("submit", function (e) {
    e.preventDefault()
    let inputValue
    let value = document.getElementById("input-number").value
    if (isNaN(value)) {
      inputValue = "Value is not a Number"
    } else if (!isNaN(value)) {
      inputValue = Number(document.getElementById("input-number").value)
      inputValue += 10
    }
    //console.log(inputValue)
  })
