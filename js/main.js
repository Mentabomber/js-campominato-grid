// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
//  Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

let gridElement = document.getElementById("new-grid");

const listArray = [];

function gridCreation (elementType, className){

    const newElement = document.createElement(elementType);

    newElement.classList.add(className);

    return newElement;
    
}

const buttonInteractor = document.getElementById("button-play");

buttonInteractor.addEventListener("click",
function(){



for (let i = 0; i < 100; i++) {
    
    listArray.push(i + 1);  

    const newGrid = gridCreation("div", "easy-grid-box");

    const newSpan = document.createElement("span");

    newGrid.append(newSpan);

    newSpan.append(listArray[i]);

    newGrid.addEventListener("click",
    
    function(){

        this.classList.add("element-selected");
    
    }
    
    )

    


    gridElement.append(newGrid);
}

}


)

console.log(listArray);