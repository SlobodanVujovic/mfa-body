import ReactDOM from 'react-dom';
import App2 from './Body2';

class VujoComponent extends HTMLElement {
  //   private root: HTMLElement | null = null;
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  private render() {
    ReactDOM.render(<App2 />, this);
  }
}

customElements.define('vujo-component', VujoComponent);
