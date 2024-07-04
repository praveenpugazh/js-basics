console.log('hello there')
console.log(10 + 15)

var x = 10

var x = 20

// hoisting ----> important interview question
// es6 ----> 2015

let y = 15

let name = 'ashmitha'

name = true

name = 10

const pi = 3.14

// + -> add
// - -> sub
// / -> division
// // ->
// * -> mul
// ** -> exponent
// % -> modulo
// ++ -> increment
// -- -> decrement

console.log(20 + 10)
console.log('20' + 10) // weird
console.log(20 - 10)
console.log(20 * 10)
console.log(2 ** 3) //2 pow 3
console.log(35 / 10)
console.log(35 % 10)
var x = 10
console.log(x++)
x++
console.log(++x)

//conditional op

// <, <=, >, >=,  ==, === !=

console.log(20 < 10)
console.log(20 <= 10)
console.log(20 > 10)
console.log(20 >= 10)
console.log(10 == 10)
console.log('10' == 10, 'shallow')
console.log(10 === 10)
console.log(10 === 10)
console.log('10' === 10, 'deep')
console.log(10 != 10)

console.log(5 < 3 ? true : false)

//logical ops

if (20 > 10 && 30 > 10) {
  console.log('20 is greater 10')
} else {
  console.log('10 is greater')
}

// and
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

// //or
// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false

// !5>3

const arr = [10, 'ashmitha', true]
console.log(typeof arr)

const ash = undefined

console.log(ash)

const kum = null

console.log(kum)

console.log(praveen)

var praveen = 'praveen'

// console.log(praveen)

someFunc()

function someFunc() {
  console.log('I am being hoisted')
}

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2))

for (let i = animals.length - 1; i >= 0; i--) {
  console.log(animals[i])
}

const car = {
  name: 'Suzuki',
  model: 'Baleno',
  year: 2020,
  engine: true,
  seats: 5,
  owners: ['ashmitha', 'zuber']
}

console.log(Object.entries(car))

// console.log(arr1)

console.log(Math.random() * 10)

