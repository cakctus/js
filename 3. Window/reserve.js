let myWindow
function openWin() {
  myWindow = window.open("https://rezka.ag", "myWindow", "width=700,height=800")
  if (myWindow) {
    myWindow.opener.document.getElementById("open").innerHTML =
      "HELLO!" + myWindow.screenX + myWindow.screenY
  }
}

function closeWin() {
  if (myWindow) {
    myWindow.close()
  }
  if (myWindow.closed) {
    myWindow.opener.document.getElementById("open").innerHTML = "Bye"
  }
}

function checkWin() {
  if (!myWindow) {
    document.getElementById("open").innerHTML = "Window never was close"
  } else {
    if (myWindow.closed) {
      document.getElementById("open").innerHTML = "window is closed"
    } else {
      document.getElementById("open").innerHTML = "window is open"
    }
  }
}

// window.document.title

//console.log(window.document.title)

// innerwidth innerheight

let width = window.innerWidth
let height = window.innerHeight
let owidth = window.outerWidth
let oheight = window.outerHeight
//console.log(width);
//console.log(height);
//console.log(owidth);
//console.log(oheight);

const ss = document.getElementById("ss")

function pageXYOffset() {
  window.scrollBy(100, 100)
  if (window.pageXOffset >= 50) {
    ;(document.getElementById("ss").innerHTML = scrollX), scrollY
  }
}

//console.log(document.getElementById('div').scrollHeight)

function alertFunc() {
  let text = "Press a button!\nEither OK or Cancel."
  if (confirm(text) == true) {
    text = "You pressed OK!"
  } else {
    text = "You canceled!"
  }
  document.getElementById("alertFuct").innerHTML = text
}

const elementt = document.getElementById("ss")

const cssObj = window.getComputedStyle(elementt, null)

let bgColor = cssObj.getPropertyValue("background-color")

document.getElementById("demo").innerHTML = bgColor

let y = 1
let int = setInterval(() => {
  document.getElementById("setInterval").innerHTML = y++
  if (y === 6) {
    clearInterval(int)
    document.getElementById("setInterval").innerHTML = ""
  }
}, 1000)

setTimeout(() => {
  document.getElementById("setTime").innerHTML = "hi"
}, 5000)

function myFunctionss() {
  window.open("http://127.0.0.1:5502/index.html")
}

document.querySelectorAll(".copy-container").forEach((item) => {
  const input = item.querySelector(".input-copy")
  const button = item.querySelector(".button-copy")

  button.addEventListener("click", () => {
    const text = input.value
    navigator.clipboard.writeText(text)
  })
})

document.querySelectorAll(".scroll-img").forEach((item) => {
  const img = item.querySelector(".img-scroll")
  const scrollBox = document.getElementById("scroll-box")

  img.addEventListener("click", rotateImg)

  function rotateImg() {
    img.classList.toggle("img-scrolll")
  }
})
