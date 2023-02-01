//const newDate = new Date(year)
const newDate = new Date()

const options = {
  era: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  timeZone: "UTC",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}

const options1 = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}

console.log(newDate.toLocaleString("md", options))

console.log(newDate.toLocaleString())
console.log(newDate.toLocaleDateString())
console.log(newDate.toLocaleTimeString())

console.log(newDate.toString())
console.log(newDate.toUTCString())
console.log(newDate.toDateString())
console.log(newDate.toISOString())

/* 
Get
console.log(newDate.getFullYear(), 'getFullYear()')
console.log(newDate.getMonth() + 1, 'getMonth')
console.log(newDate.getDate(), 'getDate')
console.log(newDate.getHours(), 'getHours')
console.log(newDate.getMinutes(), 'getMinutes')
console.log(newDate.getSeconds(), 'getSeconds')
console.log(newDate.getMilliseconds(), 'getMilliseconds')
console.log(newDate.getDay(), 'getDay')
console.log(newDate.getTime(), 'getTime()')
console.log(Date.now(), 'Date.now')

Set
console.log(newDate.setDate(2022), 'setDate()')
console.log(newDate.setFullYear(2022) + 1, 'setFullYear')
console.log(newDate.setHours(), 'setHours')
console.log(newDate.setMilliseconds(), 'setMilliseconds')
console.log(newDate.setMinutes(), 'setMinutes')
console.log(newDate.setMonth(), 'setMonth')
console.log(newDate.setSeconds(), 'setSeconds')
console.log(newDate.setTime(), 'getDay')
*/

// Отметки времени

const d2 = new Date()
//d2.setMonth(d2.getMonth() + 2);
//d2.setDate(d2.getDate() + 365);
d2.setHours(d2.getHours() + 3)
document.getElementById("demo2").innerHTML = d2.toLocaleString("ro")

// Арифметические действия с датами

let d = new Date()
let dd = new Date()
d.setMonth(d.getMonth() + 3, d.getDate() + 14)
console.log(d.toLocaleString() + "---" + dd.toLocaleString())
console.log(d.getDate() > dd.getDate())
