//Exercício 1:

let cliente = "Maria"
let maiorDeIdade = true
let saldo = 100

console.log(typeof cliente)
console.log(typeof saldo) 
console.log(typeof maiorDeIdade)
//-------------------------------------------------------
//Exercício 2:

 let nota = 8
let nota2 = 7
let nota3 = 10
function media(a,b,c){
    let resultado = (a + b + c)/3
    if (resultado >=7){
        console.log("Aprovado")
    }else{
        console.log("Reprovdo")
    }
    return resultado
}
console.log(media(nota,nota2,nota3))
//--------------------------------------------------------
//Exercício 3:

let chuva = true
function chovendo(){
    if ( chuva=true){
        console.log("Leve um guarda-chuva")
    }else{
        console.log("Não precisa levar um guarda-chuva")
    }
}
chovendo()
//---------------------------------------------------
//Exercício 4:

let numero = 5

function soma(a){
    let resultado = a*2
    return resultado
}
    
console.log(soma(numero))
//----------------------------------------------------
//Exercício 5:

let idade = 15
function maiorDeIdade(){
    if (idade >=18){
        console.log("Maior de idade")
    }else{
        console.log("Menor de idade")
    }
} 
maiorDeIdade()
//----------------------------------------------------
//Exercício 6:

function cumprimento (nome){
  console.log(`Olá, ${nome}`) 

}
cumprimento('Ana👍😎🎉💖🎂✔')
