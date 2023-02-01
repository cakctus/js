// СОЗДАНИЯ МАССИВОВ

// литералов типа массивов
let empty = [] // Массив без элементов
let primes = [2, 3, 5, 7, 11] // Массив с пятью числовыми элементами
let misc = [1.1, true, "а"] // Три элемента различных типов

// операция распространения
let а = [1, 2, 3]
let b = [О, ...а, 4]

let original = [1, 2, 3]
let copy = [...original]
copy[0] = 0

// конструктор
let а10 = new Array() // []
let а100 = new Array(10) // разреженный массив
let а150 = new Array(5, 4, 3, 2, 1, "testing, testing") // явное присваивание

// Array.of()
Array.of() // []
Array.of(10) // [10]
Array.of(1, 2, 3) // [1, 2, 3]

// Array. from ()
let c100 = Array.from(original)

// ЧТЕНИЯ  И ЗАПИСЬ ЭЛЕМЕНТОВ МАССИВА

let а321 = ["world"]
let value = а321[0] // прочитать
а321[1] = 3.14 // запись
let i = 2
а321[i] = 3
а321[i + 1] = "hello"

// РАЗРЕЖЕННЫЕ МАССИВЫ

let a = new Array(10)
a = []
a[3] = 3
a[1000] = 0

// ДЛИННА МАССИВОВ

let arr225 = [].length // 0
let arr132 = ["a", "b", "с"].length // 3
а = [1, 2, 3, 4, 5]
a.length = 3
a.length = 0
a.length = 5

// ДОБАВЛЕНИЯ И УДАЛЕНИЕ ЭЛЕМЕНТОВ МАССИВА

const arr5621 = [1, 2, 3]
arr5621.unshift(4, 5) // add
arr5621.shift() // remove

const animals = ["pigs", "goats", "sheep"]
animals.push("cows") // add
animals.pop() // remove

const fruits54 = ["Banana", "Orange", "Apple", "Mango"]
fruits54.splice(2, 0, "Lemon", "Kiwi") // At position 2, add 2 elements:
fruits54.splice(2, 2, "Lemon", "Kiwi")
fruits54.splice(2, 2)

let arr2236 = [1, 2, 3]
delete arr2236[2]
console.log(arr2236)
console.log(1 in arr2236)
console.log(arr2236.length)

// ИТРЕПАЦИИ ПО МАССИВОМ

let letters = [..."Hello world"]
let word = ""
for (let i of letters) {
  word += i
}
console.log(word)

let arr3326 = []
for (let [index, value] of letters.entries()) {
  arr3326.push([index, value])
}
console.log(arr3326)

let upper = ""
letters.forEach((i) => {
  upper += i.toUpperCase()
})
console.log(upper)

let res3326 = ""
for (let i = 0; i < letters.length; i++) {
  lettera52 = letters[i]
  if (/(h|o)/g.test(lettera52)) {
    res3326 += lettera52
  }
}
console.log(res3326)

for (let i = 0, len = letters.length; i < len; i++) {
  console.log(i)
}

let arr32 = new Array(10)
arr32[11] = 11
for (let i = 0; i < arr32.length; i++) {
  if (arr32[i] === undefined) {
    continue
  }
  console.log(arr32[i])
}

// МНОГОМЕРНЫЕ МАССИВЫ

const table = new Array(10)
for (let i = 0; i < table.length; i++) {
  table[i] = new Array(10)
}
for (let row = 0; row < table.length; row++) {
  for (let col = 0; col < table[row].length; col++) {
    table[row][col] = row * col
  }
}
console.log(table)

// МЕТОДЫ МАССИВОВ

// ИТЕРИРУЕМЫЕ

// forEach

let arr = [1, 2, 3, 4, 5],
  sum = 0

let res = arr.forEach((item) => (sum += item))
//console.log(sum)

let array = []
let res2 = arr.forEach((v, i, a) => array.push((a[i] = v + 1)))
//console.log(array)

// map
//console.log(arr.map(item => sum += item))

// filter

//console.log(arr.filter(item => item > 3))
//console.log(arr.filter(item => item !== undefined && item !== null))
//console.log(arr.filter(() => true))

// reduce && reduceRight
let r = [1, 2, 3, 4, 5]
console.log(r.reduce((x, y) => x + y, 0))
console.log(r.reduce((x, y) => x * y))
console.log(r.reduce((х, у) => (х > у ? х : у)))

// find && findeIndex

let a = [1, 2, 3, 4, 5]
//console.log(a.findIndex(х => х === 3))
//console.log(a.find(х => х === 3))

// every && some

let aa = [1, 2, 3, 4, 5]
//console.log(aa.every(х => х < 10))
//console.log(aa.some(x => x > 4))

// flat flatMap

const f = [1, [2, [3, [4, [5, [6]]]]]]

console.log(f[1][1][1][1][0])
console.log(f.flat(10))

// организация стеков и очередей

// push pop
let stack = []
stack.push(1, 2)
stack.pop()
let a = []
a.push(...stack)

// unshift shift

let аaaa = []
aaaa.unshift(1)
aaaa.unshift(2)

// slice

let а564 = [1, 2, 3, 4, 5]
a564.slice(2, 4)
a564.slice(2)

// splice

let a6548 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a6548.splice(2, 4) // [1, 2, 7, 8, 9, 10]

let a65485 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a65485.splice(2, 4)
a65485.splice(2, 0, "a", "b")
a65485.splice(2, 0, "a", "b")

// fill
let аaaaa = new Array(5)
аaaaa.fill(0) // [0,0,0,0,0]
аaaaa.fill(9, l) // [0,9,9,9,9]
аaaaa.fill(8, 2, -1) // [0,9,8,8,9]

let arr1 = ["a", "b", "c"]
let arr2 = []
arr2 = arr1

arr1[0] = "ccc"
arr1 = arr2
arr2[0] = "arr2"

// методы поиска и сортировки массивов

//indexOf lastIndexOd

function c(array, elem) {
  let arr = []
  let pos = 0
  for (let i = 0; i < array.length; i++) {
    pos = array.indexOf(elem, pos)
    pos += 1
    if (pos === 0) break
    arr.push(pos)
  }
  return arr
}

let res = c([10, 2, 30, 3, 1, 4, 5, 6, 1, 1, 30, 1], 30)

// include

const array1 = [1, 2, 3, 2]
console.log(array1.includes(2))
console.log(array1.indexOf(NaN)) // -1

// sort

let a = [33, 4, 1111, 222]

let res = a.sort((a, b) => a - b)

console.log(res)

const arr = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 400 }]

let res2 = arr.sort((a, b) => a.a - b.a)

console.log(res2)

let arr2 = [
  { title: "a", q: "a" },
  { title: "b", q: "a" },
  { title: "c", q: "d" },
]

let res3 = arr2.sort((a, b) => a.title.localeCompare(b.title))

console.log(res3)

let res4 = ["A", "c", "a", "D", "F", "f"]

let r5 = res4.sort((a, b) => {
  let aa = a.toLowerCase(),
    bb = b.toLowerCase()
  if (aa < bb) return -1
  if (aa > bb) return 1
  return 0
})

console.log(r5)

// reverse

let arr5489 = [1, 2, 3, 4, 5]
arr5489.reverse()

// console.log("arr1", arr1)
// console.log("arr2", arr2)

let array = []
array[0] = "item1"
array[1] = "item2"
array[0] = "changed"

// toString

let ar235 = [1, 2, 3, 4, 5, 6000]

console.log(JSON.stringify(ar235))

let a = [1, 2, 3]
console.log(a.join())
console.log(a.join(""))
console.log(a.join(""))

let a56489 = new Array(10)
console.log(a56489.join("-"))

console.log(ar235.toString())
console.log(ar235.toLocaleString())

// СТАТИЧЕСКИЕ ФУНКЦИИ МАССИВОВ

console.log(Array.isArray(ar235)) // true

// ОБЬЕКТЫ, ПОХОЖИЕ НА МАССИВЫ

let obj156 = {}

let i = 0
while (i < 10) {
  obj156[i] = i
  console.log(i)
  i++
}
obj156.length = i
let total = 0
for (let i = 0; i < obj156.length; i++) {
  total += obj156[i]
}
console.log(total)

console.log(obj156)

let a = {
  0: "а",
  1: "b",
  2: "c",
  3: "d",
  length: 4,
}

console.log(Array.prototype.join.call(a, " "))
console.log(Array.prototype.map.call(a, (x) => x.toUpperCase()))
console.log(Array.prototype.slice.call(a, 0, 10))

console.log(Array.from(a))

// СТРОКИ ПОХОЖИ НА МАССИВЫ

let str956 = "JavaScript"

console.log(Array.prototype.map.call(str956, (x) => x.toUpperCase()))

// const narray = array.toString()
// console.log(narray)
// console.log(array.join(' '))

// concat slice splice

const myGirls = ["Cecilie", "Lone"]
const myBoys = ["Emil", "Tobias", "Linus"]
const myChildren = myGirls.concat(myBoys)
//console.log(myChildren)
const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
const citrus = fruits1.slice(0, 5)
// console.log(citrus)
const fruits2 = ["Banana", "Orange", "Apple", "Mango"]
fruits2.splice(0, 2, "Lemon", "Kiwi")
// console.log(fruits2)

// sort

const arrr = [4586, 321, 489, 321, 159651, 320, -23, -23, 654165, 4]
document.getElementById("array-number").innerHTML = arrr

function sortNumbers() {
  arrr.sort((a, b) => a - b)
  document.getElementById("array-number").innerHTML = arrr
}

// console.log(myChildren.sort())
// console.log(
//   arrr.sort((a, b) => {
//     return b - a
//   })
// )
// console.log(myChildren.reverse())

const ccc = [
  { brand: "Volvo", year: 2016 },
  { brand: "Saab", year: 2001 },
  { brand: "BMW", year: 2010 },
  { brand: "BMW", year: 2019 },
  { brand: "BMW", year: 2018 },
  { brand: "Volvo", year: 2018 },
]

let tt = ""
for (let i = 0; i < ccc.length; i++) {
  tt += ccc[i].brand + " " + ccc[i].year + "</br>"
}
document.getElementById("cars").innerHTML = tt

function sortCars() {
  ccc.sort((a, b) => {
    return a.year - b.year
  })
  let cc = ""
  for (let i in ccc) {
    cc += ccc[i].brand + " " + ccc[i].year + "</br>"
  }
  document.getElementById("cars").innerHTML = cc
}

const myData = [
  {
    itemIndex: 0,
    itemFmt: 0,
    itemFmtName: "A",
    guid: "d66af412-00a0-4c49-b8b5-abaefb79fed0",
    maxCt: 1,
  },
  {
    itemIndex: 1,
    itemFmt: 2,
    itemFmtName: "Call To Order",
    guid: "d66af412-00a0-4c49-b8b5-abaefb79fed0",
    maxCt: 1,
  },
  {
    itemIndex: 2,
    itemFmt: 6,
    itemFmtName: "Title/Discussion/Motion",
    guid: "9f7b9d34-3fcb-42c7-866e-a56f71a8aa4f",
    maxCt: 0,
  },
  {
    itemIndex: 4,
    itemFmt: 6,
    itemFmtName: "Title/Discussion/Motion",
    guid: "406bea5e-1cb0-4d90-96e9-9b80b64ff8ba",
    maxCt: 0,
  },
  {
    itemIndex: 5,
    itemFmt: 6,
    itemFmtName: "Title/Discussion/Motion",
    guid: "ad9aacda-5100-4eef-9ead-c61e1ec0c285",
    maxCt: 0,
  },
  {
    itemIndex: 7,
    itemFmt: 3,
    itemFmtName: "Roll Call",
    guid: "1715f7a3-066d-4787-8233-a36df2a729a9",
    maxCt: 1,
  },
]

// sort by itemFmtName in alphabetical order
myData.sort((a, b) => a.itemFmtName.localeCompare(b.itemFmtName))
myData.sort((a, b) => a.itemIndex - b.itemIndex)

let str = ""
for (let i = 0; i < myData.length; i++) {
  str += myData[i].itemFmtName + "</br>"
  // document.getElementById("str").innerHTML = str
}

let num = ""
for (let i = 0; i < myData.length; i++) {
  num += myData[i].itemIndex + "</br>"
  // document.getElementById("num").innerHTML = num
}

// Math.min.appply Math.max.apply

let newArrayItems = []
for (let i = 0; i < ccc.length; i++) {
  newArrayItems.push(ccc[i].year)
}
document.getElementById("array-min").innerHTML = arrrMin(newArrayItems)
function arrrMin(arr) {
  return Math.min.apply(null, arr) + " min year"
}

// forEach

const arrayPush = []

// const forEach = arrr.forEach(e => arrayPush.push(e))
const forEach = arrr.forEach((e) => {
  if (e !== 321) {
    arrayPush.push(e)
  }
})
// console.log(arrayPush)

// map

// console.log(
//   arrr.map((element, index) => {
//     return element
//   })
// )
//console.log(arrr.map(value => value +1))
// arrr.map(e => {
//     if (-23 === e) {
//         //console.log('-23 in array')
//         // console.log(e)
//     }
// })
// console.log(arrr.map((value, index, array) => {
//     return value + 10000
// }))
//console.log(arrr.map(gsagasg))
//const fgdsdgagafgs = arrr.map(gsagasg)
//console.log(fgdsdgagafgs)

function gsagasg(value, index, array) {
  return value > 100000
}

// filter

const fgdsfgs = arrr.filter(gsagasg)
// console.log(arrr.filter((value) => value > 10000))

//console.log(fgdsfgs)
function gsagasg(value, index, array) {
  return value > 10
}

// reducer

// console.log(arrr)
// console.log(arrr.reduce((value, total) => console.log(value, total)))

const gsdga = arrr.reduce(gsagasg)
//console.log(arrr.reduce((value, total) => value + total))

//console.log(gsdga)
function gsagasg(total, value, index, array) {
  return total + value
}

// find
const findArray = ["first", "two", "second", "second"]
// console.log(findArray.find((value) => value === "second"))

const find = ccc.find(function (car) {
  return car.brand === "BMW"
})

// console.log(ccc.find((value) => value.brand === "BMW" && value.year === 2019))
//console.log(find)

//indexOf

// console.log(findArray.indexOf("first"))

// findIndex

const fruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango", "ASDASDADASD"]
// console.log(fruitss.findIndex((value) => value.length >= 10))

fruitss.findIndex(myFunction)
function myFunction(value, index, array) {
  return value === "Lemon"
}

// every

// console.log([12, 11, 15, 130, 44].every((value) => value >= 10))

// some

const ages = [3, 10, 18, 19, 25]
//console.log(ages.some(checkAdult))

// console.log(ages.some((value) => value > 20))

function checkAdult(age) {
  return age === "hi"
}

const fruits11 = ["Banana", "Orange", "Apple", "Mango"]
// console.log(fruits11.join(" "))

/*

const fruits = ["Banana", "Orange", "Apple", "Mango"]

fruits[fruits.length] = "Kiwi";
fruits.length - 1 // last index
fruits[fruits.length - 1] // last elelent 


console.log(fruits.toString())
console.log(fruits.join("/"))


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon")
fruits.shift()
console.log(fruits)

const fruit = ["Banana", "Orange", "Apple", "Mango"]
fruit.push("Kiwi")
fruits.pop()
console.log(fruits)




const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;
for (let i = 0; i < fLen; i++) {
    console.log(fruits[i])
}





const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.reverse())

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort())


const num = [156, 2, 15, 0.5, 8, 0]
document.getElementById("demo").innerHTML = num 

function sortFunct(a, b){
    num.sort(function(a, b){return b - a})
    document.getElementById("demo").innerHTML = num
}
console.log(num.sort(function(a, b){return 0.5 - Math.random()}))


function myArrayMax(max) {
    return Math.max.apply(null, max);
  }
function myArrayMin(min) {
    return Math.min.apply(null, min);
  }
console.log(myArrayMax(num))
console.log(myArrayMin(num))


const cars = [
    {brand:"Volvo", year:2016},
    {brand:"Saab", year:2001},
    {brand:"BMW", year:2010}
  ]
console.log(cars.sort(function(a, b){return b.year - a.year}))
console.log(cars.includes('Saab'))



const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const index = fruits.indexOf('Banana')
fruits[index] = 'Ananas'

const index = cars.findIndex(function(car) {
    return car.brand === 'BMW'
})
console.log(cars[index])


const find = cars.find(function(car) {
    return car.brand === 'BMW'
})
console.log(find)


const numbers = [1,2,3,4,5,6,7,8,9,10]

console.log(numbers.map(num => {
    return num **9
}))

console.log(numbers.filter(num => {
    return num < 5
}))

console.log(numbers.reduce((num, total) => {
    return num + total
}))



const numbers = [1,2,3,4,5,6,7,8,9,10]

console.log(numbers.map(num => {
    return num * 10
}))

const arr = (arr) => {
    return arr.map((i) =>{
        return i * 10
    })
}
console.log(arr(numbers))



const numbers = [1,2,3,4,5,6,7,8,9,10]

Array.prototype.exp = (n) => {
    return n * 10
}

console.log(numbers.map(num => {
    return num * 10
}))

console.log(numbers.exp(numbers))

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let date = new Date();
let month = months[date.getMonth()];
let mm = date.getMonth()
console.log(mm)

console.log(month);



//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(2, 0, "Lemon", "Kiwi");
//console.log(fruits)

const numbers = [99, 4, 9, 16, 25];

function myFunction(value, index, array) {
  if (value === 45) {
      console.log('45 in array') 
  } else {
      console.log('45 not in array')
  } 
}

numbers.forEach(myFunction)
*/

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
fruits.findIndex(myFunction)
//const i = fruits.indexOf('Banana')
//fruits[index] = 'Ananas'
//console.log(i)

const numbers = [4, 9, 16, 25, 29]
let first = fruits.findIndex(myFunction)

function myFunction(value, index, array) {
  return value === "Lemon"
}

//console.log(first)

const q = [4, 9, 16, 25]
const newArr = q.map(Math.sqrt)
//console.log(newArr)

// let obj = [
//   {
//     person: "John",
//     age: "27",
//     married: true,
//     isProgrammer: true,
//   },
// ]

//console.log(obj.map(o => {
//if (o.person === 'John') {
//console.log('Yes')
//} else {
//console.log('No.')
//}
//}))

n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//console.log(n.filter(num => {
//if (1 === num) {
//console.log('1 in array')
//}
//}))

//console.log(n.reduce((num, total) => {
// return num + total
//}))

// const f = ["Banana", "Orange", "Apple", "Mango"]
//console.log(f.includes("Banana"))

const qq = ["Banana", "Orange", "Apple", "Mango"]
const qqqq = qq.entries()

for (let x of qqqq) {
  //console.log(x)
}

//console.log([12, 11, 15, 130, 44].every(elem => elem >= 10))
