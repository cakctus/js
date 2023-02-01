const demo = document.getElementById("demo")

const ul = document.getElementsByTagName("ul")[0]
ul.getElementsByTagName("li")[0].innerHTML = "Main"

const p = (document.getElementsByTagName("p")[0].style.fontSize = "15px")

//  document.addEventListener document.activeElement

// activeElement
function activeElement() {
  const element = document.activeElement.tagName
  document.getElementById("activeElement").innerHTML = element
}

document.addEventListener("click", activeElement)

// lastModified

let text = document.lastModified
document.getElementById("lastModified").innerHTML = text

// document.hasFocus()
setInterval(() => {
  let text
  if (document.hasFocus()) {
    text = "The document has focus."
  } else {
    text = "The document does NOT have focus."
  }
  document.getElementById("hasFocus").innerHTML = text
}, 2000)

// document.open
function documentOpen() {
  document.open()
  document.write("<h1>Hello World</h1>")
  document.write("<p>Open a document owerwrites the original content.</p>")
  document.close()
}

// windown.open
function windowOpen() {
  const myWindow = window.open()
  myWindow.document.open()
  myWindow.document.write("<h1>Hi<h1>")
  myWindow.document.close()
}

// document.createAttribute() document.setAttributeNode(value)

// Create a class attribute:

// const att = document.createAttribute("class")
// att.value = "democlass"

// Add the class attribute to the first h1;

// document.getElementById("h1").setAttribute("class", "democlass")
// document.getElementsByTagName("h1")[0].setAttributeNode(att)
document.getElementsByTagName("h1")[0].setAttribute("class", "democlass")

// document.createElement document.body.appendChild
const para = document.createElement("h1")
const textNode = document.createTextNode("Hello World")
para.appendChild(textNode)
para.innerText = "This is a paragraph."

// Append to body:
document.getElementById("append").appendChild(textNode)
document.body.appendChild(para)

// console.log(document.domain, "document.domain")
// console.log(document.cookie, "document.cookie")
// console.log(document.URL, "document.URL")
// console.log(document.baseURI, "document.baseURI")

// console.log(document.head, "document.head")
// console.log(document.title, "document.title")
// console.log(document.body, "document.body")

// console.log(document.scripts.length, 'document.script') // document.scripts.item(0).text
// console.log(document.links.length, 'document.links.lenght')   // document.links.item(0).href
// console.log(document.images.length, 'document.images.lenght')         // myImages[i].src

let get_id = document.getElementById("get_element_by_id")
let get_class = document.getElementsByClassName("get_element_by_id") // return HTML Colection

for (let x of get_class) {
  //console.log(x.textContent, )
}

let get_name = document.getElementsByName("animal") // return Node List
get_name[0].style.width = "20px"
get_name[1].style.width = "20px"
// console.log(get_name[0].attributes.value.nodeValue)

// document.querySelector("h1").style.backgroundColor = "red"

// const nodeList = document.querySelectorAll(".example")
const nodeList = document.getElementsByTagName("h1")
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.color = "red"
}

//const dropdown = getElementById('dropdown')

function changeDisplay() {
  if (dropdown.style.display === "flex") {
    dropdown.style.display = "none"
  } else {
    dropdown.style.display = "flex"
  }
}

if (dropdown.style.display === "flex") {
  document.addEventListener("click", removeDisplay)
}

function removeDisplay() {
  landing.style.color = "red"
}

// forms
const forms = document.forms
let formText = ""
for (let i = 0; i < forms.length; i++) {
  if (forms[i].id === "myCarForm") {
    const form = document.forms[1]
    for (let i = 0; i < form.length; i++) {
      form.elements[i].style.color = "red"
      formText += form.elements[i].value + "<br>"
    }
  }
}
document.getElementById("form-name").innerHTML = formText
