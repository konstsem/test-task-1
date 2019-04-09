
export default class Card {
  constructor(phrase, color, id, position) {
    this.id = id;
    this.theme = phrase.theme;
    this.sourceText = phrase.sourceText;
    this.translation = phrase.translation;
    this.color = color;
    this.showTranslation = false;
    this.position = position;
  }
  render(parent) {
    const html = `<div id=${this.id} class=" card ${this.color}">
        <p class="theme">
          ${this.theme}
        </p>
        <p class="sourceText content">
          ${this.sourceText}
        </p>
        <p class="translation content hidden">
          ${this.translation}
        </p>
      </div>`;
    parent.insertAdjacentHTML('beforeend', html);
  }
}
