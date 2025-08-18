export const inputItem = document.getElementById('input-item');
let contador = 0;
export function criarItemDaLista(){
    if (inputItem.value === '') {
        alert("Por favor, insira um item!");
        return;    
    }
    const itemDaLista= document.createElement('li')
    const containerItemDaLista = document.createElement("div")
    containerItemDaLista.classList.add("lista-item-container")
    const nomeItem = document.createElement("p")

    //Cria um checkbox para o item da lista
    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox"; //define tipo do input como checkbox
    inputCheckBox.id = "checkbox-" + contador++ //define id unico para checkbox
    containerItemDaLista.appendChild(inputCheckBox);
    
    nomeItem.innerText = inputItem.value;
    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);
    return itemDaLista;
}


