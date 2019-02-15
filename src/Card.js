
export default class Card {
  // element: HTMLElement;

  // constructor(element: HTMLElement) {
  constructor(phrase) {
    // this.element = HTMLElement
    this.theme = phrase.theme;
    this.sourceText = phrase.sourceText;
    this.translation = phrase.translation;
    // this.element = element;
  }
  init() {
    const div = document.createElement('div');
    div.classList.add('card');
    const theme = document.createElement('h4');
    theme.classList.add('theme');
    theme.textContent = this.theme;
    const sourceText = document.createElement('p');
    sourceText.classList.add('sourceText');
    sourceText.textContent = this.sourceText;
    sourceText.hidden = false;
    const translation = document.createElement('p');
    translation.classList.add('translation');
    translation.textContent = this.translation;
    translation.hidden = true;
    div.append(theme, sourceText, translation);
    return div;
    // this.element.textContent = 'hello, world!';
  }
}
