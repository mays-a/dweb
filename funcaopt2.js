// funções são blocos reutilizáveis
// parâmetros, com retorno


//função parâmetro com retorno, passa a variável na função
let numero1 = 4
let numero2 = 5

function calculoSoma(a,b){
    let resultado = a + b
    return resultado
}


console.log(calculoSoma(numero1,numero2))
console.log(calculoSoma(10,18))

//função sem retorno
let idade = 18

maiorDeIdade()

function maiorDeIdade(){
    if (idade >=18){
        console.log("Maior de idade")
    }else{
        console.log("Menor de idade")
    }
} 

//função com retorno
letp1 = 2
letp2 = 3

function funcao (p1,p2){
    return p1 * p2
}
console.log(funcao(10,2))

//funções declarativas (sem retorno)
 
function saudacao(){
    console.log("Olá mundo")
}
