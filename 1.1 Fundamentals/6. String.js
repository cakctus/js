const time = new Date().getHours()

if (time < 12) {
  greeting = "Morning"
} else if (time < 18) {
  greeting = "Day"
} else {
  greeting = "Evening"
}

//console.log(`Now is ${greeting}, and time is ${time > 10 ? 'a': 'b'}`)

// console.log("two\nlines")

const string1 = "string1"
const string2 = "string1"
// console.log(string1 === string2)

const txt = "JavaScript"

//let part = txt.slice(7)
//let part = txt.substring(7, 13)
// The difference is that substring() cannot accept negative indexes.
//let part = txt.substr(7, 5) // The difference is that the second parameter specifies the length of the extracted part.

// convert lenght slice

// const typeOfS =  String(1)
// console.log(typeof typeOfS)

// let length = txt.length
// console.log(length)

// let part = txt.slice(-12, -6)
// console.log(part)

//  replace repeat contact

// let newText = txt.replace(/JAVA/i, "Type");
// console.log(newText)
// let result = txt.repeat(5);
// console.log(result)
// let text2 = "World";
// let text3 = txt.concat(" ", text2);
// console.log(text3)

// trim tripStart tripEnd

//let text2 = txt.trim() txt.trimStart() txt.trimEnd()
//let padded1 = txt.padStart(20, "d")
//let padded2 = text.padEnd(5, 2);

// toUpperCase toLowerCase

//let text2 = txt.toUpperCase()
// let text2 = txt.toLowerCase();

// startsWith endsWith

//let text = "Hello world, welcome to the universe."
//let start = text.startsWith("welcome", 13)
//let end = text.endsWith("Hello")

// charAt

//let char = txt.charAt(8)
//let char = txt.charCodeAt(0);

// indexOf lastIndexOf search

let strr = "Please, Please locate, Please where 'locate' occurs!"
let indexx = strr.indexOf("Please")
let index = strr.indexOf("Please", indexx + 1)
// console.log(index)
// let index = strr.lastIndexOf("locate");
// console.log(index)
// let index = strr.search("locate");
// console.log(index)

// includes

let t = "Hello world, welcome to the universe."
let includes = t.includes("world")
//console.log(includes)

let text = "How are so good day f you f doing f today?"
const myArray = String(text.split(" f"))
const arr = [myArray[2]]

let textt = "The rain in SPAIN stays mainly in the plain"
let result = textt.match("SPAIN")
