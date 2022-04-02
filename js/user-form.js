import { minToType } from './data.js';
import { createUISlider, updateSlider } from './slider.js';
import { createPopup } from './popup.js';
import { sendData } from './api.js';
import { nameStartMapSettings } from './map.js';

const formElement = document.querySelector('.ad-form');
const filterElement = document.querySelector('.map__filters');
const accommodationTypeElement = document.querySelector('#type');
const sliderPrice = document.querySelector('.ad-form__slider');
const priceValue = document.querySelector('#price');
const priceElement = createUISlider(sliderPrice);
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

const pristine = new Pristine(formElement, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element'
});

// Проверка соответствия количества комнат количеству гостей.

const roomNumberElement = formElement.querySelector('[name="rooms"]');
const capacity = formElement.querySelector('[name="capacity"]');

const maxGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const validateCapacity = () => maxGuests[roomNumberElement.value].includes(capacity.value);

pristine.addValidator(capacity, validateCapacity, 'Количество гостей не соответствует количеству комнат');
roomNumberElement.addEventListener('change', () => pristine.validate(capacity));

// Передача значения ползунка в форму

priceElement.on('slide', () => {
  priceValue.value = priceElement.get();
});

// Изменение значения плейсхолдера

accommodationTypeElement.addEventListener('change', (evt) => {
  const minPrice = minToType[evt.target.value].min;
  updateSlider(priceElement, minPrice);
  priceValue.placeholder =  minPrice;
  priceValue.value = '';
});

// Валидация введенной цены за жилье

const validatePrice = () => Number(priceValue.value) >= Number(priceValue.placeholder);

pristine.addValidator(priceValue, validatePrice, 'Ввведите значение больше минимальной суммы');

accommodationTypeElement.addEventListener('change', () => pristine.validate(priceValue));

// Обработка поля  «Время заезда-выезда»

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

timeout.addEventListener('change', () => {
  timein.value = timeout.value;
});

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (!pristine.validate()) { return createPopup(false); }
  const formData = new FormData(evt.target);
  sendData(formData);
  filterElement.reset();
  formElement.reset();
  nameStartMapSettings();
});

