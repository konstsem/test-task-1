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
  // const main = document.getElementById('main');
  // main.addEventListener('click', ({ target }) => {
  //   console.log(target);
  //   const div = target.parentElement;
  //   if (div.classList.contains('card')) {
  //     // console.log(div.getAttribute('id'), state[div.getAttribute('id')]);
  //   // проверяем состояние, если showTranslation = false работаем, иначе ничего не делаем
  //     const current = state.indexOf(element =>
  //       element.id === div.getAttribute('id'));
  //     console.log(current);
  //   }
  // });
  // main.addEventListener('dblclick', ({ target }) => {
  //   const div = target.parentElement;
  //   if (div.classList.contains('card')) {
  //     div.remove();
  //   }
  // });

  // отказался от более простого кода из-за худшей производительности
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
