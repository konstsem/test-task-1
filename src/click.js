export default () => {
  const cards = document.querySelectorAll('div.card');
  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      const currentCard = event.currentTarget;
      console.log(currentCard);
    });
  });
  cards.forEach((card) => {
    card.addEventListener('dblclick', (event) => {
      const currentCard = event.currentTarget;
      currentCard.remove();
    });
  });
};
