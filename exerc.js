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

calculaMedia()

//EX3
let numero1 = 4

function calculaDobro(a){
    let resultado = a * 2
    return resultado
}
calculaDobro()
