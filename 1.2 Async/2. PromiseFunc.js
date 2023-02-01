// http://jsfiddle.net/cakctus/0gce7v6h/12/

const delay = (counter) =>
  new Promise((r) => setTimeout(() => r(counter), 1000))

const counter = (count) => {
  console.log(count)
  if (count === 700) throw "Заканчиваем считать, бросаем ошибку!"
  else return (count += 100)
}

delay(100)
  .then((data) => {
    const count = counter(data)
    return delay(count)
  })
  .then((data) => {
    const count = counter(data)
    return delay(count)
  })
  .then((data) => {
    const count = counter(data)
    return delay(count)
  })
  .then((data) => {
    const count = counter(data)
    return delay(count)
  })
  .then((data) => {
    const count = counter(data)
    return delay(count)
  })
  .then((data) => {
    const count = counter(data)
    return delay(count)
  })
  .then((data) => {
    const count = counter(data)
    return delay(count)
  })
  .then((data) => {
    const count = counter(data)
    return delay(count)
  })
  .then((data) => {
    const count = counter(data)
    return delay(count)
  })
  .then((data) => {
    const count = counter(data)
    return delay(count)
  })
  .then((data) => {
    const count = counter(data)
    return delay(count)
  })
  .then((data) => {
    const count = counter(data)
    return delay(count)
  })
  .catch((error) => {
    console.log(error)
  })
