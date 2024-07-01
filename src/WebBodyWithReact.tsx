import ReactDOM from 'react-dom/client';
import Body1 from './Body1';

class RemoteTsWebCompWithReactComp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const root = ReactDOM.createRoot(this);
    root.render(<Body1 />);
    // This works but previous code doesn't work.
    // this.innerHTML = 'Remote TS Web Component with React Component';
  }
}

customElements.define('remote-ts-web-react-component', RemoteTsWebCompWithReactComp);
