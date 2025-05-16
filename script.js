function mostrarSituacao(media){
    if(media >=7){
        alert('Você foi aprovado');
    }else{
        alert('Você foi reprovado :(');
    }
}
mostrarSituacao(8)

function confirma(){
    resposta = confirm('Dê ok para confirmar')
    if (resposta==1){
        return true
    }else{
        return false
    }
}
confirma()

function entradaDeDados(){
    nome = prompt('Digite seu nome:')
    return nome
}
entradaDeDados()

function perguntaEndereco(){
    do {
        endereco = prompt('Digite seu endereço:')
        confirma = confirm(`Seu endereço é ${endereco} ?`)
    }while(!confirma)
        alert('O endereço será exibido na página...')
        document.write(`Seu endererço é ${endereco}`)
}
perguntaEndereco()
