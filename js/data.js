// Фиксированные данные

const QUANTITY_OFFERS = 10;

const SERVER = 'https://25.javascript.pages.academy/keksobooking';

const DATA_URL = `${SERVER}/data`;

const RERENDER_DELAY = 500;

const DEFAULT_VALUE = 'any';

const DEFAULT_LOCATION = {
  lat: 35.6894,
  lng: 139.69235,
};

const MAX_PRICE = 100000;

const offerTypes = {
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

const roomToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

export {
  QUANTITY_OFFERS,
  DEFAULT_LOCATION,
  MAX_PRICE,
  offerTypes,
  roomToGuests,
  SERVER,
  DATA_URL,
  RERENDER_DELAY,
  DEFAULT_VALUE
};
