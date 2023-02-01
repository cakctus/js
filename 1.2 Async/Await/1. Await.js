// http://jsfiddle.net/cakctus/hd975tmo/65/

/* 
function fn() {
  return new Promise((resolve) => {
    resolve(1)
  });
} 
*/

async function fn() {
  return 1
}

console.log(fn())
fn().then((res) => console.log(res))

function first() {
  return new Promise((resolve) =>
    setTimeout(() => {
      return resolve("first finished")
    }, 3000)
  )
}

var f = new Promise((resolve) =>
  setTimeout(() => {
    return resolve("first finished")
  }, 3000)
)

function second(r) {
  return new Promise((resolve) =>
    setTimeout(() => {
      return resolve("second")
    }, 2000)
  )
}

function third(r) {
  return new Promise((resolve) =>
    setTimeout(() => {
      return resolve("third")
    }, 1000)
  )
}

/* функции выше можно переписать намного короче */
/* let sleep = ms => new Promise( r => setTimeout(r, ms)); */
/* вызов будет вида */
/* sleep(ms); */

async function start() {
  /* await sleep(1000) */ //console.log('started!');
  return await first()
  //console.log(f);
  //const s = await second();
  //console.log(s);
  //const t = await third();
  //console.log(t);

  //console.log('finished!');
}

async function tt() {
  return await second()
}

start()
  .then((res) => res)
  .then((res) => console.log(res))
  .then((res) => second())
  .then((res) => console.log(res))
  .then(() => third())
  .then((res) => console.log(res))

//f.then((res) => {
//console.log(res)
//})

//first()
//.then(res => console.log(res))

const first = () =>
  new Promise((resolve) => setTimeout(() => resolve("first"), 2000))

const second = (s) =>
  new Promise((resolve) => setTimeout(() => resolve("second"), s))

const third = (s) =>
  new Promise((resolve) => setTimeout(() => resolve("third"), s))

const start = async () => {
  return await first()
}

/* start()
  .then((res) => console.log(res))
  .then(() => second(2000))
  .then((res) => console.log(res))
  .then(() => third(3000))
  .then(res => console.log(res)) 
*/

const getJson = async (url) => {
  let response = await fetch(url)
  let data = await response.json()
  return data
}

/* getJson()
  .then((response) => console.log(response)) 
*/
