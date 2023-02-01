// Форматирование чисел

// Intl.NumberFormat()  "decimal", "percent", "currency", "unit", "decimal"

const number = 123456.789

console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number
  )
)

console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    number
  )
)

console.log(
  new Intl.NumberFormat("md-MD", {
    style: "currency",
    currency: "MDL",
    useGrouping: true,
    minimumIntegerDigits: 1,
  }).format(100)
)

console.log(
  new Intl.NumberFormat("md-MD", {
    style: "unit",
    unit: "kilometer-per-hour",
  }).format(56)
)

console.log(
  new Intl.NumberFormat("md-MD", {
    style: "percent",
  }).format(0.8)
)

console.log(
  new Intl.NumberFormat("md-MD", {
    style: "unit",
    unit: "centimeter", // liter
    unitDisplay: "long",
  }).format(0.8)
)

console.log(
  new Intl.NumberFormat("md-MD", {
    style: "decimal",
    unit: "centimeter", // liter
  }).format(12.5)
)

const formatData = new Intl.NumberFormat("md-MD", {
  style: "percent",
  maximumSignificantDigits: 1,
  minimumSignificantDigits: 1,
}).format

console.log([0.5, 1, 0, 5, 2, 1].map(formatData))

console.log(new Intl.NumberFormat("md-MD").format(number))

console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 1 }).format(number)
)

// Intl.DateTimeFormat()

const d = new Date()

const opts = {
  year: "2-digit", // numeric, 2-digit
  month: "short", // 1, 2-digit, long, short, narraow
  day: "2-digit", // numeric, 2-digits
  weekday: "long", // long, short, narrow
  hour: "numeric", // numeric, 2-digit
  minute: "numeric", // numeric, 2-digit
  timeZoneName: "long",
}

console.log(new Intl.DateTimeFormat("md-MD", opts).format(d))

// Intl.Collator()

console.log(["Z", "a", "z", "ä"].sort(new Intl.Collator("de").compare))

console.log(
  ["ă", "a", "A", "b", "î", "ș", "ț", "ş"].sort(new Intl.Collator("md").compare)
)

const collator = new Intl.Collator("md", { numeric: true, caseFirst: "upper" })
  .compare

const array = ["ă", "a", "page 2", "A", "b", "page 1", "î", "ș", "ț", "ş"]

console.log(array.sort(collator))

// Intl.ListFormat()

const vehicles = ["Motorcycle", "Bus", "Car"]

const formatter = new Intl.ListFormat("ro", {
  style: "long",
  type: "conjunction",
})
console.log(formatter.format(vehicles))

const vehicles1 = ["Motorcycle", "Bus", "Car"]

const formatter1 = new Intl.ListFormat("ro", {
  style: "short",
  type: "disjunction",
})
console.log(formatter1.format(vehicles1))
