// Публичные поля классов https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/Public_class_fields#syntax
// Приватные поля класса https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/Private_class_fields

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  distance() {
    return Math.sqrt(this.x * this.y + this.y * this.y)
  }
}

let point = new Point(10, 15)
//console.log(point.distance())

// Классы

// Классы и прототипы

// Статические методы
// определяются как свойства функции конструктора, а не свойства объекта прототипа.

class Car {
  constructor(name) {
    this.name = name
  }
  hello() {
    return "Hello!! " + this.name
  }

  static hi() {
    return 10 * 10
  }
}

let myCar = new Car("Ford")
let res = myCar.hello()

// Методы получения, установки и других видов

class ClassWithGetSet {
  #msg = "hello world"
  get msg() {
    return this.#msg
  }
  set msg(x) {
    this.#msg = `hello ${x}`
  }
}

const instance = new ClassWithGetSet()
console.log(instance.msg)
// Ожидаемый вывод: "hello worl​d"

instance.msg = "cake"
console.log(instance.msg)
// Ожидаемый вывод: "hello cake"

// Открытые, закрытые и статические поля

// Если вы добавите static перед объявлениями
// открытых или закрытых полей, то такие поля будут создаваться как
// свойства функции конструктора, а не свойства экземпляров.

class Dadd {
  static staticField = "static field dadd"
  static statifField10 = this.staticField
  age = 25

  r() {
    return this.age
  }
}

const dadd = new Dadd()

console.log(dadd.r())
console.log(Dadd.staticField)

class Son extends Dadd {
  static staticField2 = "static field son"
}

//console.log(Son.r)

//console.log(Son.staticField2)
//console.log(Son.statifField10)

class Person {
  #id = "div"
  p = document.getElementById(this.#id)
  mySelect = document.getElementById("mySelect")

  select() {
    return console.log(this.mySelect.value)
  }

  clg = clg

  bgColor() {
    this.p.style.backgroundColor = "red"
    this.p.style.width = "max-content"
  }

  clog() {
    this.clg("hi")
  }

  events() {
    //this.p.addEventListener('mouseover', this.bgColor()),
    this.p.addEventListener("mouseover", this.bgColor.bind(this))
    this.p.addEventListener("mouseleave", (event) => {
      document.getElementById("div").style.backgroundColor = "white"
    })
    this.mySelect.addEventListener("change", this.select.bind(this))
    this.clog()
  }
}

const person = new Person(clg)

person.events()

function clg(arg) {
  setTimeout(() => {
    console.log(arg)
  }, 3000)
}
