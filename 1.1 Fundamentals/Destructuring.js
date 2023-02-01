let arr11 = [1, 2, 3, 4]

console.log(...arr11)

let a, b, c
;[a, b, ...c] = [10, 20, 30, 40, 50, 60, 70]

console.log(c)

let [a1, [b1, c1], d1] = [10, [10, 10], 30]

console.log(a1, b1, c1, d1)

let [first, ...last] = "JavaScript"
console.log(first, last)

let tr = {
  status: "Status",
  from: "HTTPS",
  notFound: 404,
  get: "get",
  post: "post",
  put: "post",
}
let { status, from, notFound, ...all } = tr

console.log(all)

const obj1 = {
  first: 1,
  id: 1,
}

const obj2 = {
  second: 2,
  id: 2,
}

console.log({ ...obj1, ...obj2 })

const arr111 = [1, 2, 3]
const arr222 = [1, 2, 3]

console.log(...arr111, ...arr222)

function myFunc(aa, bb) {
  return [15 * 15, bb * bb]
}

let [aa, bb] = myFunc(15, 20)
console.log(aa + bb)

let obj = {
  aaa: 1,
  bbb: 2,
}

let { aaa, bbb } = obj
console.log(bbb)

let arr = [
  ["a", "b", "c"],
  ["d", "f", "g"],
  ["e", "l", "m"],
]

let [arr1, arr2, arr3] = arr
console.log(arr1)

for (let [a, b, c] of arr) {
  console.log(`${a} ${b} ${c}`)
}

let obj3 = [
  { a: 100, b: 200 },
  { a: 300, b: 400 },
]
let [{ a: a10, b: b2 }, { a: a3, b: b4 }] = obj3
// console.log(a10, b2, a3, b4)

let obj4 = {
  a: [100, 200],
  b: [300, 400],
}
let {
  a: [a100, a200],
  b: [a300, a400],
} = obj4
// console.log(a100, a200, a300, a400)

for (let { a, b } of obj3) {
  console.log(a, b)
}

// console.log(Object.values(obj4))
for (let [a, b] of Object.entries(obj4)) {
  console.log(a, b)
}

console.log(a10)

const { sin, cos, random, abs } = Math

// console.log(random() * 10)
console.log(abs(-10))

const [a101, b101, e101, ...[c101, d101, d102, d103, ...[f101, g101]]] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
]
console.log(a101, b101, e101, c101, d101, f101, g101)

let obj10 = {
  key: "value1",
  key2: "value2",
}

let { key: vv, key2: v } = obj10

console.log(vv)

const o = { p: 42, q: true }
const { p: foo, q: bar } = o

function m({ a }, { b }) {
  console.log(a, b)
}

m({ a: 1 }, { b: 2 })
