let url = "https://jsonplaceholder.typicode.com/posts"

// const obj = {
//   title: "title",
// }

// async function postData(url, data) {
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//   if (response.status === 201) return response.json()
//   else throw new Error(response.statusText)
// }

// async function postData(url, data) {
//   const response = await fetch(url, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//   if (response.status === 200) return response.json()
//   else throw new Error(response.statusText)
// }

// async function postData(url, data) {
//   const response = await fetch(url, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//   if (response.status === 200) return response.json()
//   else throw new Error(response.statusText)
// }

// async function postData(url, data) {
//   const response = await fetch(url, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//   if (response.status === 200) return response.json()
//   else throw new Error(response.statusText)
// }

// postData("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))

// document.addEventListener("DOMContentLoaded", () => {
// document.getElementById("myForm").addEventListener("submit", handleForm)
// // })

// function handleForm(ev) {
//   ev.preventDefault()
//   let myForm = ev.target
//   let formData = new FormData()

//   //add more things that were not in the form

//   //look at all the contents
//   // for (let key of formData.keys()) {
//   //   console.log(formData.get(key))
//   //   // formData.append(key, formData.get(key))
//   // }
//   const name = document.getElementById("first")
//   const file = document.getElementById("file")

//   formData.append("name", name.value)
//   formData.append("file", file.files[0])
//   formData.append("api-key", "myApiKey")

//   let json = convertToJSON(formData)

//   console.log(json)

//   fetch("https://jsonplaceholder.typicode.com/photos", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: json,
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       console.log("Success:", result)
//     })
//     .catch((error) => {
//       console.error("Error:", error)
//     })

//   function convertToJSON(objArg) {
//     let obj = {}
//     for (let key of objArg.keys()) {
//       if (formData.get(key) === "undefined") continue
//       obj[key] = objArg.get(key)
//     }
//     return JSON.stringify(obj)
//   }
// }

function dodrop(event) {
  let dt = event.dataTransfer
  let files = dt.files
  let count = files.length
  let formData = new FormData()

  for (let i = 0; i < files.length; i++) {
    formData.append(files[i].name, files[i])
    output(
      " File " +
        i +
        ":\n(" +
        typeof files[i] +
        ") : <" +
        files[i] +
        " > " +
        files[i].name +
        " " +
        files[i].size +
        "\n"
    )
  }

  let json = convertToJSON(formData)

  fetch("https://jsonplaceholder.typicode.com/photos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: json,
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Success:", result)
    })
    .catch((error) => {
      console.error("Error:", error)
    })

  function convertToJSON(objArg) {
    let obj = {}
    for (let key of objArg.keys()) {
      if (formData.get(key) === "undefined") continue
      obj[key] = objArg.get(key)
    }
    return JSON.stringify(obj)
  }
}

function output(text) {
  document.getElementById("output").textContent += text
}
