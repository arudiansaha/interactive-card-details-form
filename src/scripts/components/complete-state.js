class CompleteState extends HTMLElement {
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.setAttribute('class', 'flex flex-col items-center max-w-sm mx-auto gap-y-10');
    this.innerHTML = `
      <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="url(#a)" />
        <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3" />
        <defs>
          <linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse">
            <stop stop-color="#6348FE" />
            <stop offset="1" stop-color="#610595" />
          </linearGradient>
        </defs>
      </svg>
      <div class="text-center">
        <div class="text-2xl tracking-widest uppercase">Thank you!</div>
        <p class="mt-4 text-lg text-[#8e8593]">We've added your card details</p>
      </div>
      <button class="w-full py-2 px-4 text-lg border-2 border-[#21092f] rounded-lg bg-[#21092f] text-white shadow"
        id="continueButton">
        Continue
      </button>
    `;
    this.querySelector('#continueButton').addEventListener('click', this._clickEvent);
  }
}

customElements.define('complete-state', CompleteState);