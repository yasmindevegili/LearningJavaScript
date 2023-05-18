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

const obj = JSON.parse(json)
console.log(obj)

//Estruturas condicionais
const a = 10

if(a > 8) {
    console.log('A é maior que 8')
}

const b = "Yasmin"

if(b === "João") { //triple equal = validação de tipo e valor
    console.log('O nome é João')
}else{
    console.log('O nome é ' + b)
}

const n = 14

//if ternário
let teste = n < 20 ? 'Yes' : 'No'
console.log(teste)

//Estruturas de repetição
const myList = [1, 2, 4, 5]
let counter = 0

while(counter < myList.length){
    console.log(myList[counter])
    counter++
}

const mySecondList = ['a', 'b', 'c']

for(let counter = 0; counter < mySecondList.length; counter++){
    console.log(`Imprimindo: ${mySecondList[counter]}`) //template literals
}

//Métodos de array -> repetição
const names = ['Yasmin', 'Maria', 'Pedro']
names.forEach(function(name){
    console.log(`O nome é: ${name}`)
})

//Métodos de array -> modificação
const modifiedNames = names.map(function(name){
    if(name === 'Yasmin'){
        return (name = 'Sra. Yasmin')
    }else{
        return name
    }
})

console.log(modifiedNames)

const bigNumbers = [1, 3, 5, 6 , 7].filter(function(number){
    return number >= 5
})

console.log(bigNumbers)

const sumAll = [10, 30, 50].reduce(function(total, number){
    return total + number
})

console.log(sumAll)

//Funções
function minhaFuncao(){
    console.log("Olá")
}

minhaFuncao()


//Arrow function
const myArrow = (a, b) => {
    return a + b
}

console.log(myArrow(2, 5))

//Classes
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productDetails() {
        return `O nome do produto é ${this.name} e o preço é ${this.price}`
    }
}

const socks = new Product('Meia Branca', 10.99)
const shirt = new Product('Camisa preta', 22.99)

console.log(socks.name)
console.log(socks.price)
console.log(shirt.name)
console.log(shirt.productDetails())

//herança
class SuperProduct extends Product{
    constructor(name, price, size) {
        super(name, price)
        this.size = size
    }

    //static
    static sayHello(){
        console.log('Hello')
    }
    
}

const tenis = new SuperProduct('Tenis Vermenlho', 59.00, '43')
console.log(tenis)
SuperProduct.sayHello()