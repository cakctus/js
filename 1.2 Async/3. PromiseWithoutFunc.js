// http://jsfiddle.net/fomenkoandrey/g2Ljr7v5/34/

const promise = new Promise((resolve, reject) => resolve(100))

const counter = (count) => {
  console.log(count)
  if (count === 500) throw "Заканчиваем считать, бросаем ошибку!"
  else return (count += 100)
}

promise
  .then((response) => counter(response)) // response === 100 => 200
  .then((response) => counter(response)) // response === 200 => 300
  .then((response) => counter(response)) // response === 300 => 400
  .then((response) => counter(response)) // response === 400 => 500
  .then((response) => counter(response)) // response === 500 => error
  .then((response) => counter(response))
  .then((response) => counter(response))
  .then((response) => counter(response))
  .then((response) => counter(response))
  .catch((error) => console.log(error)) // error === 'Заканчиваем считать, бросаем ошибку!'
