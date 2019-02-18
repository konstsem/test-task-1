import Card from './Card';
import phrases from './Phrases.json';

const shuffle = (array) => {
  const newArray = array;
  let j;
  let temp;
  for (let i = newArray.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = newArray[j];
    newArray[j] = newArray[i];
    newArray[i] = temp;
  }
  return newArray;
};

const colors = [
  'blue',
  'yellow',
  'green',
  'grey',
  'red',
];

const getRandomInt = (min, max) =>
  Math.floor((Math.random() * (max - min)) + 0.5) + min;

let counter = getRandomInt(3, 5);

export const state = shuffle(phrases).map((phrase, i) => {
  const colomnNumber = counter === 0 ? getRandomInt(2, 3) : getRandomInt(1, 2);
  if (colomnNumber === 1) {
    counter -= 1;
  }
  const position = {
    colomn: colomnNumber,
    // row: i,
  };
  return new Card(phrase, colors[getRandomInt(0, colors.length - 1)], i, position);
});

export default () => {
  state.forEach((card) => {
    const colomnNumber = card.position.colomn;
    const colomn = document.getElementById(`col${colomnNumber}`);
    colomn.append(card.render());
  });

  // sorting colomns
  const calcLength = (card) => {
    const theme = card.querySelector('p.theme').textContent;
    const sourceText = card.querySelector('p.sourceText').textContent;
    return theme.length + sourceText.length;
  };

  const colomns = document.querySelectorAll('.colomn');
  colomns.forEach((colomn) => {
    const clone = colomn.cloneNode();
    [...colomn.children].sort((a, b) => {
      if (calcLength(a) > calcLength(b)) {
        return -1;
      }
      if (calcLength(a) < calcLength(b)) {
        return 1;
      }
      return 0;
    }).forEach(child => clone.append(child));
    colomn.replaceWith(clone);
  });
};
