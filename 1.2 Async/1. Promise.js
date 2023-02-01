const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    data = {
      status: 200,
    }
    if (data.status === 200) resolve(data)
    else reject("reject")
  }, 100)
})

myPromise
  //.then((data) => {
  //console.log(data)
  //})
  .then((data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        data.site = "site.com"
        console.log(data)
        resolve(data)
      }, 5000)
    })
  })
  .then((ndata) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        ndata.newSite = "sgsite.com"
        console.log(ndata)
        resolve(ndata)
      }, 2000)
    })
  })
  .then((fdata) => {
    console.log(fdata)
  })
  .catch((error) => {
    console.log("Error:", error)
  })

myPromise
  .then((data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        data.site = "site.com"
        console.log(data)
        resolve(data)
      }, 100)
    })
  })
  .then((ndata) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        ndata.site = "sgsite.com"
        console.log(ndata)
        resolve(ndata)
      }, 100)
    })
  })
  .then((data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(data)
        resolve(data)
      }, 100)
    })
  })
  .then((data) => {
    setTimeout(() => {
      data.statuss = 200
      console.log(data)
      //resolve(data)
    }, 100)
  })
  .then((data) => {
    setTimeout(() => {
      //data.ok = true
      console.log(data)
      //return data
    }, 100)
  })

const n = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms)
  })
}

function f() {
  n(1000)
    .then(() => fetch("https://jsonplaceholder.typicode.com/todos/1"))
    .then((response) => {
      console.log(response)
      if (response.ok) {
        return response.json()
      }
    })
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error)
    })
}

async function ff() {
  await n(1000)
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data
    if (response.ok) {
      data = await response.json()
    }
    console.log(data)
  } catch (e) {
    console.error(e)
  }
}

// ff()

let weWork = true

let p = (work, time) => {
  return new Promise((resolve, reject) => {
    if (weWork) {
      setTimeout(() => {
        resolve(work())
      }, time)
    } else {
      reject(console.log("we are close"))
    }
  })
}

async function pp() {
  await p(() => console.log("we work"), 500)
  await p(() => console.log("first client"), 500).then(() => {
    setTimeout(() => {
      console.log("3th client")
    }, 0)
  })
  await p(() => console.log("second client"), 0)
    .then(() => {
      setTimeout(() => {
        console.log("3th client")
      }, 0)
    })
    .then(() => {
      setTimeout(() => {
        console.log("4th client")
      }, 100)
    })
  await p(() => console.log("5th client"), 2500)
  await p(() => console.log("6th client"), 100)
}

pp()

// function pp() {
//   p("we work", 500).then(() => {
//     return p("first client", 1000).then(() => {
//       return p("second client", 2000).then(() => {
//         return p("3th client", 2500).then(() => {
//           p("4th client", 3000)
//         })
//       })
//     })
//   })
// }

function b(t) {
  console.log("2", t)
}

function o(callback) {
  console.log("1")
  const t = true
  return callback(t)
}

o(b)

function greeting(name) {
  alert("Hello " + name)
}

function processUserInput(callback) {
  var name = prompt("Please enter your name.")
  callback(name)
}

// processUserInput(greeting)
