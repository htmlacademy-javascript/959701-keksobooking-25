import { isEscapeKey } from './util.js';
// Окно с ошибкой
const templateError = document.querySelector('#error').content;
const errorElement = templateError.cloneNode(true);
const windowError = errorElement.querySelector('.error');
const closeError = errorElement.querySelector('.error__button');

// Окно при успешной отправке формы
const templateSuccess = document.querySelector('#success').content;
const successElement = templateSuccess.cloneNode(true);
const windowSuccess = successElement.querySelector('.success');

// Отрисовка и удаление окна error
const createError = () => {
  document.querySelector('#map-canvas').append(errorElement);
  closeError.addEventListener('click', () => {
    windowError.remove();
  });

  windowError.addEventListener('click', () => {
    windowError.remove();
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      windowError.remove();
    }
  });
};

// Отрисовка и удаление окна succes
const createSuccess = () => {
  document.querySelector('#map-canvas').append(successElement);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      windowSuccess.remove();
    }
  });

  windowSuccess.addEventListener('click', () => {
    windowSuccess.remove();
  });
};

// Валидация формы
const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element'
});

// Проверка title
const validateTitle = (value) => value.length >= 30 && value.length <= 100;

pristine.addValidator(form.querySelector('#title'), validateTitle);

// Проверка price
const validatePrice = (value) =>value < 100000;

pristine.addValidator(form.querySelector('#price'), validatePrice, 'Не больше 100 000');

/* Попытка проверки введено ли число. Работает ровно наоборот (Выдает сообщение, когда введено число). Пока выкрутилась через data-pristine-required-message.

const re = /^[0-9]$/;
const validateNumber = (value) => re.test(value);

pristine.addValidator(form.querySelector('#price'), validateNumber, 'Введите число');
*/

// Проверка соответствия количества комнат количеству гостей.
// Работает некорректно
const roomNumber = form.querySelector('[name="rooms"]');
const capacity = form.querySelector('[name="capacity"]');

const maxGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const validateCapacity = () => maxGuests[roomNumber.value].includes(capacity.value);

pristine.addValidator(capacity, validateCapacity, 'Количеству гостей не соответствует количество комнат');
pristine.addValidator(roomNumber, validateCapacity, 'Выберите другое количество комнат');

form.addEventListener('submit', (evt) => {
  if (pristine.validate()) {
    createSuccess();
  } evt.preventDefault();
  createError();
});
