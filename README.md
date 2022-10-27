# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

- [Desktop](./screenshots/desktop_1440-900.png)
- [Mobile](./screenshots/desktop_375-704.png)

### Links

- Solution URL: [Click here.](https://github.com/arudiansaha/interactive-card-details-form)
- Live Site URL: [Click here.](https://arudiansaha.github.io/interactive-card-details-form)

## My process

### Built with

- Semantic HTML5 markup
- [Tailwind CSS](https://tailwindcss.com)
- Flexbox
- CSS Grid
- HTML DOM and BOM

### What I learned

This challenge is greet for, who started learning HTML DOM. I'm learning much on this challenge.

Here some code of mine:

```html
<label class="text-sm tracking-widest uppercase" for="card-holder">Cardholder Name</label>
<input
  class="w-full mt-1 py-2 px-4 text-lg border border-[#dedddf] focus:outline-none focus:border-[#21092f] rounded-lg text-[#21092f] placeholder:text-[#dedddf]"
  type="text" name="card-holder" id="cardHolder" placeholder="e.g. Jane Appleseed" pattern="[A-Z a-z]+"
  required>
<div id="cardHolderMsg" class="mt-1 text-xs text-[#ff5252]"></div>
```
```js
cardHolder.addEventListener('input', function (e) {
  const cardHolderMsg = document.getElementById('cardHolderMsg');

  frontHolder.innerText = this.value;
  invalidMessage(e.target, cardHolderMsg, 'text');
});
```

### Continued development

I dont't understand why my `border-radius` didn't work, when using `boder-image`, and refactoring code.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US) - All you need is here :D.

## Author

- Website - [Blog](https://blog-arudiansaha.vercel.app)
- Frontend Mentor - [@arudiansaha](https://www.frontendmentor.io/profile/arudiansaha)
- Twitter - [@arudiansaha](https://www.twitter.com/arudiansaha)
- LinkedIn - [Rizky Ardiansyah](https://www.linkedin.com/in/ky-ardiansyah)

## Acknowledgments

### Big Thanks

- [MDN Web Docs](https://developer.mozilla.org/en-US)
- [Tailwind CSS](https://tailwindcss.com)