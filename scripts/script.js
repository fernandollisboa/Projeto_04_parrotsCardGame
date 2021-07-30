// greetPlayer();


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


    createCards(numCards);
}


function createCards(numCards){
    const element = document.querySelector(".cards-container");
    element.innerHTML = "";
    for(let i= 0 ; i < numCards; i++){
        element.innerHTML += `
            <div class="card">
                <div>
            `;
    }
}