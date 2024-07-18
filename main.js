// console.log('hello there')
// console.log(10 + 15)

// var x = 10

// var x = 20

// // hoisting ----> important interview question
// // es6 ----> 2015

// let y = 15

// let name = 'ashmitha'

// name = true

// name = 10

// const pi = 3.14

// // + -> add
// // - -> sub
// // / -> division
// // // ->
// // * -> mul
// // ** -> exponent
// // % -> modulo
// // ++ -> increment
// // -- -> decrement

// console.log(20 + 10)
// console.log('20' + 10) // weird
// console.log(20 - 10)
// console.log(20 * 10)
// console.log(2 ** 3) //2 pow 3
// console.log(35 / 10)
// console.log(35 % 10)
// var x = 10
// console.log(x++)
// x++
// console.log(++x)

// //conditional op

// // <, <=, >, >=,  ==, === !=

// console.log(20 < 10)
// console.log(20 <= 10)
// console.log(20 > 10)
// console.log(20 >= 10)
// console.log(10 == 10)
// console.log('10' == 10, 'shallow')
// console.log(10 === 10)
// console.log(10 === 10)
// console.log('10' === 10, 'deep')
// console.log(10 != 10)

// console.log(5 < 3 ? true : false)

// //logical ops

// if (20 > 10 && 30 > 10) {
//   console.log('20 is greater 10')
// } else {
//   console.log('10 is greater')
// }

// // and
// // true && true -> true
// // true && false -> false
// // false && true -> false
// // false && false -> false

// // //or
// // true || true -> true
// // true || false -> true
// // false || true -> true
// // false || false -> false

// // !5>3

// const arr = [10, 'ashmitha', true]
// console.log(typeof arr)

// const ash = undefined

// console.log(ash)

// const kum = null

// console.log(kum)

// console.log(praveen)

// var praveen = 'praveen'

// // console.log(praveen)

// someFunc()

// function someFunc() {
//   console.log('I am being hoisted')
// }

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

// console.log(animals.slice(2))

// for (let i = animals.length - 1; i >= 0; i--) {
//   console.log(animals[i])
// }

// const car = {
//   name: 'Suzuki',
//   model: 'Baleno',
//   year: 2020,
//   engine: true,
//   seats: 5,
//   owners: ['ashmitha', 'zuber']
// }

// console.log(Object.entries(car))

// // console.log(arr1)

// console.log(Math.random() * 10)

// //05-jul class

// const array1 = [1, 2, 3, 4]

// const array2 = array1

// console.log(array2, 'today arr reference')

// array2.push(5)

// console.log(array2, 'today arr reference')
// console.log(array1, 'today arr reference')

//08-05-24

//DOM- Manipulation
// console.log(document)

const btn = document.getElementById('click-btn')
const dateParent = document.getElementById('date-parent')

// console.log(btn)
btn.addEventListener('click', (event) => {
  event.preventDefault() // to prevent submit and reload
  event.stopPropagation() // to avoid bubbling
  const hTag = document.getElementById('h-tag')
  if (!hTag) {
    const todayDate = new Date()
    // console.log(todayDate)
    const hTag = document.createElement('h2')
    hTag.id = 'h-tag'
    hTag.textContent = todayDate
    hTag.classList.add('btn')
    dateParent.appendChild(hTag)
  } else {
    alert('already tag exists')
  }
})

//11-07-24

const pTag = document.getElementsByClassName('p-tag')

console.log(pTag)
pTag[0].addEventListener('click', () => {
  const title = document.getElementById('title')
  title.classList.toggle('hidden')
  title.style.color = 'red'
  title.classList.add('title-class')
})

const img = document.getElementsByTagName('img')
const sideBar = document.getElementById('side-bar')
console.log(img)
img[0].addEventListener('click', () => {
  if (sideBar.style.display === 'none') {
    sideBar.style.display = 'block'
  } else {
    sideBar.style.display = 'none'
  }
})

const submitBtn = document.querySelector('#submit-btn')
submitBtn.addEventListener('click', (event) => {
  console.log('clicked')
  event.preventDefault()
})

const modalBtn = document.getElementById('modal-btn')

modalBtn.addEventListener('click', () => {
  const modalWrapper = document.getElementById('modal-wrap')
  modalWrapper.classList.toggle('wrapper-hide')
})

const API_KEY = '050163317b090e3fc1f7e82d746dd313'

const API_BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=${API_KEY}`

console.log('going to fetch')
fetch(API_BASE_URL).then((res) =>
  res.json().then((data) => {
    console.log(data)
  })
)

