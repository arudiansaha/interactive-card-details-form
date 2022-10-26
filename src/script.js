const cardHolder = document.getElementById('cardHolder');
const cardNumber = document.getElementById('cardNumber');
const cardExpiredMonth = document.getElementById('cardExpiredMonth');
const cardExpiredYear = document.getElementById('cardExpiredYear');
const cardCVC = document.getElementById('cardCVC');

const frontHolder = document.getElementById('frontHolder');

function invalidMessage(target, message, type = 'number') { // I don't know how to make option params (numbers and text).
  try {
    const reNumber = /\d+[A-Z a-z]/g;
    const reText = /[A-Z a-z]+\d/g

    target.style.borderColor = '#ff5252';

    if (target.validity.valueMissing) {
      message.innerText = "Can't be blank";
    } else if (type === 'number' && reNumber.test(target.value) === true) {
      message.innerText = 'Wrong format, numbers only';
    } else if (type === 'number' && /[A-Za-z]+/g.test(target.value) === true) {
      message.innerText = 'Wrong format, numbers only';
    } else if (type === 'text' && reText.test(target.value) === true) {
      message.innerText = 'Wrong format, text only';
    } else if (type === 'text' && /\d+/g.test(target.value) === true) {
      message.innerText = 'Wrong format, text only';
    } else if (!target.validity.valid) {
      message.innerText = target.validationMessage;
    } else {
      message.innerText = ''
      target.removeAttribute('style');
    }
  } catch (err) {
    console.error(err);
  }
};

document.addEventListener('DOMContentLoaded', function () {
  cardHolder.addEventListener('input', function (e) {
    const cardHolderMsg = document.getElementById('cardHolderMsg');

    frontHolder.innerText = this.value;
    invalidMessage(e.target, cardHolderMsg, 'text');
  });

  cardNumber.addEventListener('input', function (e) {
    const cardNumberMsg = document.getElementById('cardNumberMsg');
    const frontNumber = document.getElementById('frontNumber');

    if (!e.target.value) {
      frontNumber.innerText = '';
    } else {
      frontNumber.innerText = this.value.match(/.{1,4}/g).join(' ');
    }

    invalidMessage(e.target, cardNumberMsg);
  })

  cardExpiredMonth.addEventListener('input', function (e) {
    const cardExpiredMsg = document.getElementById('cardExpiredMsg');
    const frontMonth = document.getElementById('frontMonth');

    if (e.target.value.length < 2 && e.target.value !== '') {
      frontMonth.innerText = `0${this.value}`;
    } else {
      frontMonth.innerText = this.value;
    }

    invalidMessage(e.target, cardExpiredMsg);
  });

  cardExpiredYear.addEventListener('input', function (e) {
    const cardExpiredMsg = document.getElementById('cardExpiredMsg');
    const frontYear = document.getElementById('frontYear');

    frontYear.innerText = this.value;
    invalidMessage(e.target, cardExpiredMsg);
  });

  cardCVC.addEventListener('input', function (e) {
    const cardCVCMsg = document.getElementById('cardCVCMsg');
    const backCVC = document.getElementById('backCVC');

    backCVC.innerText = this.value;
    invalidMessage(e.target, cardCVCMsg);
  });
});

const formCard = document.getElementById('formCard');
const formSubmit = document.getElementById('formSubmit');

formCard.addEventListener('submit', function (e) {
  e.preventDefault()

  if (e.target.checkValidity()) {
    e.target.classList.add('hidden');
    completedState.classList.remove('hidden');
  }
});

cardHolder.addEventListener('invalid', function (e) {
  const cardHolderMsg = document.getElementById('cardHolderMsg');
  invalidMessage(e.target, cardHolderMsg, 'text');
  e.target.style.borderColor = '#ff5252';

  e.preventDefault();
});

cardNumber.addEventListener('invalid', function (e) {
  const cardNumberMsg = document.getElementById('cardNumberMsg');
  invalidMessage(e.target, cardNumberMsg, 'text');
  e.target.style.borderColor = '#ff5252';

  e.preventDefault();
});

cardExpiredMonth.addEventListener('invalid', function (e) {
  const cardExpiredMsg = document.getElementById('cardExpiredMsg');
  invalidMessage(e.target, cardExpiredMsg, 'text');
  e.target.style.borderColor = '#ff5252';

  e.preventDefault();
});

cardExpiredYear.addEventListener('invalid', function (e) {
  const cardExpiredMsg = document.getElementById('cardExpiredMsg');
  invalidMessage(e.target, cardExpiredMsg, 'text');
  e.target.style.borderColor = '#ff5252';

  e.preventDefault();
});

cardCVC.addEventListener('invalid', function (e) {
  const cardCVCMsg = document.getElementById('cardCVCMsg');
  invalidMessage(e.target, cardCVCMsg, 'text');
  e.target.style.borderColor = '#ff5252';

  e.preventDefault();
});

const completedState = document.getElementById('completedState');
const continueButton = document.getElementById('continueButton');

continueButton.addEventListener('click', function () {
  completedState.classList.add('hidden');
  formCard.classList.remove('hidden');
  window.location.reload()
});