// Фиксированные данные

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const QUANTITY_OBJECTS = 10;

const COORD_DECIMALS = 5;

const DEFAULT_LOCATION = {
  lat: 35.6894,
  lng: 139.69235,
};

const LatRange = {
  MIN: 35.65,
  MAX: 35.7
};

const LngRange = {
  MIN: 139.7,
  MAX: 139.8
};

const PriceRange = {
  MIN: 1,
  MAX: 50000
};

const RoomsRange = {
  MIN: 1,
  MAX: 10
};

const GuestsRange = {
  MIN: 1,
  MAX: 10
};

const MAX_PRICE = 100000;

const minToType = {
  palace: {
    title: 'Дворец',
    min: 10000,
  },
  flat: {
    title: 'Квартира',
    min: 1000,
  },
  house: {
    title: 'Дом',
    min: 5000,
  },
  bungalow: {
    title: 'Бунгало',
    min: 0,
  },
  hotel: {
    title: 'Отель',
    min: 3000,
  },
};

export {
  CHECKIN,
  CHECKOUT,
  FEATURES,
  PHOTOS,
  QUANTITY_OBJECTS,
  COORD_DECIMALS,
  DEFAULT_LOCATION,
  LatRange,
  LngRange,
  PriceRange,
  RoomsRange,
  GuestsRange,
  MAX_PRICE,
  minToType
};
