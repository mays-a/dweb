//arays ou lista
//declaracao de arrays
//             0        1         2         3
let cores = ['Azul','Amarelo','Vermelho','Verde']
console.log(cores)

//acessar item da lista
console.log(cores[0])

//propriedade length
console.log(cores.length) //4

let ultimoElemento= cores[cores.length-1]
console.log(ultimoElemento)

//adicionar elementos
const notas=[10, 6, 8]
//push: adicionar elementos no final do array
notas.push(9)
console.log(notas)

//unshift: adiciona elementos no início do array
notas.unshift(5)
console.log(notas)

//deletando itens do arrays
//pop: deletar o último item do array
notas.pop()
console.log(notas)

//shift: deletar o primeiro item da lista
notas.shift
console.log(notas)
