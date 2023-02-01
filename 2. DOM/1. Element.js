// accesKey
document.getElementById("name").accessKey = "s"
document.getElementById("name2").accessKey = "t"

// focus blur

const gFocus = () => document.getElementById("blur").focus()

const blur = () => document.getElementById("blur").blur()

// attribute
const att = document.getElementById("name")
// console.log(att.attributes)

const get_name = document.getElementById("cat")
// console.log(get_name.attributes)

// createElement() createTextNode()
// appendChild()  removeChild() replaceChild()
const node = document.createElement("option")
const textnode = document.createTextNode("Fiat")
node.appendChild(textnode)

document.getElementById("mySelect").appendChild(node)
document.getElementById("mySelect").removeChild(mySelect.firstElementChild)

const ford = document.createTextNode("Ford")
const element = document.getElementById("mySelect").children[0]
element.replaceChild(ford, element.childNodes[0])

// insertBefore()
const newNode = document.createElement("option")
const textNode = document.createTextNode("Cool Cars")
newNode.appendChild(textNode)

const list = document.getElementById("mySelect")
list.insertBefore(newNode, list.children[0])

// insertAdjacentElement()

const insertElement = () => {
  const mySpan = document.getElementById("mySpan")
  const myH2 = document.getElementById("myH2")
  mySpan.insertAdjacentElement("beforebegin", myH2)
}

// insertAdjacentHTML()

const insertHTML = () => {
  const insertHTML = document.getElementById("insertHTML")
  const html = "<p>Some content here</p>"
  insertHTML.insertAdjacentHTML("beforebegin", html)
}

// insertAdjacentText()

const insertText = () => {
  const insertText = document.getElementById("insertText")
  const text = "Some content here"
  insertText.insertAdjacentHTML("beforebegin", text)
}

// parentNode parentElement children childNodes childElementCount

//console.log(document.body.childElementCount) return number of html elements
const parentNode = document.getElementById("sub-child").parentNode // parentNode.style.backgroundColor = "blue"
const children = document.getElementById("child").children
const childNodes = document.getElementById("child").childNodes
const childElementCount = document.getElementById("mySelect").childElementCount
const firstChild = document.getElementById("mySelect").firstChild
const firstElementChild = document.getElementById("child").firstElementChild
const lastChild = document.getElementById("mySelect").lastChild
const lastElementChild =
  document.getElementById("mySelect").lastElementChild.text
const firstElementChildinnerHTML =
  document.getElementById("child").firstElementChild.innerHTML

// console.log(parentNode.className)
// console.log(children)
// console.log(children[0].tagName)
// console.log(children[0].nodeName)
// console.log(children[0].nodeType)
// console.log(children[0].nodeValue)
// console.log(children[0].textContent)
// console.log(childNodes)
// console.log(childElementCount)

//console.log(document.getElementById('child').childNodes.length)

// console.log(document.getElementById("mySelect").firstChild)
// console.log(document.getElementById("mySelect").firstElementChild.textContent)
// console.log(document.getElementById("childrens").firstElementChild.textContent)
//console.log(document.getElementById("child").firstElementChild.innerHTML)
//console.log(document.getElementById("mySelect").lastChild)
//console.log(document.getElementById("mySelect").lastElementChild.text)

// nextElementSibling previousElementSibling

let text = document.getElementById("mySelect").childNodes[0].nextElementSibling
text.style.color = "red"

let text2 =
  document.getElementById("mySelect").childNodes[1].previousElementSibling
text2.style.color = "blue"

// remove

function removeDiv(element) {
  element.remove()
}

var string = ""
var ii

for (ii = 0; ii < childNodes.length; ii++) {
  string = string + childNodes[ii].nodeName + "<br>"
}

const collection = document.body.children
let txts = ""
for (let ii = 0; ii < collection.length; ii++) {
  txts += collection[ii].tagName + "<br>"
}

//console.log(document.getElementById("child").classList[0]) // add remove toggle
//console.log(document.getElementById("child").className)
//console.log(document.getElementById("child").classList.add('style'))
//console.log(document.getElementById("child").classList.remove('style'))
//console.log(document.getElementById("child").classList.contains('style'))
//console.log(document.getElementById("child").classList.toggle('style'))

function overFunc() {
  document.getElementById("name").click()
}

function scroll(event) {
  console.log(event)
}

document.addEventListener("scroll", scroll())

const clientW = document.body.clientWidth // including padding
const clientH = document.body.clientHeight // including padding
const clientT = document.body.clientTop // including top border
const clientL = document.body.clientLeft // including left border

const seth = document.body.offsetHeight // including padding border and scroll
const setw = document.body.offsetWidth // including padding  border and scroll
const sett = document.body.offsetTop // Returns the vertical offset position of an element
const setl = document.body.offsetLeft // Returns the horizontal offset position of an element

const scrollW = document.body.scrollWidth
const scrollH = document.body.scrollHeight
const scrollT = document.body.scrollTop
const scrollL = document.body.scrollLeft

//console.log(clientW)
//console.log(clientH)
//console.log(setw)
//console.log(seth)

//sconsole.log(scrollH)
