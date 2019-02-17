
export default class Card {
  constructor(phrase, color, id, position) {
    this.id = id;
    this.theme = phrase.theme;
    this.sourceText = phrase.sourceText;
    this.translation = phrase.translation;
    this.color = color;
    this.length = this.theme.length + this.sourceText.length;
    this.showTranslation = false;
    this.position = position;
  }
  render() {
    const div = document.createElement('div');
    div.setAttribute('id', this.id);
    div.classList.add('card', this.color);
    const theme = document.createElement('p');
    theme.classList.add('theme');
    theme.textContent = this.theme;
    const sourceText = document.createElement('p');
    sourceText.classList.add('sourceText', 'content');
    sourceText.textContent = this.sourceText;
    sourceText.hidden = false;
    const translation = document.createElement('p');
    translation.classList.add('translation', 'content', 'hidden');
    translation.textContent = this.translation;
    const length = document.createElement('div');
    length.textContent = this.length;
    div.append(theme, sourceText, translation, length);
    return div;
  }
}
