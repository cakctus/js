const letters = new Set(["a", "b", "c", "a", "1", [1, 2, 3, 4], 1, 1, 7])
letters.add(8)
console.log(letters.has(1))
console.log(letters)

letters.values()
letters.delete("b")

for (let l of letters) {
  //console.log(l)
}

const letters2 = new Set(["a", "b", "c"])

//const e = letters.forEach(e => console.log(e))

for (let e of letters.values()) {
  //sconsole.log(e)
}
for (let e of letters.keys()) {
  //console.log(e)
}
for (let e of letters.entries()) {
  //console.log(e)
}

const set = new Set()

const obj = {
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  a: "a1",
}

set.add(obj)
for (let e of set.entries()) {
  //console.log(e)
}

const newSet = new Set()

const arr = [
  { a: "a", b: "a" },
  { b: "b" },
  { c: "c" },
  { d: "d" },
  { a: "a", e: "e" },
]

arr.forEach((e) => {
  newSet.add(e)
})

for (let e of newSet.entries()) {
  console.log(e)
}

const uniqueKeys = new Set()
const obj1 = {
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  a: "a1",
  a: "a2",
}

//console.log(Object.values(obj1))

for (let e of Object.values(obj1)) {
  uniqueKeys.add(e)
}

//uniqueKeys.forEach(e => console.log(e))

//console.log(letters.size)

const fruitsMap = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
])

//console.log(fruitsMap.get('applecore'))
fruitsMap.set("applecore", [1, 2, 3, 4, 5])
//fruitsMap.delete('apples')
//console.log(fruitsMap.has('applecore'))

fruitsMap.set("arr", [1, 2, 3, 4, 5])
fruitsMap.set("obj", { a: "C" })
fruitsMap.set("bool", true)

console.log(fruitsMap.get("arr"))
console.log(fruitsMap.get("obj"))
console.log(fruitsMap.get("bool"))

fruitsMap.delete("apples")

console.log(fruitsMap.has("applecore"))

const mapKeys = [...fruitsMap.keys()]
const mapValues = [...fruitsMap.values()]
console.log(mapKeys)
console.log(mapValues)

for (let l of fruitsMap) {
  //console.log(l)
}
