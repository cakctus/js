const tryCatch = () => {
  let text = "Press ok or cancel"
  try {
    if (confirm(text) === true) {
      throw "ok"
      //text = 'ok'
    } else {
      throw "cancel"
      //text = 'cancel'
    }
    document.getElementById("try").innerHTML = text
  } catch (err) {
    document.getElementById("try").innerHTML = err
  }
}

const checkNumber = () => {
  const value = document.getElementById("input").value
  document.getElementById("message").innerHTML = value
  try {
    if (!value) throw "is empty"
    if (isNaN(value)) throw "is not a number"
    x = Number(value)
    if (value > 10) throw "is to high"
    if (value < 1) throw "is to low"
  } catch (err) {
    document.getElementById("message").innerHTML = "Input " + err
  }
  //finally {
  //document.getElementById("message").value = "";
  //}
}

let err = new Error(`10 is not more than 20`)

//if (100 < 20 ) throw new Error("error")
function check(n) {
  if (100 > n) throw new Error("error!")
}

function fff() {
  try {
    if (check(400)) {
      return "function"
    }
  } catch (error) {
    console.error(console.log(error))
  } finally {
    console.log("finnaly")
  }
  console.log("hi")
  return "something"
}

console.log(fff())

console.log("hi?")

const error = new Error("n")

function factorial(n) {
  if (n < 0) throw new Error("n")
  let f
  for (f = 1; n > 1; n--) {
    f *= n
  }
  return f
}

try {
  //let n = Number(prompt("number"))
  factorial(10)
} catch (e) {
  alert(e)
}
