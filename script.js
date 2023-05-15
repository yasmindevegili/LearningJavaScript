console.log("Hello world JavaScript!")

//console
console.error("Este é um erro!")
console.warn("Esse é um warn!")

//variáveis
var x = 10
//mais moderno
let y = 26
const z = 60

if(1){
    let y = 55   
}

console.log(x, y, z)

//tipos de dados
const name = "Yasmin"
console.log(name)
console.log(typeof name)

const quantity = 5
console.log(quantity)
console.log(typeof quantity)

const number = 5.8
console.log(number)
console.log(typeof number)

const isApproved = false
console.log(isApproved)
console.log(typeof isApproved)

let surname = null
console.log(surname)
console.log(typeof surname)

let age
console.log(age)
console.log(typeof age)

const languages = ["Java", "PHP", "Python"]
console.log(languages)
console.log(typeof languages)

const user = {email:'yasmin@gmail.com', passwd:'teste', age:30} //object literals
console.log(user)
console.log(typeof user)

//métodos de string
const fullName = "Yasmin Devegili"

console.log(fullName.length)

const stringToArray = fullName.split(' ')
console.log(stringToArray)
console.log(fullName.toLowerCase())
console.log(fullName.toUpperCase())
console.log(fullName.indexOf('s'))
console.log(fullName.slice(0, 7))

//métodos de array
const list = ['a', 'b', 'c','d']
console.log(list.length)
console.log(list[2])
list.push('g')
console.log(list)
list.pop()
console.log(list)

//objetos
const product = {
    name: 'Camisa',
    price: 15.99,
    inStock: true,
    sizes: ['P', 'M', 'G'],
    'Main Color': 'Blue',
}

console.log(product.name)
console.log(product['name'])
console.log(product['Main Color'])

//destructuring
const {price, inStock} = product

console.log(price)
console.log(inStock)

const [n1, n2] = list
console.log(n1)
console.log(n2)

//JSON
const dog = {
    name: 'Shark',
    age: 10,
}

const json = JSON.stringify(dog)
console.log(json)

const obj = JSON.parse