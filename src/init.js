// import Example from './Example';
import Card from './Card';
import phrases from './Phrases.json';

export default () => {
  const element = document.getElementById('point');
  for (let i = 0; phrases.length > i; i += 1) {
    const current = phrases[i];
    // element.append(current);
    // const obj = new Example(current);
    // const obj = new Card(current);
    // obj.init();
  }
};
