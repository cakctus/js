const func = function (arg1) {
  //   setTimeout(() => {
  //     console.log(this)
  //   }, 2000)
  return `my name is ${this.name}${arg1}`
}

const person = {
  get fullName1() {
    return this.a
  },
  set some(num) {
    this.b =
      num === 1
        ? num > 2
          ? num > 3
            ? num > 4
              ? num > 5
                ? num > 6
                  ? num > 7
                    ? null
                    : "7"
                  : "6"
                : "5"
              : "4"
            : "3"
          : "2"
        : "1"
  },
  fullName2() {
    return this.name
  },
  a: "value from get",
  b: "",
  func,
}
person.some = "Parker"
person.some = 1
console.log(person.b)

const obj = {
  name: "Peter",
  func,
}
const obj2 = {
  name: "Obj 2",
}

console.log(obj.func(obj.name))

console.log(func.call(obj, "!"))
console.log(func.apply(obj, ["!"]))

const bindFunc = func.bind(obj, "!")
bindFunc("!")
console.log(bindFunc())

console.log(person.func.call(obj2, "!"))

console.log(person.fullName1)
console.log(person.fullName2.call(obj))
console.log(person.fullName2())
console.log(person.b)
