const buttons = document.querySelectorAll(".button");
const displayCards = document.querySelector(".display-cards");
const naipes = ["Paus", "Copas", "Ouros", "Espadas"];
const cards = [];
let currentCardsDeck = [];

function handleEventListener(event) {
  const elementTextContent = event.currentTarget.textContent;

  switch (elementTextContent) {
    case "Reset":
      currentCardsDeck = [...cards];
      createCardsElements(currentCardsDeck);
      break;
    case "Embaralhar":
      currentCardsDeck = [...shuffleArray(cards)];
      createCardsElements(currentCardsDeck);
      break;
    default:
      createCardsElements(filterNaipe(elementTextContent));
      break;
  }
}

function createCardsElements(cards) {
  nodeList = cards.map((n) => {
    const newDiv = document.createElement("div");
    const newNaipe = document.createElement("p");
    newNaipe.textContent = `${n.numero} - ${n.naipe}`;
    newDiv.appendChild(newNaipe);
    newDiv.classList.add("card");
    return newDiv;
  });

  return displayCards.replaceChildren(...nodeList);
}

function filterNaipe(naipeToFilter) {
  return currentCardsDeck.filter((card) => card.naipe === naipeToFilter);
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
  currentCardsDeck = [...cards];
}

function addEventListenerToButtons() {
  buttons.forEach((b) => {
    b.addEventListener("click", (event) => handleEventListener(event));
  });
}

function shuffleArray(array) {
  return array
    .map((card) => ({ card, value: Math.random() }))
    .sort((a, b) => a.value - b.value)
    .map((obj) => obj.card);
}

createCardsArray();
addEventListenerToButtons();
createCardsElements(cards);
