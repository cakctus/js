// fetch("http://example.com/movies.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data))

// function f() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json))
// }

const url = "https://jsonplaceholder.typicode.com/todos/1"

async function f() {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
}

// f()

// console.log("s")
// console.log("s")
// console.log("s")

// console.log(
//   setTimeout(() => {
//     console.log("settimeout")
//   }, 0)
// )

// console.log("s")
// console.log("s")
// console.log("s")
