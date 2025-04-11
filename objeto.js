const estudante = {
    nome: "Melissa",
    idade: 15, 
    prontuario: 12345,
    bolsista: true,
    telefones: ["1234-5678", "8765-4321"],     uma dentro da outra 
    endereco: {
        rua: "Nome da rua",
        numero: "199",
        bairro: "Santa Cruz"
    }
}

const estudante = {
    nome: "Melissa",
    idade: 15, 
    prontuario: 12345,
    bolsista: true,
    telefones: ["1234-5678", "8765-4321"],
    endereco: [{
        rua: "Nome da rua",
        numero: "199",
        bairro: "Santa Cruz"
    },
    {
        rua: "rua nova",
        numero: "200",
        bairro: "nome do bairro"

    }]
}

const chaveObjeto= Object.keys(estudante)
if (!chaveObjeto.includes("endereco")){ //se a propriedade end não existe no caso endereco
    console.error("É necessário ter um endereço cadastrado") //mensagem de erro
}else {
    console.log("Endereço cadastrado") 
}


//essa parte foiu excluida da parte acima, porém pode ser usado.

console.log(typeof estudante) //verifica o tipo de dado - objeto
console.log(estudante)

console.log(estudante.idade) //15
console.log(estudante["idade"]) //15

console.log(estudante.telefones) //lista de telefone 
console.log(estudante.telefones[0]) //telefone no índice 0 

//adicionar um objeto dentro de outro objeto 
estudante.endereco = { //nova propriedade
    rua: "nome da rua", 
    numero: "12",
    bairro: 'Santa Cruz'

}

console.log(estudante)
console.log(estudante.endereco.rua)
