import { LitElement, html } from 'lit';

class MyComponent extends LitElement {
  static properties = {
    message: { type: String }
  };

  constructor() {
    super();
    this.message = 'Hello, Lit!';
  }

  render() {
    return html`
      <p>${this.message}</p>
    `;
  }
}

customElements.define('my-component', MyComponent);
