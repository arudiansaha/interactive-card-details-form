class CardImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.setAttribute('class', 'absolute block w-2/3 md:left-24 lg:top-48 lg:left-12 xl:left-40 max-lg:max-w-full lg:w-1/3 text-white');
    this.innerHTML = `
      <div class="relative max-md:top-[6.375rem] max-md:left-4 max-lg:top-44 max-lg:left-6 z-10 w-fit">
        <img src="./images/bg-card-front.png" alt="card front background">
        <svg class="absolute top-4 left-6 max-md:top-2 max-md:left-4 object-cover" width="84" height="47" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
          <path
            d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
            stroke="#fff" />
        </svg>
        <div id="frontNumber"
          class="absolute max-md:left-4 max-md:bottom-8 md:left-6 md:bottom-16 max-md:text-lg md:text-4xl lg:text-2xl xl:text-4xl">
          0000 0000
          0000 0000
        </div>
        <div id="frontHolder"
          class="absolute bottom-2 left-4 md:left-6 md:bottom-4 text-xs md:text-sm xl:text-base uppercase">
          Jane Appleseed
        </div>
        <div class="absolute right-4 bottom-2 md:right-6 md:bottom-4 text-xs md:text-sm xl:text-base">
          <span id="frontMonth">00</span>/<span id="frontYear">00</span>
        </div>
      </div>

      <div class="relative -top-28 -right-28 md:-top-52 md:-right-28 lg:top-8 lg:left-20 w-fit text-white">
        <img src="./images/bg-card-back.png" alt="card back background">
        <span id="backCVC"
          class="absolute max-md:top-[3.75rem] max-md:right-8 md:top-[6.85rem] md:right-14 lg:top-[5.125rem] lg:right-12 xl:top-[6.85rem] xl:right-14 max-lg:text-xs lg:text-sm xl:text-base">000</span>
      </div>
    `;
  }
}

customElements.define('card-image', CardImage);
