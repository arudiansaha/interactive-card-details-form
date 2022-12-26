class MainContent extends HTMLElement {
  set holderEvent(event) {
    this._holderEvent = event;
    this.render();
  }

  set numberEvent(event) {
    this._numberEvent = event;
    this.render();
  }

  set monthEvent(event) {
    this._monthEvent = event;
    this.render();
  }

  set yearEvent(event) {
    this._yearEvent = event;
    this.render();
  }

  set cvcEvent(event) {
    this._cvcEvent = event;
    this.render();
  }

  set submitEvent(event) {
    this._submitEvent = event;
    this.render();
  }

  render() {
    this.setAttribute('class', 'lg:basis-2/3 w-fit max-lg:my-auto max-lg:mx-auto lg:my-auto max-md:p-6');
    this.innerHTML = `
      <form id="formCard" class="grid grid-cols-1 max-w-sm mx-auto gap-y-6">
        <div>
          <label class="text-sm tracking-widest uppercase" for="card-holder">Cardholder Name</label>
          <input
            class="w-full mt-1 py-2 px-4 text-lg border border-[#dedddf] focus:outline-none focus:border-[#21092f] rounded-lg text-[#21092f] placeholder:text-[#dedddf]"
            type="text" name="card-holder" id="cardHolder" placeholder="e.g. Jane Appleseed" pattern="[A-Z a-z]+"
            required>
          <div id="cardHolderMsg" class="mt-1 text-xs text-[#ff5252]"></div>
        </div>
        <div>
          <label class="text-sm tracking-widest uppercase" for="card-number">Card Number</label>
          <input
            class="w-full mt-1 py-2 px-4 text-lg border border-[#dedddf] focus:outline-none focus:border-[#21092f] rounded-lg text-[#21092f] placeholder:text-[#dedddf]"
            type="text" name="card-number" id="cardNumber" placeholder="e.g. 1234 5678 9123 0000" pattern="^[0-9]{16}"
            required>
          <div id="cardNumberMsg" class="mt-1 text-xs text-[#ff5252]"></div>
        </div>
        <div class="grid grid-cols-2 gap-x-4">
          <div>
            <label class="text-sm tracking-widest uppercase" for="card-expired">Exp. Date (MM/YY)</label>
            <div class="grid grid-cols-2 gap-x-2">
              <input
                class="w-full mt-1 py-2 px-4 text-lg border border-[#dedddf] focus:outline-none focus:border-[#21092f] rounded-lg text-[#21092f] placeholder:text-[#dedddf]"
                type="text" name="card-expired" id="cardExpiredMonth" placeholder="MM" pattern="^([1-9]|1[012])$"
                required>
              <input
                class="w-full mt-1 py-2 px-4 text-lg border border-[#dedddf] focus:outline-none focus:border-[#21092f] rounded-lg text-[#21092f] placeholder:text-[#dedddf]"
                type="text" name="card-expired" id="cardExpiredYear" placeholder="YY" pattern="[0-9]{2}" required>
            </div>
            <div id="cardExpiredMsg" class="mt-1 text-xs text-[#ff5252]"></div>
          </div>
          <div>
            <label class="text-sm tracking-widest uppercase" for="card-cvc">CVC</label>
            <input
              class="w-full mt-1 py-2 px-4 text-lg border border-[#dedddf] focus:outline-none focus:border-[#21092f] rounded-lg text-[#21092f] placeholder:text-[#dedddf]"
              type="text" name="card-cvc" id="cardCVC" placeholder="e.g. 123" pattern="[0-9]{3}" required>
            <div id="cardCVCMsg" class="mt-1 text-xs text-[#ff5252]"></div>
          </div>
        </div>
        <button class="w-full py-2 px-4 text-lg border-2 border-[#21092f] rounded-lg bg-[#21092f] text-white"
          type="submit" id="formSubmit">Confirm</button>
      </form>
    `;
    this.querySelector('#cardHolder').addEventListener('input', this._holderEvent);
    this.querySelector('#cardHolder').addEventListener('invalid', this._holderEvent);

    this.querySelector('#cardNumber').addEventListener('input', this._numberEvent);
    this.querySelector('#cardNumber').addEventListener('invalid', this._numberEvent);

    this.querySelector('#cardExpiredMonth').addEventListener('input', this._monthEvent);
    this.querySelector('#cardExpiredMonth').addEventListener('invalid', this._monthEvent);

    this.querySelector('#cardExpiredYear').addEventListener('input', this._yearEvent);
    this.querySelector('#cardExpiredYear').addEventListener('invalid', this._yearEvent);

    this.querySelector('#cardCVC').addEventListener('input', this._cvcEvent);
    this.querySelector('#cardCVC').addEventListener('invalid', this._cvcEvent);

    this.querySelector('#formCard').addEventListener('submit', this._submitEvent);
  }
}

customElements.define('main-content', MainContent);
