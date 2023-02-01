var x = 10
let y = 10
const q = 10

let status = 'processing'

if (status == 'processing') {
    console.log('You are in processing')
} else if (status == 'done') {
    console.log('Done')
} else  {
    console.log('Fine')

}

status = true

status ? console.log('Status is true') : console.log('status is false')



age = prompt('Your age?')
window.alert(5 + 6)
alert(5 + 6)

// document.getElementById("demo").innerHTML = 5 + 6

// document.write(5 + 6)

function returnAge(year) {
    return 2022 - year
}

function info(name, year) {
    const age = returnAge(year)
    if (age > 0) {
        console.log(name + age)
    } else {
        console.log('This is a future') 
    }
    
}
info('John ', 1994)
info('Alina ', 1997)
info('Matthew ', 2023)

const cars = ['Honda', 'Hyundai', 'VW']
cars[cars.length] = 'Land Rover'
let cLen = cars.length
let car = cars[0]
let text = ''

for (let i = 0; i < cLen; i++) {
    text += cars[i] + ' ' 
    let car = cars[i]
    console.log(car)
  }


for (let car of cars) {
    let c = car
    console.log(c)
}

const person = {
    firstName: "John",
    lastName : "B",
    currentYear: 2022,
    birthDay: 1994,
    hasWife: true,
    hasChildren: false,
    age: function() {
        return this.currentYear - this.birthDay;
    },
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
  };
person.isFather = false
key = 'age'
console.log(person.age())
console.log(person['firstName'])
console.log(person[key])



