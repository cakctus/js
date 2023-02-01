let myWindow

function openWin() {
  myWindow = window.open(
    "",
    "myWindow",
    "width=400,height=800, left=500, top=100, margin-top=2000"
  )
  myWindow.opener.document.getElementById("open").innerHTML = "HELLO!"
  if (myWindow) {
    document.getElementById("open").innerHTML = "open"
  }

  // let x = myWindow.screenX
  // let y = myWindow.screenY
  // let l = window.screenLeft
  // let t = window.screenTop
  // console.log(x, y, l, t)

  sessionStorage.setItem("windowIsOpen", "open")
}

function closeWin() {
  if (myWindow) {
    myWindow.close()
    document.getElementById("open").innerHTML = "close"

    setTimeout(() => {
      document.getElementById("open").innerHTML = ""
    }, 5000)
  }
}

let text = ""
if (!myWindow) {
  text = "It has never been opened!"
} else {
  if (myWindow.closed) {
    text = "It is closed."
    document.getElementById("open").innerHTML = "close"
  } else {
    text = "It is open."
    document.getElementById("open").innerHTML = "open"
  }
}
document.getElementById("open").innerHTML = text

let storage = sessionStorage.getItem("windowIsOpen")
if (storage === "open") {
  document.getElementById("storage").innerHTML =
    "window is open from session storage"
}

if (storage === null) {
  document.getElementById("storage").innerHTML =
    "window has never been open from session storage"
}

function openWindow() {
  const myWindow = window.open("", "", "width=300,height=300")
  myWindow.opener.document.getElementById("demo").innerHTML = "HELLO!"
}

function documentOpen() {
  const myWindow = window.open()
  myWindow.document.open()
  myWindow.document.write("<h2>404</h2>")
  myWindow.document.close()
}

let w = window.innerWidth
let h = window.innerHeight

let width = window.outerWidth
let height = window.outerHeight

function myFunction() {
  //alert("pageXOffset: " + window.pageXOffset + ", pageYOffset: " + window.pageYOffset); //Returns the pixels the current document has been scrolled (horizontally) from the upper left corner of the window
}

//console.log(w)
//console.log(h)
//console.log(width)
//console.log(height)

function tops() {
  window.top()
}
