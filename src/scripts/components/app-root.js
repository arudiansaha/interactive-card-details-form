class AppRoot extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.setAttribute('class', 'relative block font-sans bg-white text-[#21092f] group');
  }
}

customElements.define('app-root', AppRoot);
