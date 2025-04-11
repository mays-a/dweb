//tipos de dados
let nome = 'Pedro' // variável
let numero = 20
let bool = false 

console.log(numero)  // console.log = print

//conversão de tipos
console.log("ano"+ 2025)
console.log("3"+"5")

//conversão explícita
console.log(parseInt("3")+ parseInt("5")) //parseint deixa string para int, parsefloat deixa em float

//conversão implícita
console.log("10"/"2")  //transforma string em int automaticamente

let cliente = "Maria"
let maiorDeIdade = true
let saldo = 100

console.log(typeof cliente) //identifica tipos
console.log(typeof saldo) 
console.log(typeof maiorDeIdade) 

cliente = "Rafael"
console.log(cliente)

const nome = "Luis" //constante, não pode ter seu valor alterado
nome = "João"
