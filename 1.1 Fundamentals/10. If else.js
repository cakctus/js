const hour = new Date()

if (hour.getHours() >= 12) {
  //console.log('its day')
} else if (hour.getHours() >= 18) {
  //console.log('its evening')
} else if (hour.getHours() >= 21) {
  //console.log('its night')
} else {
  //console.log('its morning')
}

switch (new Date().getDay()) {
  default:
    day = "Sorry, no data "
  case 0:
    day = "Sunday"
    break
  case 1:
    day = "Monday"
    break
  case 2:
    day = "Tuesday"
    break
  case 3:
    day = "Wednesday"
    break
  case 4:
    day = "Thursday"
    break
  case 5:
    day = "Friday"
    break
  case 6:
    day = "Saturday"
}

//console.log(day)

let username
let msg

if (!username) {
  username = "default"
}

if (!username) {
  username = "default 2 "
  msg = "some message"
}

if (!username) username = "default 3" // false null undefined "" 0 -0 NaN

// console.log(username)

let a = 10,
  b = 10,
  c = 10
if (a === b) {
  if (b === c) {
    console.log("a === b && b === a")
  } else {
    console.log("a === b && b !== c")
  }
} else {
  console.log("default else")
}

if (a === b) {
  console.log("a === b && b === a")
} else if (b === c) {
  console.log("b === a")
} else if (c === 10) {
  console.log("c === 10")
}

let num = 100

switch (num) {
  case 10:
    console.log(`num is ${num}`)
    break
  case 100:
    console.log(`num is ${num}`)
    break
  default:
    console.log("no num")
    break
}

function checkValue(value) {
  switch (typeof value) {
    case "number":
      return value.toString() + " number converted in string"
    case "string":
      return value
    default:
      break
  }
}

console.log(checkValue(10))
