import './style.css';

class HelloWorld extends HTMLElement {
  // constructor() {
  //   super();
  // }

  connectedCallback(): void {
    console.log('He entrado en el DOM');
  }

  disconnectedCallback(): void {
    console.log('He salido del DOM');
  }

  get observedAttributes(): [string, string] {
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

window.customElements.define('hello-world', HelloWorld);
