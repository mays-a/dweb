function habilitarCampo(opcao){
    if(opcao){
        //1 = verdadeiro 0 = falso
        // se opcao == verdadeiro, então habilita o campo de texto
        document.formulario.nome.disabled = false 
    }
    else{
        //se opcao == falso, o campo é limpo
        document.formulario.nome.value = ""
        //se opcao == falso, é desativada a digitação por texto
        document.formulario.nome.disabled = true
    }
}
