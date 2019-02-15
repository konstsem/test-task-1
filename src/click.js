export default () => {
  const translate = (div) => {
    console.log(div);
    // на это не смотрим, это ужасно
    // div.children[1].hidden = true;
    // div.children[2].hidden = false;
    // setTimeout(() => {
    //   console.log('bax');
    //   div.children[1].hidden = false;
    //   div.children[2].hidden = true;
    // }, 1000);
  };
  const cards = document.querySelectorAll('div.card');
  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      const currentCard = event.currentTarget;
      translate(currentCard);
    });
  });
  cards.forEach((card) => {
    card.addEventListener('dblclick', (event) => {
      const currentCard = event.currentTarget;
      currentCard.remove();
    });
  });
};
