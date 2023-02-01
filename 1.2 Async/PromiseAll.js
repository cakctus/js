const users = "https://jsonplaceholder.typicode.com/users"
const posts = "https://jsonplaceholder.typicode.com/posts"
const urls = [users, posts]

promises = urls.map((url) => fetch(url).then((r) => r.json()))

//console.log(promises)

function usersF(users) {
  for (let i of users) {
    console.log(i)
    const div = document.createElement("div")
    div.setAttribute("class", "box")
    const name = document.createElement("p")
    const phone = document.createElement("p")
    const address = document.createElement("p")
    name.innerHTML = i.name
    phone.innerHTML = i.phone
    address.innerHTML = i.address.city + " " + i.address.street
    div.append(name, phone, address)
    document.getElementsByTagName("body")[0].append(div)
  }
}

Promise.all(promises)
  .then((arr) => {
    //arr.forEach(i => console.log(i))
    return arr
  })
  .then((r) => {
    usersF(r[0])
    return r
  })
  //.then(r => console.log(r[1]))
  .catch((e) => console.log(e))
