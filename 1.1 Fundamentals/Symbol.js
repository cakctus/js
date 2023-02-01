const symb = Symbol("optional description")
const sym1 = Symbol()
const sym2 = Symbol("foo")
const sym3 = Symbol("foo")

let obj = {
  key1: 1,
  key2: 2,
  key3: 3,
  symb: symb,
  key4: 4,
}

obj["key4"] = 4

console.log(symb)

console.log(obj)

for (let i in obj) {
  console.log(i, obj[i])
}
