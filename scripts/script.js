greetPlayer();

function greetPlayer(){
    let isNumValid = false;
    let numCards;

    do{
        numCards = Number(prompt("Bem vindo! Qual será o número de cartas? (4-14)"));
        console.log(numCards);

        if(numCards < 4 || numCards > 14 || numCards % 2 !== 0 || !numCards){
            alert("Número de Cartas Inválido!");
        } 
        else{
            isNumValid = true;
        }

    } while(!isNumValid);

    generateCards(numCards);
}

function generateCards(numCards){
    const cardsContainer = document.querySelector(".cards-container");
    let gameDeck = buildGameDeck(numCards);

    cardsContainer.innerHTML = "";
    for(let i= 0 ; i < numCards; i++){
        cardsContainer.innerHTML += `
            <div class="card" onclick="turnCard(this)">
                <div class="face">
                    <img src=${gameDeck[i]} >
                </div>
            <div>
            `;
    }
}

function buildGameDeck(numCards){
    const deck = getFullDeck().slice(0,(numCards));
    deck.sort(sorter);
    return deck;
}

function getFullDeck(){
    const bob = "../media/bobrossparrot.gif";
    const explody = "../media/explodyparrot.gif";
    const fiesta = "../media/fiestaparrot.gif";
    const metal = "../media/metalparrot.gif";
    const revert = "../media/revertitparrot.gif";
    const triplet = "../media/tripletsparrot.gif";
    const unicorn = "../media/unicornparrot.gif";
    
    let facesArray = [bob,bob,explody,explody,fiesta,fiesta,metal,metal,revert,revert,triplet,triplet,unicorn,unicorn];

    return facesArray;
}

function sorter(){
    return Math.random() - 0.5;
}

function turnCard(card){
    let element = card.querySelector(".face img");
    if(card.classList.toggle("turned")){
        element.setAttribute('style', 'opacity:1');
    } else{
        element.setAttribute('style', 'opacity:0');
    }
}