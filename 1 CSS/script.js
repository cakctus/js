let content = document.getElementsByClassName("section_content")

for (i = 0; i < content.length; i++) {
  content[i].addEventListener("click", toggleItem, false)
}

function toggleItem() {
  var itemClass = this.classList
  for (i = 0; i < content.length; i++) {
    content[i].className = "section_content"
  }
  if (itemClass == "section_content") {
    this.className = "section_content_open"
  } else if (this.className == "section_content_open") {
    this.className = "section_content "
  }
}
