// Сериализация и разбор данных в формате JS0N

const car = {
  car: "Honda",
  engine: "2.0",
  fuel: "gas",
  type: "SUV",
}

console.log(JSON.stringify(car, ["car", "engine", "fuel"], 2))

const d = new Date()

const jsonDate = d.toJSON()

//console.log(jsonDate)
//console.log(d.toISOString())
