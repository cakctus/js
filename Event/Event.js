function altFunc(event) {
  console.log(event)
  if (event.altKey) {
    document.getElementById("alt-key").innerHTML = "alt"
  } else {
    document.getElementById("alt-key").innerHTML = "no alt"
  }
}

function ctrlFunc(event) {
  if (event.ctrlKey) {
    document.getElementById("ctrl-key").innerHTML = "ctrl"
  } else {
    document.getElementById("ctrl-key").innerHTML = "no ctrl"
  }
}

function div1() {
  alert("di1")
}

function div2(event) {
  event.stopPropagation()
  alert("di2")
}

function preventD(event) {
  event.preventDefault()
}

// function clientX(event) {
//   let clientX = event.clientX
//   let clientY = event.clientY
//   let x = event.pageX
//   let y = event.pageY
//   let screenX = event.screenX
//   let screenY = event.screenY
//   let offsetX = event.offsetX
//   let offsetY = event.offsetY
//   document.getElementById("clientX").innerHTML =
//     "clientX is " +
//     clientX +
//     " clientY is " +
//     clientY +
//     "</br>" +
//     " pageX is " +
//     x +
//     " pageY is " +
//     y +
//     "</br>" +
//     " screenX is " +
//     screenX +
//     " screenY is " +
//     screenY +
//     "</br>" +
//     " offsetX is " +
//     offsetX +
//     " offsetY is " +
//     offsetY
// }

const modeDiv = document.getElementById("moveDiv2")

function clinetXx(event) {
  console.log(event.type)
  modeDiv.addEventListener("mousemove", clientX)
}

function clientXxx(event) {
  console.log(event.type)
  modeDiv.addEventListener("mousemove", clientX)
  if (event.type === "mouseup") {
    console.log("move delete")
    modeDiv.removeEventListener("mousemove", clientX)
  }
}

modeDiv.addEventListener("mousedown", clinetXx)
modeDiv.addEventListener("mouseup", clientXxx)

function clientX(event) {
  let clientX = event.clientX
  let clientY = event.clientY
  let x = event.pageX
  let y = event.pageY
  let screenX = event.screenX
  let screenY = event.screenY
  let offsetX = event.offsetX
  let offsetY = event.offsetY
  document.getElementById("clientX").innerHTML =
    "clientX is " +
    clientX +
    " clientY is " +
    clientY +
    "</br>" +
    " pageX is " +
    x +
    " pageY is " +
    y +
    "</br>" +
    " screenX is " +
    screenX +
    " screenY is " +
    screenY +
    "</br>" +
    " offsetX is " +
    offsetX +
    " offsetY is " +
    offsetY

  if (clientX > 50) {
    console.log("> 350 px")
    document.getElementById("moveDiv2").style.width = `${screenX}px`
  }
  if (clientX < 50) document.getElementById("moveDiv2").style.width = "30px"
}

function target(event) {
  document.getElementById("target").innerHTML = event.currentTarget.className
  console.log(event.currentTarget)
}

function targett(event) {
  console.log(event.target)
}

function data(event) {
  document.getElementById("data").innerHTML = event.data
}

function inputT(event) {
  document.getElementById("inputT").innerHTML = event.inputType
  if (event.inputType === "deleteContentBackward") {
    document.getElementById("inputT").style.backgroundColor = "red"
  }
}
