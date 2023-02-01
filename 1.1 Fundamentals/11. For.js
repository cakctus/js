const myCars = ["BMW", "Mercedes", "Fiat", "Audi"]
console.log(myCars.length - 1)
console.log(myCars[myCars.length - 1])

let i1,
  j1,
  sum = 0
for (i1 = 0, j1 = 10; i < 10; i1++, j1--) {
  sum = i * j1
  //console.log(sum)
}

function tail(o) {
  for (; o.next1; o = o.next1) console.log(o)
  return o
}

const o = {
  next: "ss",
  next1: "ss1",
}

let resp = tail(o)
console.log(resp)

for (let i = myCars.length - 1; i >= 0; i--) {
  //console.log(myCars[i])
}

for (let i = 10; i >= 0; i--) {
  //console.log(i)
}

const person = { fname: "John", lname: "Doe", age: 25 }
const someNum = [10, 50, 30, 70, 60]

for (let i = 0; i < myCars.length; i++) {
  if (myCars[i] === "BMW") {
    continue
  }
  //console.log(myCars[i])
}

for (let x of Object.keys(person)) {
  console.log(x)
}

for (let y in someNum) {
  console.log(y)
}
for (let x of someNum) {
  console.log(x)
}

for (let z of someNum) {
  //console.log(z)
}

let str = "asdgsaggdasddd"

for (let i = 0; i <= str.length; i += 3) {
  console.log(str[i])
}

let amount = 10
let i = 0
while (i < amount) {
  //console.log(i)
  if (i === 5) {
    break
  }
  i++
}

while (amount > 0) {
  //console.log(amount)
  amount--
}

function c(n) {
  let len = n.length,
    i = 0
  if (len === 0) {
    console.log("пустой массив")
  } else {
    do {
      console.log(n[i])
    } while (i++ < len)
  }
}

c([0, 1, 2, 3, 4, 5])
