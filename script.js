const buttons = document.querySelectorAll(".button");
const displayCards = document.querySelector(".display-cards");
const suits = ["spades", "clubs", "diamonds", "hearts"];
const cards = [];
const SUITLENGTH = 13;
let currentCardsDeck = [];

function handleEventListener(event) {
  const elementTextContent = event.currentTarget.textContent;

  switch (elementTextContent) {
    case "reset":
      currentCardsDeck = [...cards];
      createCardsElements(currentCardsDeck);
      break;
    case "shuffle":
      currentCardsDeck = [...shuffleArray(cards)];
      createCardsElements(currentCardsDeck);
      break;
    default:
      createCardsElements(filterSuit(elementTextContent));
      break;
  }
}

function createCardsElements(cards) {
  nodeList = cards.map((n) => {
    const newDiv = document.createElement("div");
    const newSuit = document.createElement("span");
    newSuit.classList.add(`${n.suit}`);

    const newParagraph = document.createElement("p");
    newParagraph.textContent = `${n.number}`;

    newDiv.appendChild(newParagraph);
    newDiv.appendChild(newSuit);
    newDiv.classList.add("card");

    return newDiv;
  });

  return displayCards.replaceChildren(...nodeList);
}

function filterSuit(suitToFilter) {
  return currentCardsDeck.filter((card) => card.suit === suitToFilter);
}

function createCardsArray() {
  suits.forEach((suit) => {
    for (let i = 1; i <= SUITLENGTH; i++) {
      let obj;
      switch (i) {
        case 1:
          obj = { suit: suit, number: "A" };
          break;
        case 11:
          obj = { suit: suit, number: "J" };
          break;
        case 12:
          obj = { suit: suit, number: "Q" };
          break;
        case 13:
          obj = { suit: suit, number: "K" };
          break;
        default:
          obj = { suit: suit, number: `${i}` };
      }
      cards.push(obj);
    }
  });
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
