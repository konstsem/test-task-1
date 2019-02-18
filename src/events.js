import { state } from './init';

const translationOn = (element) => {
  element.querySelector('p.sourceText').classList.add('hidden');
  element.querySelector('p.translation').classList.remove('hidden');
};
const translationOff = (element) => {
  element.querySelector('p.sourceText').classList.remove('hidden');
  element.querySelector('p.translation').classList.add('hidden');
};

export default () => {
  const cards = document.querySelectorAll('div.card');

  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      const currentCard = event.currentTarget;
      const stateCurrentCard = state.find(item =>
        item.id.toString() === currentCard.getAttribute('id'));
      if (stateCurrentCard.showTranslation === false) {
        translationOn(currentCard);
        stateCurrentCard.showTranslation = true;
        stateCurrentCard.timer = setTimeout(() => {
          translationOff(currentCard);
          stateCurrentCard.showTranslation = false;
        }, 3000);
      } else {
        clearTimeout(stateCurrentCard.timer);
        stateCurrentCard.showTranslation = false;
        translationOff(currentCard);
      }
    });
  });

  cards.forEach((card) => {
    card.addEventListener('dblclick', (event) => {
      const currentCard = event.currentTarget;
      currentCard.remove();
    });
  });
};
