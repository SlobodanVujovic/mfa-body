class TsWebBody extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = 'Remote TS Web Component';
  }
}

customElements.define('remote-ts-web-component', TsWebBody);
