// let myWindow

// function openWin() {
//   myWindow = window.open(
//     "",
//     "myWindow",
//     "width=400,height=800, left=500, top=100, margin-top=2000"
//   )
//   // myWindow.opener.document.getElementById("open").innerHTML = "HELLO!"
//   if (myWindow) {
//     document.getElementById("open").innerHTML = "open"
//   }

//   let x = myWindow.screenX
//   let y = myWindow.screenY
//   let l = window.screenLeft
//   let t = window.screenTop
//   console.log(x, y, l, t)

//   localStorage.setItem("f", "ff")
// }

// function closeWin() {
//   if (myWindow) {
//     myWindow.close()
//     document.getElementById("open").innerHTML = "close"

//     setTimeout(() => {
//       document.getElementById("open").innerHTML = ""
//     }, 5000)
//   }
// }

// function checkWin() {
//   if (!myWindow) {
//     document.getElementById("open").innerHTML = "Window never was close"
//   } else {
//     if (myWindow.closed) {
//       document.getElementById("open").innerHTML = "window is closed"
//     } else {
//       document.getElementById("open").innerHTML = "window is open"
//     }
//   }
// }

// // function myFunctionss() {
// //   const myWindow = window.open()
// //   myWindow.document.open()
// //   myWindow.document.write("http://rezka.ag")
// //   myWindow.document.close()
// // }

// function myFunctionss() {
//   // window.open("http://127.0.0.1:5502/index.html")
//   document.open()
//   document.write("<h1>Hello World</h1>")
//   document.write("<p>Open a document owerwrites the original content.</p>")
//   document.close()
// }

// let store = localStorage.getItem("f")
// if (store == "ff") {
//   document.getElementById("storage").innerHTML = "You Clicked"
// }

// let width = window.innerWidth
// let height = window.innerHeight
// let owidth = window.outerWidth
// let oheight = window.outerHeight
// let pwidth = window.pageYOffset
// let pheight = window.pageXOffset
// let swidth = window.scrollX
// let swidthY = window.scrollY
// // console.log(width)
// // console.log(height)
// // console.log(owidth)
// // console.log(oheight)
// // console.log(pwidth)
// // console.log(pheight)
// // console.log(swidth)
// // console.log(swidthY)

// const ss = document.getElementById("ss")

// function pageXYOffset() {
//   window.scrollBy(100, 100)
//   if (window.pageXOffset >= 50) {
//     ;(document.getElementById("ss").innerHTML = scrollX), scrollY
//   }
// }

// //console.log(document.getElementById('div').scrollHeight)

// function alertFunc() {
//   let text = "Press a button!\nEither OK or Cancel."
//   if (confirm(text) == true) {
//     text = "You pressed OK!"
//   } else {
//     text = "You canceled!"
//   }
//   document.getElementById("alertFuct").innerHTML = text
// }

// const elementt = document.getElementById("ss")
// const cssObj = window.getComputedStyle(elementt, null)
// let bgColor = cssObj.getPropertyValue("background-color")
// document.getElementById("demo").innerHTML = bgColor

// let y = 1
// let int = setInterval(() => {
//   document.getElementById("setInterval").innerHTML = y++
//   if (y === 6) {
//     clearInterval(int)
//     document.getElementById("setInterval").innerHTML = ""
//   }
// }, 1000)

// setTimeout(() => {
//   document.getElementById("setTime").innerHTML = "hi"
// }, 5000)

// document.querySelectorAll(".copy-container").forEach((item) => {
//   const input = item.querySelector(".input-copy")
//   const button = item.querySelector(".button-copy")

//   button.addEventListener("click", () => {
//     const text = input.value
//     navigator.clipboard.writeText(text)
//   })
// })

// document.querySelectorAll(".scroll-img").forEach((item) => {
//   const img = item.querySelector(".img-scroll")
//   const scrollBox = document.getElementById("scroll-box")

//   img.addEventListener("click", rotateImg)

//   function rotateImg() {
//     img.classList.toggle("img-scrolll")
//   }
// })

// function top() {
//   window.top()
// }

// const att = document.createAttribute("class")

// // Set a value of the class attribute
// att.value = "democlass"

// // Add the class attribute to the first h1;
// // document.getElementsByTagName("h1")[1].setAttributeNode(att);
// document.getElementsByTagName("h1")[1].setAttributeNode("class", "democlass")
