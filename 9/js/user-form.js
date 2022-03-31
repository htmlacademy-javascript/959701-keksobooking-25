import { isEscapeKeyPressed } from './util.js';
import { sendData } from './api.js';
import { minToType } from './data.js';
import { createUISlider, updateSlider } from './slider.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const loadingErrorTemplate = document.querySelector('#loadingerror').content.querySelector('.error');
const form = document.querySelector('.ad-form');
const filter = document.querySelector('.map__filters');
const accommodationTypeElement = document.querySelector('#type');
const sliderPrice = document.querySelector('.ad-form__slider');
const priceValue = document.querySelector('#price');
const priceElement = createUISlider(sliderPrice);

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

// Передача значения ползунка в форму

priceElement.on('slide', () => {
  priceValue.value = priceElement.get();
});

accommodationTypeElement.addEventListener('change', (evt) => {
  updateSlider(priceElement, minToType[evt.target.value]);
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (!isValid) { return createPopup(errorTemplate); }
  createPopup(successTemplate);
  const formData = new FormData(evt.target);
  sendData(formData);
  filter.reset();
  form.reset();
});

export { createPopup, loadingErrorTemplate };
