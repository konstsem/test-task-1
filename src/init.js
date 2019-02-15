// import Example from './Example';
import Card from './Card';
import phrases from './Phrases.json';

export default () => {
  const main = document.getElementById('main');
  for (let i = 0; phrases.length > i; i += 1) {
    const current = phrases[i];
    const card = new Card(current);
    main.append(card.init());
    // element.append(current);
    // const obj = new Example(current);
    // const obj = new Card(current);
    // obj.init();
  }
};
