const contentElement = document.querySelector('main-content');
const completeStateELement = document.createElement('complete-state');

function invalidMessage(target, message, type = 'number') {
  const reNumber = /\d+[A-Z a-z]/g;
  const reText = /[A-Z a-z]+\d/g;
  const _target = target;
  const _message = message;

  _target.style.borderColor = '#ff5252';

  if (_target.validity.valueMissing) _message.innerText = "Can't be blank";

  if (type === 'number' && reNumber.test(_target.value) === true) _message.innerText = 'Wrong format, numbers only';

  if (type === 'number' && /[A-Za-z]+/g.test(_target.value) === true) _message.innerText = 'Wrong format, numbers only';

  if (type === 'text' && reText.test(_target.value) === true) _message.innerText = 'Wrong format, text only';

  if (type === 'text' && /\d+/g.test(_target.value) === true) _message.innerText = 'Wrong format, text only';

  if (!_target.validity.valid) _message.innerText = _target.validationMessage;

  if (_target.validity.valid) {
    _message.innerText = '';
    target.removeAttribute('style');
  }
}

function holderHandler(event) {
  event.preventDefault();

  const frontElement = document.querySelector('#frontHolder');
  const messageElement = document.querySelector('#cardHolderMsg');

  if (event.target.value !== '') frontElement.innerText = this.value;

  invalidMessage(event.target, messageElement, 'text');
}

function numberHandler(event) {
  event.preventDefault();

  const frontElement = document.querySelector('#frontNumber');
  const messageElement = document.querySelector('#cardNumberMsg');

  if (event.target.value !== '') frontElement.innerText = this.value.match(/.{1,4}/g).join(' ');

  invalidMessage(event.target, messageElement);
}

function monthHandler(event) {
  event.preventDefault();

  const _target = event.target;
  const frontElement = document.querySelector('#frontMonth');
  const messageElement = document.querySelector('#cardExpiredMsg');

  if (_target.value.length < 2 && _target.value !== '') frontElement.innerText = `0${this.value}`;

  if (_target.value.length === 2 && _target.value !== '') frontElement.innerText = this.value;

  invalidMessage(event.target, messageElement);
}

function yearHandler(event) {
  event.preventDefault();

  const frontElement = document.querySelector('#frontYear');
  const messageElement = document.querySelector('#cardExpiredMsg');

  if (event.target.value !== '') frontElement.innerText = this.value;

  invalidMessage(event.target, messageElement);
}

function cvcHandler(event) {
  event.preventDefault();

  const frontElement = document.querySelector('#backCVC');
  const messageElement = document.querySelector('#cardCVCMsg');

  if (event.target.value !== '') frontElement.innerText = this.value;

  invalidMessage(event.target, messageElement);
}

function submitHandler(event) {
  if (event.target.value !== '') {
    contentElement.innerHTML = '';
    contentElement.appendChild(completeStateELement);
  }
}

function continueHandler() {
  window.location.reload();
}

function main() {
  contentElement.holderEvent = holderHandler;
  contentElement.numberEvent = numberHandler;
  contentElement.monthEvent = monthHandler;
  contentElement.yearEvent = yearHandler;
  contentElement.cvcEvent = cvcHandler;
  contentElement.submitEvent = submitHandler;

  completeStateELement.clickEvent = continueHandler;
}

window.addEventListener('DOMContentLoaded', main);
