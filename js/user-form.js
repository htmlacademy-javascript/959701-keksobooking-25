import { createPopup } from './util.js';

//Валидация формы

const errorTemplate = document.querySelector('#error').content;
const successTemplate = document.querySelector('#success').content;
const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element'
});

// Проверка соответствия количества комнат количеству гостей.

const roomNumberElement = form.querySelector('[name="rooms"]');
const capacity = form.querySelector('[name="capacity"]');

const maxGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const validateCapacity = () => maxGuests[roomNumberElement.value].includes(capacity.value);

pristine.addValidator(capacity, validateCapacity, 'Количество гостей не соответствует количеству комнат');
roomNumberElement.addEventListener('change', () => pristine.validate(capacity));

form.addEventListener('submit', (evt) => {
  if (pristine.validate()) {
    return createPopup(successTemplate);
  }
  evt.preventDefault();
  createPopup(errorTemplate);
});

