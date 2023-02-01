// https://jsfiddle.net/cakctus/o30vyg5j/144/

var promiseCount = 0

function testPromise() {
  var thisPromiseCount = ++promiseCount
  var log = document.getElementById("log")
  var btn = document.getElementById("btn")
  var body = document.querySelector("body")
  //log.insertAdjacentHTML('beforeend', thisPromiseCount)

  var p1 = new Promise(function (resolve, reject) {
    //log.insertAdjacentHTML('beforeend', "we are in Promise constructor \n")
    //btn.style.color = "red"
    window.setTimeout(() => {
      //resolve(log,btn)
      const obj = {
        l: log,
        b: btn,
      }
      if ("b" in obj) {
        return resolve(obj)
      } else {
        //return reject(new Error("error in promis"))
        return reject(body)
      }
      //resolve(obj)
    }, Math.random() * 2000 + 1000)
  })

  const myFunction = (obj) => {
    if (obj) {
      if (obj.l !== undefined) {
        obj.l.insertAdjacentHTML(
          "beforeend",
          "<p>promise Promise fulfilled (asynchronous code completed) </p>"
        )
      }
    }
  }

  p1.then(() => {
    console.log("hi")
  })
  p1.then(
    (o) => {
      //o.l.insertAdjacentHTML('beforeend', "<p>promise Promise fulfilled (asynchronous code completed) </p>");
      return myFunction(o)
    },
    (error) => {
      console.log("error")
      error.style.background = "red"
    }
  )
  p1.then((o) => {
    o.b.style.color = "red"
  })

  //log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Промис создан (синхронный код завершён)');

  Promise.all([p1]).then(() => console.log("All promises finished"))
}
