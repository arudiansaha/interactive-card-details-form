class AppAttribution extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.setAttribute('class', 'max-lg:hidden flex absolute bottom-10 justify-center flex w-full invisible group-hover:visible group-hover:-translate-y-6 transition-all duration-700');
    this.innerHTML = `
      <div class="py-2 px-4 w-fit rounded-lg bg-[#dedddf] text-[#21092f]">
        Challenge by <a class="text-blue-500" href="https://www.frontendmentor.io?ref=challenge"
          target="_blank">Frontend
          Mentor</a>.
        Coded by <a class="text-blue-500" href="https://github.com/arudiansaha" target="_blank">Rizky Ardiansyah</a>.
      </div>
    `;
  }
}

customElements.define('app-attribution', AppAttribution);
