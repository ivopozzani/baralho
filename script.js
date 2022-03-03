const buttons = document.querySelectorAll(".button");
const displayCards = document.querySelector(".display-cards");
const naipes = ["Paus", "Copas", "Ouros", "Espadas"];
const cards = [];

function HandleEventListener(event) {
  const naipeToFilter = event.currentTarget.textContent;

  CreateCardsElements(naipeToFilter);
}

function CreateCardsElements(naipeToFilter) {
  const filtered = naipeToFilter == 'Reset' ?  cards : FilterNaipe(naipeToFilter);
    
  nodeList = filtered.map((n) => {
    const newDiv = document.createElement("div");
    const newNaipe = document.createElement("p");
    newNaipe.textContent = `${n.numero} - ${n.naipe}`;
    newDiv.appendChild(newNaipe);
    newDiv.classList.add("card");
    return newDiv;
  });

  return displayCards.replaceChildren(...nodeList);
}

function FilterNaipe(naipeToFilter) {
  return cards.filter(card =>  card.naipe === naipeToFilter);
}

function createCardsArray() {
    for (let a = 0; a < naipes.length; a++) {
	for (let i = 0; i < 13; i++) {
	    switch (i) {
	    case 0:
		obj = { naipe: naipes[a], numero: "A" };
		break;
	    case 10:
		obj = { naipe: naipes[a], numero: "J" };
		break;
	    case 11:
		obj = { naipe: naipes[a], numero: "Q" };
		break;
	    case 12:
		obj = { naipe: naipes[a], numero: "K" };
		break;
	    default:
		obj = { naipe: naipes[a], numero: `${i + 1}` };
	    }
	    cards.push(obj);
	}
    }
}

function addEventListenerToButtons() {
    buttons.forEach((b) => {
  b.addEventListener("click", (event) => HandleEventListener(event));
});
} 

createCardsArray()
addEventListenerToButtons()
CreateCardsElements('Reset');
