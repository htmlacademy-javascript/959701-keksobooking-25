import { offerTypes, MAX_PRICE, roomToGuests } from './data.js';
import { createUISlider } from './slider.js';
import { sendData } from './api.js';
import { resetMapSettings } from './map.js';
import { filterElement } from './filter.js';
import { declineNum } from './util.js';
import { getPreviewPhoto } from './pic-uploader.js';

const PRICE_VALIDATION_PRIORITY = 1000;
const adformElement = document.querySelector('.ad-form');
const accommodationTypeElement = document.querySelector('#type');
const priceSliderElement = document.querySelector('.ad-form__slider');
const priceValueElement = document.querySelector('#price');
const priceSlider = createUISlider(priceSliderElement);
const timeinFieldElement = document.querySelector('#timein');
const timeoutFieldElement = document.querySelector('#timeout');
const roomNumberElement = adformElement.querySelector('[name="rooms"]');
const capacityElement = adformElement.querySelector('[name="capacity"]');
const initialType = accommodationTypeElement.value;
const inputAvatarElement = adformElement.querySelector('.ad-form-header__input[type=file]');
const inputHousePhotoElement = adformElement.querySelector('#images[type=file]');
const previewAvatarElement = adformElement.querySelector('.ad-form-header__preview');
const defaultAvatarElement = previewAvatarElement.querySelector('img');
const previewHousePhotoElement = adformElement.querySelector('.ad-form__photo');
const buttonResetElement = document.querySelector('.ad-form__reset');
const buttonSubmitElement = document.querySelector('.ad-form__submit');

const pristine = new Pristine(adformElement, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element'
});

// Проверка соответствия количества комнат количеству гостей

const validateCapacity = () => roomToGuests[roomNumberElement.value].includes(capacityElement.value);

const getCapacityMessage = () => {
  const rooms = declineNum(roomNumberElement.value, 'комнаты', 'комнат');
  const validGuests = roomToGuests[roomNumberElement.value];
  return `Для ${rooms} допустимо гостей: ${validGuests.join(', ')}`;
};

pristine.addValidator(capacityElement, validateCapacity, getCapacityMessage);
roomNumberElement.addEventListener('change', () => pristine.validate(capacityElement));

// Передача значения ползунка в форму

priceSlider.on('slide', () => {
  priceValueElement.value = priceSlider.get();
  pristine.validate(priceSlider);
});

// Изменение значения плейсхолдера стоимости жилья

const setPriceAttributes = (type) => {
  const minPrice = offerTypes[type].min;
  priceValueElement.min = minPrice;
  priceValueElement.placeholder = minPrice;
};
setPriceAttributes(initialType);

const changeType = (type = accommodationTypeElement.value) => {
  setPriceAttributes(type);
  priceSlider.updateOptions({
    range: {
      min: offerTypes[type].min,
      max: MAX_PRICE,
    },
  });
};

accommodationTypeElement.addEventListener('change', () => {
  changeType();
  pristine.validate(priceValueElement);
});

// Валидация введенной цены за жилье

const validatePrice = () => Number(priceValueElement.value) >= Number(priceValueElement.placeholder);

const getPriceMessage = () => `Выберите число между ${priceValueElement.placeholder} и ${MAX_PRICE}`;

pristine.addValidator(priceValueElement, validatePrice, getPriceMessage, PRICE_VALIDATION_PRIORITY, true);

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
  filterElement.reset();
  adformElement.reset();
  pristine.reset();
  previewAvatarElement.style.backgroundImage = '';
  previewHousePhotoElement.style.backgroundImage = '';
  defaultAvatarElement.style.visibility = 'visible';
  priceSlider.reset();
};

buttonResetElement.addEventListener('click', resetAllSettings );

// Переключатель кнопки "Опубликовать"

const switchSubmitButton = (status) => {
  buttonSubmitElement.disabled = status;
};

adformElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (!pristine.validate()) {
    adformElement.querySelector('.has-danger [name]').focus();
    return;
  }
  switchSubmitButton(true);
  const formData = new FormData(evt.target);
  sendData(formData);
  resetAllSettings();
});

export { switchSubmitButton };

