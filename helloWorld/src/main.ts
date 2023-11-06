import './style.css';

class HelloWorld extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback(): void {
    console.log('He entrado en el DOM');
  }

  disconnectedCallback(): void {
    console.log('He salido del DOM');
  }

  static get observedAttributes(): [string, string] {
    return ['a', 'b'];
  }

  attributeChangedCallback(
    atributeName: string,
    oldValue: string,
    newValue: string
  ): void {
    console.log(
      `Soy el atributo ${atributeName} y he cambiado de ${oldValue} a ${newValue}`
    );
  }
}

class LazyImage extends HTMLElement {
  constructor(public src: string) {
    super();
    this.src = this.getAttribute('src')!;
  }

  connectedCallback(): void {
    const template = document.querySelector('template');
    const templateContent = template!.content.cloneNode(true);
    const img = (templateContent as HTMLElement).querySelector('img');
    img!.src = this.src;

    this.appendChild(templateContent);
  }

  static get observedAttributes(): string[] {
    return ['src'];
  }
}
window.customElements.define('hello-world', HelloWorld);
window.customElements.define('lazy-img', LazyImage);
