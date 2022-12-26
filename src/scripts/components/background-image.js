class BackgroundImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.setAttribute('class', 'block lg:basis-1/3 lg:h-screen');
    this.innerHTML = `
      <img class="lg:hidden w-full max-h-96 max-md:max-h-52 object-cover" src="./images/bg-main-mobile.png" alt="gradient background">
      <img class="max-lg:hidden h-full object-cover" src="./images/bg-main-desktop.png" alt="gradient background">
    `;
  }
}

customElements.define('background-image', BackgroundImage);
