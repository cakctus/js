{
  /* <div>
  <div> 
    <p id="div">click me</p>
  <div/>
  <form>
   <select id="mySelect">
    <option value="Audi">Audi</option>
    <option value="BMW">BMW</option>
    <option value="Mercedes">Mercedes</option>
    <option value="Volvo">Volvo</option>
  </select>
</form>
<p id="value"></p>
</div> */
}

// Открытые, закрытые и статические поля

// Если вы добавите static перед объявлениями
// открытых или закрытых полей, то такие поля будут создаваться как
// свойства функции конструктора, а не свойства экземпляров.

class Person {
  #id = "div"
  p = document.getElementById(this.#id)
  mySelect = document.getElementById("mySelect")

  select() {
    //console.log(this.mySelect.value)
    return this.mySelect.value
  }

  mySelectMethod() {
    return this.mySelect
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
    this.p.addEventListener("mouseenter", this.bgColor.bind(this))
    this.p.addEventListener("mouseleave", (event) => {
      document.getElementById("div").style.backgroundColor = "white"
    })
    //this.mySelect.addEventListener("change", this.select.bind(this))
    this.clog()
  }
}

function clg(arg) {
  setTimeout(() => {
    console.log(arg)
  }, 3000)
}

//const person = new Person(clg)

//person.events()

class Value extends Person {
  value = document.getElementById("mySelect")
  i = document.getElementById("value")

  cLog() {
    this.i.innerHTML = super.select()
  }

  events() {
    super.events()
    this.cLog()
    super.mySelectMethod().addEventListener("change", this.cLog.bind(this))
  }
}

const value = new Value()

value.events()

class newMethods extends Array {
  get first() {
    return this[0]
  }
  get last() {
    return this[this.length - 1]
  }
}

let a = new newMethods()

a.push(1, 2, 3, 4, 5, 6, 7)

console.log(a.first)
console.log(a.last)
console.log(Array.prototype.isPrototypeOf(newMethods.prototype))
