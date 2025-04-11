// Função declarativa, permite chamar a função em qualquer linha do código
// Função sem parâmetro e sem retorno
function mostrarHoraLocal (){
  let hora = new Date()
  console.log(`Hora de agora: ${hora.toLocaleTimeString()}`)
}
mostrarHoraLocal () 

function mensagem (){ //pode chamar em qualquer lugar
  console.log("Olá mundo")
}
mensagem()

//---------------------------------------------------------------

//função declarativa com parâmetro
function cumprimentar(nome, idade) {
  console.log(`Olá, ${nome}`) //template string, converte tudo em string
  console.log(`Idade: ${idade}`) // ("Idade: + idade")
}

cumprimentar("Maysa💖✨🎠", 16)
cumprimentar("Gabi💖🎶🎀", 15)

//---------------------------------------------------------------

// Função de expressão
const mensagem1 = function(){ //só pode chamar depois da função ser declarada
  console.log("Olá Turma")
}
mensagem1()

//---------------------------------------------------------------

//ARROW FUNCTION ou função de seta
const mensagem2 = () => "Olá" // usa quando a função é pequena, 1 ou 2 linhas
mensagem2()

const mensagem3 = (nome) => `Olá ${nome}`
mensagem3("Eduardo")

//---------------------------------------------------------------
// Função com retorno
let a = 6
let b = 6
function soma(num1, num2){
  return num1+num2 //return resultado
}
let resultado = soma(8,8)
console.log(resultado)
console.log(soma(a, b))

//---------------------------------------------------------------

//diferença do var e do let
function testeVar(){
  if(true){
    var x = 10 //var - pode chamar em qualquer lugar, mesmo dentro e fora do if
  }
  console.log(x)
}
testeVar()

function testeLet(){
  if(true){
    let y = 20 //let - só vai funcionar dentro do bloco de instrução, do if
  }
  console.log(y)
}
testeLet()

//---------------------------------------------------------------

 // EX1
 let nome = "Maysa"
 let idade = 16
 let bool = true

 console.log(typeof nome)
 console.log(typeof idade)
 console.log(typeof bool)

 //EX2
let nota1 = 10
let nota2 = 9
let nota3 = 8

function calculaMedia(a,b,c){
    resultado = a+b+c/3
    if(resultado>=7){
        console.log("Aprovado")
    }else{
        console.log("Reprovado")
    }
}
calculaMedia(nota1,nota2,nota3)

//EX3
let numero1 = 4

function calculaDobro(a){
    let resultado = a * 2
    return resultado
}
calculaDobro(numero1)
