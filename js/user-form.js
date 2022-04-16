import { createUISlider } from './slider.js';
import { sendData } from './api.js';
import { resetMapSettings } from './map.js';
import { filterElement } from './filter.js';
import { getNumWithWord } from './util.js';
import { getPreviewPhoto } from './pic-uploader.js';
import { renderInitialListings } from './render-listings.js';

const PRICE_VALIDATION_PRIORITY = 1000;
const MAX_PRICE = 100000;
const offerType = {
  palace: {
    ru: 'Дворец',
    min: 10000,
  },
  flat: {
    ru: 'Квартира',
    min: 1000,
  },
  house: {
    ru: 'Дом',
    min: 5000,
  },
  bungalow: {
    ru: 'Бунгало',
    min: 0,
  },
  hotel: {
    ru: 'Отель',
    min: 3000,
  },
};

const roomToGuest = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const adFormElement = document.querySelector('.ad-form');
const accommodationTypeElement = document.querySelector('#type');
const priceSliderElement = document.querySelector('.ad-form__slider');
const priceValueElement = document.querySelector('#price');
const priceSlider = createUISlider(priceSliderElement);
const timeinFieldElement = document.querySelector('#timein');
const timeoutFieldElement = document.querySelector('#timeout');
const roomNumberElement = adFormElement.querySelector('[name="rooms"]');
const capacityElement = adFormElement.querySelector('[name="capacity"]');
const initialType = accommodationTypeElement.value;
const inputAvatarElement = adFormElement.querySelector('.ad-form-header__input[type=file]');
const inputHousePhotoElement = adFormElement.querySelector('#images[type=file]');
const previewAvatarElement = adFormElement.querySelector('.ad-form-header__preview');
const defaultAvatarElement = previewAvatarElement.querySelector('img');
const previewHousePhotoElement = adFormElement.querySelector('.ad-form__photo');
const buttonResetElement = document.querySelector('.ad-form__reset');
const buttonSubmitElement = document.querySelector('.ad-form__submit');

const pristine = new Pristine(adFormElement, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element'
});

// Проверка соответствия количества комнат количеству гостей

const validateCapacity = () => roomToGuest[roomNumberElement.value].includes(capacityElement.value);

const getCapacityMessage = () => {
  const rooms = getNumWithWord(roomNumberElement.value, ['комнаты', 'комнат']);
  const validGuests = roomToGuest[roomNumberElement.value];
  return `Для ${rooms} допустимо гостей: ${validGuests.join(', ')}`;
};

pristine.addValidator(capacityElement, validateCapacity, getCapacityMessage);
roomNumberElement.addEventListener('change', () => pristine.validate(capacityElement));

// Передача значения ползунка в форму и валидация

priceSlider.on('slide', () => {
  priceValueElement.value = priceSlider.get();
  pristine.validate(priceValueElement);
});

// Валидация введенной цены за жилье

const validatePrice = (value) => {
  const price = Number(value || 0);
  const inRange = price >= Number(priceValueElement.min) && price <= MAX_PRICE;
  return /^\d+$/.test(value) && inRange;
};

const getPriceMessage = () => `Укажите от ${offerType[accommodationTypeElement.value].min} до ${MAX_PRICE} ₽/ночь`;

pristine.addValidator(priceValueElement, validatePrice, getPriceMessage, PRICE_VALIDATION_PRIORITY, true);

const changeType = () => {
  priceValueElement.placeholder = offerType[accommodationTypeElement.value].min;
  priceValueElement.min = offerType[accommodationTypeElement.value].min;
};
changeType();

accommodationTypeElement.addEventListener('change', () => {
  changeType();
  priceSlider.updateOptions({
    range: {
      min: parseInt(priceValueElement.min, 10),
      max: MAX_PRICE,
    },
  });
  pristine.validate(priceValueElement);
});

priceValueElement.addEventListener('input', () => {
  if (pristine.validate(priceValueElement)) {
    priceSlider.set(parseInt(priceValueElement.value, 10));
  }
});

// Обработка поля  «Время заезда-выезда»

timeinFieldElement.addEventListener('change', () => {
  timeoutFieldElement.value = timeinFieldElement.value;
});

timeoutFieldElement.addEventListener('change', () => {
  timeinFieldElement.value = timeoutFieldElement.value;
});

// Загрузка превью фото

inputAvatarElement.addEventListener('change', () => {
  getPreviewPhoto(inputAvatarElement, previewAvatarElement, defaultAvatarElement);
});

inputHousePhotoElement.addEventListener('change', () => {
  getPreviewPhoto(inputHousePhotoElement, previewHousePhotoElement);
});

// Сброс формы, карты к начальным настройкам

const resetAllSettings = () => {
  resetMapSettings();
  renderInitialListings();
  filterElement.reset();
  adFormElement.reset();
  pristine.reset();
  priceValueElement.placeholder = offerType[initialType].min;
  previewAvatarElement.style.backgroundImage = '';
  previewHousePhotoElement.style.backgroundImage = '';
  defaultAvatarElement.style.visibility = 'visible';
  priceSlider.reset();
};

buttonResetElement.addEventListener('click', () => resetAllSettings());

// Переключатель кнопки "Опубликовать"

const switchButton = (element, status) => {
  element.disabled = status;
};

adFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (!pristine.validate()) {
    adFormElement.querySelector('.has-danger [name]').focus();
    return;
  }
  const formData = new FormData(evt.target);
  sendData(formData, resetAllSettings);
});

export { switchButton, offerType, MAX_PRICE, buttonSubmitElement, buttonResetElement };
