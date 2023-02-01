console.log("JavaScript".replace(/java/i, "Type"))

console.log(
  "\nVisit \nW3Schools \nis \ngood \nschool a school now 20 student ".replace(
    /w3schools/i,
    "w4school"
  )
)
console.log(
  "\nVisit \nW3Schools \nis \ngood \nschool a school now 20 student ".match(
    /[a-d]/g
  )
)
console.log(
  "\nVisit \nW3Schools \nis \ngood \nschool a school now 20 student ".match(
    /[1-4]/g
  )
)

console.log(
  "\nVisit \nW3Schools \nis \ngood \nschool a school now 20 student ".search(
    /v/i
  )
)

// Определение регулярных выражений

let pattern = /s$/

// Классы символов

// [abc] [^.+] [^...] [...]
// [^a-zA-Z0-9]
// [\d\s]

// . Любой символ за исключением символа новой строки или другого разделителя строк Unicode.

// \w Любой символ слов ASCII. Эквивалентно [a-zA-Z0-9_]
// \W Любой символ, который не является символом слов ASCII. Эквивалентно [Aa -zA -Z 0 -9 _ J

// \s Любой пробельный символ Unicode
// \S Любой символ, не являющийся пробельным символом Unicode

// \d Любая цифра ASCII. Эквивалентно [0-9]
// \D Любой символ, отличающийся от цифры ASCII. Эквивалентно [ ^0-9]

console.log(
  "carmen xsx x&x x-x xaaax \n new string \n new string".match(/\n.+/g)
)

// Повторение
console.log("carmen xsx x&x x-x xaaax".replace(/x.x/g, "r"))
console.log("carmen x xssssx x&x x-sx xassaax".match(/x.+x/g))
console.log("carmen x xababx x&x x-sx xassaax".match(/x(ab)+x/g))
console.log("carmen x xssssx x&x x-sx xassaax".match(/x.*x/g))
console.log("carmen xssssx x&x x-sx xassaax".match(/x.?x/g))

console.log("carmen xssssx x&x x-sx xassaax xxxxxx".match(/x.{5}x/g))
console.log("carmen word pencil book car".match(/\w.{1,}/g))
console.log("carmen word pencil book car".match(/\s?\w.{1,5}\d?/g))

// Чередование, группирование и ссылки

console.log("1234 fdfasd javascript".match(/\d{4}|asd|java(script)?/g))
console.log("abcddfg cdabgfd gfdgdef ".match(/(ab|cd)+|ef/g))
console.log("asdd123 32 2 31a".match(/[a-z]+\d+/g))

console.log(
  "cakctusinc@gmail.org  cakctusinc@outlook.com cakctusinc@outlook.net".match(
    /[a-zA-Z0-9]{1,15}@(gmail|yahoo|outlook).(com|org)/gm
  )
)
// карманы
console.log("abcbcbcbc".match(/a(bc)+/))
console.log("canada britishcolumbia".match(/canada\s?(\w.+)/))
console.log("canada calgary".match(/canada\s?(\w.+)/))

console.log("a@b aa@bb".replace(/([a-z])+@([a-z])+/g, "$2@$1"))

// $` до совподения
// $' после совподения

// Указание позиции соответствия

// ^ Соответствует началу строки или при наличии флага m началу линии в строке
// $ Соответствует концу строки или при наличии флага m концу линии в строке

// Флаги

// g
// i
// m

// ([J|j])ava\w+
// \bJava\b

// Строковые методы для сопоставления с образцом

// search() не поддерживает глобальный поиск

console.log(
  "programmer javascript javascript JavaScript programmer language javascript".search(
    /javascript/i
  )
)

// replace

console.log("javascript".replace(/javascript/gi, "JavaScript"))

// match

console.log("1, 25 dsa 25632".match(/\d+/g))

// matchAll

const words = /\b\p{Alphabetic}+\b/gu
const text = "This is a nanve test of the matchAll () method."

for (let word of text.matchAll(words)) {
  console.log(word)
}

console.log("xx xax xaax xaaax carmen xbx carmen ".replace(/c....n/g, "r"))

console.log("carmen luisa mark donna carmen carmen xaaax".replace(/xa+x/g, "r"))
console.log("xababababx xababx xaabbx".replace(/x(ab)+x/g, "r"))

console.log("aa+x ax aax aaax".replace(/aa\+x/g, "r"))
console.log("carmen luisa n mark".replace(/c.+?n/g, "r"))
console.log("carmen luisa n mark xa000asdax".replace(/x.{1,50}?x/g, "r"))
console.log("xx xax xaax xaaax".replace(/xa{2}x/g, "r"))

console.log(
  "xababababx xababx xaabbx DASD DASD ASD 156".replace(/([A-Z])\w+/g, "r")
)

console.log("1 12 123a w Abc @@@".replace(/\w+/g, "!"))

console.log("aaa aaa aaa".replace(/^aaa/g, "!"))
console.log("aaa aaa aaa".replace(/[a^]+/g, "!"))
console.log("aaa aaa aaa bbb".replace(/a+|b/g, "!"))
// [^a-z] [a^]
// [abc]+

// \s\d{1,2}

// \a|b{1,5}|c

console.log(/^[a-zA-Z-.]+@[a-z]+\.[a-z]{1,3}$/.test("my.mail@mail.com"))
