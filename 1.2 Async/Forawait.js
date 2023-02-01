const todos = "https://jsonplaceholder.typicode.com/todos"

const posts = "https://jsonplaceholder.typicode.com/posts"

const users = "https://jsonplaceholder.typicode.com/users"

const urls = [users, posts, todos]

const primises = urls.map((url) => fetch(url))

async function c() {
  for await (const response of primises) {
    //const response =  promise
    console.log(response, "---")
  }
}

Promise.all(primises)
  .then((arr) => {
    arr.forEach((i) => console.log(i))
  })
  .catch((e) => console.log(e))

c()
