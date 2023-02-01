var x = document.getElementById("myDIV")

// Start the animation with JavaScript
function animationFunction() {
  x.style.WebkitAnimation = "mymove 4s 2" // Code for Chrome, Safari and Opera
  x.style.animation = "mymove 4s 5" // Standard syntax
}

// Code for Chrome, Safari and Opera
x.addEventListener("webkitAnimationStart", myStartFunction)
x.addEventListener("webkitAnimationIteration", myRepeatFunction)
x.addEventListener("webkitAnimationEnd", myEndFunction)

// Standard syntax
x.addEventListener("animationstart", myStartFunction)
x.addEventListener("animationiteration", myRepeatFunction)
x.addEventListener("animationend", myEndFunction)

function myStartFunction() {
  this.innerHTML = "animationstart - The animation has started"
  this.style.backgroundColor = "pink"
  this.style.padding = "10px"
  this.style.borderRadius = "10px"
}

function myRepeatFunction(event) {
  this.innerHTML =
    "animationiteration - The animation was played again " +
    event.elapsedTime +
    event.animationName
  this.style.backgroundColor = "lightblue"
  this.style.borderRadius = "20px"
}

function myEndFunction() {
  this.innerHTML = "animationend - The animation has completed"
  this.style.backgroundColor = "lightgray"
  this.style.borderRadius = "30px"
}

let transitionDiv = document.getElementById("transition-div")
transitionDiv.addEventListener("transitionstart", transitionStart)
transitionDiv.addEventListener("transitionrun", transitionRun)
transitionDiv.addEventListener("transitionend", transitionEnd)

function transitionStart() {
  this.innerHTML = "transition start"
}

function transitionRun() {
  this.innerHTML = "transition run"
}

function transitionEnd() {
  this.innerHTML = "transition end"
}

/////////////////////      onbeforeprint onafterprint      /////////////////////

document.getElementsByTagName("BODY")[0].onbeforeprint = function () {
  beforePrint()
}
document.getElementsByTagName("BODY")[0].onbeforeprint = function () {
  afterPrint()
}

function beforePrint() {
  document.getElementById("beforePrint").innerHTML = "before"
}

function afterPrint() {
  document.getElementById("beforePrint").innerHTML = "after"
}

/////////////////////      oninput, onblur, onfocus, onchange      /////////////////////

function onInputFunction() {
  const x = document.getElementById("oninput")
  document.getElementById("inputtext").innerHTML = x.value
}

function onRangeInput(value) {
  //const x = document.getElementById('rangeinpurt')
  document.getElementById("inputrange").innerHTML = value
}

function onBlur() {
  var x = document.getElementById("fname")
  x.value = x.value.toUpperCase()
  x.style.color = "red"
  x.style.width = "300px"
}

function onChange() {
  var x = document.getElementById("mySelect")
  document.getElementById("selected").innerHTML = x.value
}

function myFunction4() {
  var x = document.getElementById("fnames")
  document.getElementById("selected").innerHTML = x.value
}

//let function21 = (x) => {
//x.style.background = "yellow";
//}

let myForm = document.getElementById("myForm")
myForm.addEventListener("focus", myFocusFunction, true) // focus focusin focusout
myForm.addEventListener("blur", myBlurFunction, true)

function myFocusFunction() {
  document.getElementById("myInput").style.backgroundColor = "yellow"
}

function myBlurFunction() {
  document.getElementById("myInput").style.backgroundColor = "white"
}

let valueArr = []
function onCheckBoxInput(values) {
  let count = valueArr.filter((x) => x === values).length
  if (count === 0) {
    valueArr.push(values)
  }
  if (count >= 1) {
    valueArr.pop(values)
  }

  document.getElementById("inputtext").innerHTML = valueArr
}

const arrr = ["Car", "Banana", "Show"]
const values = ["Car", "Show"]

const multipleExist = values.every((value) => {
  return arrr.indexOf(value) !== -1
})

//console.log(multipleExist); // 👉️ true

var arr = ["Car", 2, 3, 3, 3, 5, 2, 8, 9, 2]

// Count how many 2 there are in arr
var count = arr.filter((x) => x === "Car").length

//console.log(count);

Array.prototype.count = function (v) {
  var c = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === v) {
      c++
    }
  }
  return c
}
var arr = [1, 2, 3, 5, 2, 8, 9, 2, 2]
//console.log(arr.count(3)); //3

function onSelect(e) {
  let q = e.target.value.substring(
    e.target.selectionStart,
    e.target.selectionEnd
  )
  let newValue = e.target.value
    .trim()
    .split(" ")
    .map((item, index, array) =>
      item === q ? item.toUpperCase() : item.toLowerCase()
    )
    .join(" ")
  document.getElementById("story").innerHTML = newValue
}

/////////////////////      onkeydawn, onkeyup, onkeypress     /////////////////////

function keydownFunction() {
  document.getElementById("demo").style.backgroundColor = "red"
  setTimeout(() => {
    document.getElementById("keypress").innerHTML = "writting..."
  }, 1000)
  setTimeout(() => {
    document.getElementById("keypress").innerHTML = ""
  }, 3000)
}

function keyupFunction() {
  document.getElementById("demo").style.backgroundColor = "green"
}

// function keypress() {
//   document.getElementById("demo").style.backgroundColor = "yellow"
//   console.log(keypress === true)
//   if (keypress === false) {
//     document.getElementById("keypress").innerHTML = "writting..."
//   } else {
//     setInterval(() => {
//       document.getElementById("keypress").innerHTML = " writting  "
//     }, 500)
//   }
// }

/////////////////////      click  copy paste     /////////////////////

function onClick() {
  document.getElementById("clicked").innerHTML = "click"
}

function onCopy() {
  document.getElementById("clicked").innerHTML = "copy"
}

function onPaste() {
  document.getElementById("clicked").innerHTML = "paste"
}

function onCut() {
  document.getElementById("clicked").innerHTML = "cut"
}

function mouseDown() {
  document.getElementById("myP").style.color = "red"
}

function mouseUp() {
  document.getElementById("myP").style.color = "green"
}

function mouseOver(x) {
  x.style.width = "60px"
  x.style.height = "60px"
}

function mouseLeave(x) {
  x.style.width = "50px"
  x.style.height = "50px"
}

let mouseM = document.getElementById("mouseMove")
//let mouseDiv = mouseM.offsetWidth / 2
let mouseDiv = mouseM.offsetWidth
//let bgColor = linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
//mouseM.style.background = 'linear-gradient(10deg, yellow 70%, blue 90%)'

function mouseMove(e) {
  let x = e.clientX
  let y = e.clientY
  let pro = (mouseDiv / 100) * 50
  let coor = "Coordinates: (" + x + "," + y + ")"
  // mouseM.style.background = `linear-gradient(10deg, blue ${x}%, white 100%)`
  if (x < pro) {
    mouseM.style.background = "blue"
  } else if (x > mouseDiv) {
    mouseM.style.background = "red"
  }
  document.getElementById("mouveMouse").innerHTML = mouseDiv
}

function clearCoor() {
  document.getElementById("mouveMouse").innerHTML = ""
}

function myFunction() {
  var h = document.body.clientHeight
  var w = document.body.clientWidth
  var txt = "Window size: width=" + w + ", height=" + h
  document.getElementById("resize").innerHTML = txt
}

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id)
}

function dragging(event) {
  document.getElementById("demo").innerHTML = "The p element is being dragged"
}

function allowDrop(event) {
  event.preventDefault()
}

function drop(event) {
  event.preventDefault()
  var data = event.dataTransfer.getData("Text")
  event.target.appendChild(document.getElementById(data))
  document.getElementById("demo").innerHTML = "The p element was dropped"
}

/////////////////////      play  pause    /////////////////////

function onPlay() {
  alert("The video has started to play")
}

function onPause() {
  alert("video stopped")
}

function onPlaying() {
  alert("video was play")
}

function onEnded() {
  alert("video was closed")
}

/////////////////////      onreset  onsubmit    /////////////////////

function onReset() {
  alert("form was reseted")
}

function onSubmit() {
  alert("form was reseted")
}

const topDiv = document.getElementById("top")
//console.log(window.scrollY, 'scroll Y')

let animation_blog = document.getElementById("animation")
let print__blog = document.getElementById("print")
let input__blog = document.getElementById("input")
let keyboard__blog = document.getElementById("keyboard")

document.addEventListener("scroll", animationBlog)

function animationBlog() {
  //console.log(window.scrollY, 'scroll Y')
  //console.log(animation_blog.offsetTop , 'animation offsetTop')
  //console.log(print__blog.offsetTop - 850 , 'print offsetTop')
  //console.log(input__blog.offsetTop - 850  , 'input offsetTop')
  //console.log(keyboard__blog.offsetTop - 850  , 'keyboard offsetTop')

  //console.log(print__blog.offsetTop, 'animation offsetTop')
  //console.log(print__blog.offsetTop, 'print offsetTop')
  /*
  if ( window.scrollY >= animation_blog.offsetTop - 850) {
    animation_blog.style.animation = "animation 2s"; 
  } else {
    
  }
  if (window.scrollY >= print__blog.offsetTop - 850 ) {
    print__blog.style.animation = "animation 2s";  
  } else {
    
  }
  if (window.scrollY >= input__blog.offsetTop - 850 ) {
    input__blog.style.animation = "animation 2s";  
  } else {
    
  }
  if (window.scrollY >= keyboard__blog.offsetTop - 850 ) {
    keyboard__blog.style.animation = "animation 2s";  
  }  else {
    
  }
  */

  let center = window.innerHeight / 2 + window.scrollY

  //console.log(animation_blog.offsetTop)
  //console.log(window.pageYOffset)
  //console.log(window.scrollY)
}

/*
const AnimItems  = document.querySelectorAll('.anim-items')
if (AnimItems.length > 0 ) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < AnimItems.length; i++){
      const animItem = AnimItems[i]
      const animItemHeight = animItem.offsetHeight;
      const animationItemsOffset = offset(animItem).top;
      const animationStart = 5;

      let animItemPoint = window.innerHeight - animItemHeight / animationStart;
      
      if ((scrollY > animationItemsOffset - animItemPoint) && scrollY < (animationItemsOffset + animItemHeight)) {
        animItem.classList.add('_active')
      }  else {
        if (!animItem.classList.contains('animationNoRepeat')) {
          animItem.classList.remove('_active')
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect();
    scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    scrollTop = window.scrollY || document.documentElement.scrollTop;

    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    }
  }
  animOnScroll()
}

*/

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("_active")
    } // else {
    //if (!change.target.classList.contains('animationNoRepeat')) {
    // change.target.classList.remove('_active');
    //}
    // }
  })
}

let options = {
  threshold: [0.9],
}
let observer = new IntersectionObserver(onEntry, options)
let elements = document.querySelectorAll(".anim-items")

for (let elm of elements) {
  observer.observe(elm)
}

/* Function to open fullscreen mode */

var elem = document.documentElement
//console.log(elem)
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen()
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen()
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem = window.top.document.body //To break out of frame in IE
    elem.msRequestFullscreen()
  }
}

/* Function to close fullscreen mode */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  } else if (document.msExitFullscreen) {
    window.top.document.msExitFullscreen()
  }
}

var output = document.getElementById("myP")
document.addEventListener("fullscreenchange", function () {
  output.innerHTML = "s"
})

document.addEventListener("fullscreenerror", function () {
  output.innerHTML = "Full screen error"
})
