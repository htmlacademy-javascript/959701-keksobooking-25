import { isEscapeKeyPressed } from './util.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const form = document.querySelector('.ad-form');

// Создание высплывающего окна

const createPopup = (template) => {
  const popup = template.cloneNode(true);
  document.body.append(popup);
  const closePopup = () => {
    popup.remove();
    document.removeEventListener('keydown', keyCloseHandler);
  };

  function keyCloseHandler(evt) {
    if (isEscapeKeyPressed(evt)) {
      evt.preventDefault();
      closePopup();
    }
  }
  popup.addEventListener('click', () => closePopup());
  document.addEventListener('keydown', keyCloseHandler);
};

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

// Валидация формы

form.addEventListener('submit', (evt) => {
  if (pristine.validate()) {
    return createPopup(successTemplate);
  }
  evt.preventDefault();
  createPopup(errorTemplate);
});

