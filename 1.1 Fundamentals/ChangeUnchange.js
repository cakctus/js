let a = [0, 1, 2, 3, 4, 5, 6]
let b = []

b = a
b[0] = 10

let e = Array.from(b)
let f = []

for (let i = 0; i < b.length; i++) {
  f[i] = b[i]
}

let c = []
let d = []

console.log(a)
console.log(b)
console.log(e === f)
console.log(f)
console.log(b === a)

let obj = {
  obj: 1,
  obj2: 2,
}
let obj2 = {}

/* console.log(Boolean(obj)) */
/* console.log(Number(obj)) */
/* console.log(String(obj)) */

console.log(Number([10, 10]))
