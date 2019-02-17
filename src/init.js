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
})
  .sort((a, b) => {
    if (a.position.colomn === b.position.colomn && a.length > b.length) {
      return -1;
    }
    if (a.position.colomn === b.position.colomn && a.length < b.length) {
      return 1;
    }
    return 0;
  });

export default () => {
  state.forEach((card) => {
    const colomnNumber = card.position.colomn;
    const colomn = document.getElementById(`col${colomnNumber}`);
    colomn.append(card.render());
  });
  // for (let i = 0; phrases.length > i; i += 1) {
  //   const current = phrases[i];
  //
  //   const color = colors[getRandomInt(0, colors.length)];
  //   const card = new Card(current, color);
  //
  //   const colomnNumber = getRandomInt(1, 3);
  //   const colomn = document.getElementById(`col${colomnNumber}`);
  //
  //   colomn.append(card.init());
  // }
  // const colomns = document.querySelectorAll('span.colomn');
  // colomns.forEach(sortChildrenByLength);
};
