class AppContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.setAttribute('class', 'relative flex max-lg:flex-col lg:flex-row max-lg:min-h-screen');
  }
}

customElements.define('app-content', AppContent);
