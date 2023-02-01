const obj = {
  age: 28,
  name: "J",
}

const i = "constructor" in obj
const un = obj.s !== undefined

// console.log(Object.hasOwn(obj, "age"))
// console.log(obj.hasOwnProperty("name"))
// console.log(Object.getOwnPropertyNames(obj))
// console.log(Object.getOwnPropertyDescriptor(obj, "age").writable)
// console.log(Object.isExtensible(obj))

obj.city = "Calgary"

Object.preventExtensions(obj)
obj.city1 = "Odessa"
obj.age = 29

console.log(obj)
