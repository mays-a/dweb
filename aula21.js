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

//método slice
//slice(início, fim)
const listaDeEstudantes= ['João','Paulo', 'Juliana','Ana','Caio','Lara','Aline','Guilherme','Carlos','Renata']
console.log(listaDeEstudantes)

const sala1 =listaDeEstudantes.slice(0,listaDeEstudantes.lenth/2) //5
const sala2 =listaDeEstudantes.slice(listaDeEstudantes.lenth/2) 

console.log(sala1)
console.log(sala2)

//splice(inicio, quantidade, elemento a ser adicionado). Substitui elementos da lista
sala2.splice(2,2,'Rodrigo')
console.log(sala2)

//concatenar listas
//concat
const salaJs = ['Evandro','Camila']
const salaPy = ['Juliana','Leonardo','Raquel']

const salasUnidas = salaJs.concat(salaPy)
console.log(salasUnidas)

//lista de listas
const alunos = ['Evandro', 'Camila', 'Maria','Gabriel']
const media = [10, 5, 6, 8]
const lista = [alunos, media]            //${lista[0][2]}            ${lista[1][2]}
console.log('A aluna no ídice 2 se chama', (alunos[2]),'e sua média é',(media[2]))

