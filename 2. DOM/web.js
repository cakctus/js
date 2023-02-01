// Код JavaScript в HTML-дескрипторах <script>

// <script defer src="main.js"/script>

// <script sync src="main.js"/script>

function createScript(url) {
  return new Promise((resolve, reject) => {
    let script = documnet.createElement("script")

    script.onload = () => resolve()

    script.onerror = () => reject()

    script.src = url

    document.head.append(script)
  })
}

// -----------------------------------

// Объектная модель документа

// HTML DOM API
// https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API

const myImage = new Image(100, 200)
myImage.src = "picture.jpg" // => <img width="100" height="200" src="picture.jpg" />
document.body.appendChild(myImage)

// Глобальный объект в веб-браузерах

// window.innherHTML => innerHTML

// -------------------------------

// Выполнение программ JavaScript

// В число первых событий,, входят события DOMContentLoaded и load . Событие DOMContentLoaded
// инициируется, когда HTML-документ был полностью загружен и синтаксически
// проанализирован. Событие load инициируется, когда все внешние ресурсы
// документа, такие как изображения, также полностью загружены.

// Ввод и вывод программы

// События

// Тип события
// Обработчик событий
// Объект события

// Категории событий

// Зависимые от устройства события ввода

// Mouse Event
// onclick ondblclick
// onmouseup onmousedown
// onmouseover onmouseenter
// onmouseout onmouseleave
// onmousemove
// clientX pageX screenX offsetX

// Независимые от устройства события ввода

// Pointer Event
// pointerover pointerenter
// pointerleave pointerout
// pointerup onpointerdown
// pointermove

// Input Event
// oninput

// Keyboard Event
// onkeydown onkeyup
// onkeypress
// event.altKey event.ctrlKey
// event.key event.code
// event.getModifierState("CapsLock")

// Window: popstate event

// События пользовательского интерфейса

// onblur onfocus
// onfocusin onfocusout

// События изменения состояния

// DOMContentLoaded onload
// online offline
// beforeunloade https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
// beforeunload exemple https://jsfiddle.net/cakctus/qzyjte84/63/
// pageshow
// pagehide
// visibilitychange https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event
// page visibility api https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API

// Регистрация обработчиков событий

let b = document.querySelector("#mybutton")
b.onclick = function () {
  console.log("Thanks for clicking")
}
b.addEventListener("click ", () => {
  console.log("Thanks again !")
})

document.removeEventListener("mousemove", handleMouseMov)
document.removeEventListener("mouseup", handleMouseUp)

// Вызов обработчиков событий

// Аргумент обработчика событий
// type Тип события
// target
// currentTarget
// timestamp

// Распространение событий
// исключения — события "focus", "blur" и "scroll"

// Отмена событий
// preventDefault()
// stopPropagatin() stopImmediatePropagation()

// Специальные событие

const loading = new CustomEvent("loading", { detail: true })

const fetchUsers = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await data.json()
  if (data.status === 200) document.dispatchEvent(loading)
  else document.dispatchEvent(new CustomEvent("loading", { detail: false }))

  return users
}

fetchUsers()
  .then((response) => response)
  .catch((error) => error)
  .finally(() => {
    //document.dispatchEvent(new CustomEvent("loading", { detail: false }));
  })

document.addEventListener("loading", (e) => {
  if (e.detail) {
    console.log("Content loaded")
  } else console.log("Content is loading...")
})

// Работа с документами в сценариях

// Выбор элементов с использованием селекторов CSS
// querySelector() и querySelectorAll ()

// Предварительно выбранные элементы

// <img> <form> <a href="#">

// <form id=address"> => document.forms.address

// Структура и обход документа

// parentNode children  childElementCount firstElementChild lastElementChild nextElementSibling previosElementSibling
// parentNode childNodes firstChild lastCHilst nextSibling, previosSibling, nodeType nodeValue nodeName

// Атрибуты

// getAttribute() setAttribute(), hasAttribute() и removeAttribute()

let f = document.querySelector("form") // Первый элемент <form>
f.action = "https://www.example.com/submit" //Установить URL для отправки
f.method = "POST" // Установить тип HTTP-запроса

// reserved words
// htmlFor => for in label
// className => css class
// defaultChecked => check input checkbox

// classList
// let spinner = document.querySelector("#spinner")
// spinner.classList.remove("hidden")
// spinner.classList.remove("show")

// dataSet
// HTML
// <h2 id="title" data-section-number="16.l">Attributes</h2>
// JS
// let number = document.querySelector("#title").dataset.sectionNumber

// Содержимое элементов

const element = document.getElementsByTagName("h2")[0]
element.innerHTML = "<h3>You changed me and my content!</h3>"

const element2 = document.getElementsByTagName("h2")[1]
element2.outerHTML = "<h3>You changed me and my content!</h3>"

const element3 = document.querySelector("#id")
let text = element3.textContent

// Создание, вставка и удаление узлов

// append prepend before after remove

const div = document.querySelector("div")

const p = document.createElement("p")
const text11 = document.createTextNode("Text")

p.append(text11)
div.append(p)

const p1 = document.createElement("p")
const text1 = document.createTextNode("Text 2")

p1.append(text1)
div.append(p1)

const p2 = document.createElement("p")
const text2 = document.createTextNode("Text 3")

p2.append(text2)
div.prepend(p2)

const p3 = document.createElement("p")
const text3 = document.createTextNode("Text 4")

p3.append(text3)
text2.before(p3) // after

p.remove()

// Работа с CSS в сценариях

// document.querySelector("#tooltip").classList.add("hidden") add
// document.querySelector("#tooltip").classList.remove("hidden") remove

// Встроенные стили

function displayAt(tooltip, х, у) {
  tooltip.style.display = "block"
  tooltip.style.position = "absolute"
  tooltip.style.left = `${x}px`
  tooltip.style.top = `${y}px`
}

// е.style.display = "block"
// е.style.fontFamily = "sans-serif"
// e.style.backgroundColor = "#ffffff"

// e. style.margin = `${top}px ${right}px ${bottom}px ${left}px` // margin-top margin-left

// f.setAttribute("style", e.getAttribute("style"))
// f.style.cssText = e.style.cssText

// Работа с таблицами стилей в сценариях

let link = document.createElement("link")
link.rel = "stylesheet"
link.href = "style.css"
link.id = "light"
document.head.append(link)

function setLink(theme) {
  if (theme === "light") {
    link.href = `${theme}.css`
    link.id = theme
  }
  if (theme === "dark") {
    link.href = `${theme}.css`
    link.id = theme
  }

  console.log(theme)
}

setLink()

function toggleTheme() {
  const light = document.querySelector("#light")
  const dark = document.querySelector("#dark")

  if (light) {
    setLink("dark")
    dark.disabled = true
    light.disabled = false
  } else {
    setLink("light")
    dark.disabled = false
    light.disabled = true
  }
}

const button = document.querySelector("#toggleButton")

button.addEventListener("click", toggleTheme)

// Анимация и события CSS
// TransitionEvent AnimationEvent

document.querySelector("#subscribe").classList.add("transparent")
document
  .getElementById("subscribe")
  .addEventListener("transitionrun", myFunction1)
document
  .getElementById("subscribe")
  .addEventListener("transitionstart", myFunction2)
document
  .getElementById("subscribe")
  .addEventListener("transitionend", myFunction3)
function myFunction1(event) {
  const doc = document.getElementById("1")
  doc.innerHTML = "CSS Property used: " + event.propertyName
}
function myFunction2(event) {
  const doc = document.getElementById("2")
  doc.innerHTML = "Transition lasted: " + event.elapsedTime + " seconds"
}
function myFunction3(event) {
  const doc = document.getElementById("3")
  doc.innerHTML = "<h2>Transition end</h2>"
}

// Запрашивание геометрии элемента

// getBoundingClientRect
// elementFromPoint
document.getElementById("para1").addEventListener("click", changeColor)
document.getElementById("para1").addEventListener("click", clientRect)
function changeColor(e) {
  const element = document.elementFromPoint(e.clientX, e.clientY)
  console.log(element)
  element.style.color = "red"
}
function clientRect(e) {
  const element = e.target.getBoundingClientRect()
  console.log(element)
}

// Прокрутка

function move() {
  console.log("s")
  const p = document.getElementById("p")
  const y = p.getBoundingClientRect()
  window.scrollTo(0, y.y)
  console.log(y.y)
}

function move2() {
  const p = document.getElementById("p")
  p.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
}

function scrolls() {
  let documentHeight = document.documentElement.offsetHeight
  let viewportHeight = window.innerHeight
  window.scrollTo({
    left: 0,
    top: documentHeight - viewportHeight,
    behavior: "smooth",
  })
}

// Web audio api

// https://codepen.io/cakctus/pen/poVMyxE?editors=0010
// https://codepen.io/cakctus/pen/mdLNErb?editors=0011

// location

// https://www.w3schools.com/js/js_window_location.asp

// History

// https://developer.mozilla.org/en-US/docs/Web/API/History

// exemple with history.push() https://jsfiddle.net/cakctus/6snmka8v/92/

// Взаимодействие с сетью

// exemple with drag and drop https://codepen.io/cakctus/pen/xxzKmZB
// exemple with progress bar https://codepen.io/cakctus/pen/xxzxYzE?editors=1010

// fetch() https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// Request https://developer.mozilla.org/en-US/docs/Web/API/Response

// Headers https://developer.mozilla.org/en-US/docs/Web/API/Headers

// HTTP https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication

const headers = new Headers()
const urls = "https://jsonplaceholder.typicode.com/users"
var user = "user"
var password = "password"
const base64encodedData = Buffer.from(user + ":" + password).toString("base64")
headers.set(`Authorization ${base64encodedData}`)

fetch(urls, {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Basic " + base64encodedData,
  },
})
  .then((response) => console.log(response))
  .then((data) => console.log(data))

// abort Controller

let controller
const url = "../../../../../assets/video/data.mp3"

function abort() {
  if (controller) {
    controller.abort()
    console.log("Download aborted")
  }
}

// function fetchVideo() {
//   console.log("s")
//   controller = new AbortController()
//   const signal = controller.signal
//   fetch(url, { signal })
//     .then((response) => response.arrayBuffer())
//     .then((data) => new DataView(data))
//     .then((res) => new File([res], "data", { type: "audio/mpeg" }))
//     .then((d) => {
//       let url = URL.createObjectURL(d)
//       const a = document.createElement("a")
//       a.href = url
//       a.download = d.name
//       a.textContent = "download"
//       document.body.append(a)
//     })
//     .catch((err) => {
//       console.error(`Download error: ${err.message}`)
//     })
// }

function fetchVideo() {
  const controller = new AbortController()
  const signal = controller.signal
  const timer = setTimeout(() => {
    controller.abort()
    console.log("abort")
  }, 5000)
  fetch(
    "https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json",
    { signal }
  )
    .then((res) => {
      clearTimeout(timer)
      console.log(res)
    })
    // .then((response) => response.arrayBuffer())
    // .then((data) => new DataView(data))
    // .then((res) => new File([res], "data", { type: "audio/mpeg" }))
    // .then((d) => {
    //   let url = URL.createObjectURL(d)
    //   const a = document.createElement("a")
    //   a.href = url
    //   a.download = d.name
    //   a.textContent = "download"
    //   document.body.append(a)
    // })
    .catch((err) => {
      if (err.name === "TimeoutError") {
        console.error("Timeout: It took more than 5 seconds to get the result!")
      } else if (err.name === "AbortError") {
        console.error(
          "Fetch aborted by user action (browser stop button, closing tab, etc."
        )
      } else if (err.name === "TypeError") {
        console.error("AbortSignal.timeout() method is not supported")
      } else {
        // A network error, or some other problem.
        console.error(`Error: type: ${err.name}, message: ${err.message}`)
      }
    })
}

// SSE
// EventSource https://developer.mozilla.org/en-US/docs/Web/API/EventSource

// WebSocket
// https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications
