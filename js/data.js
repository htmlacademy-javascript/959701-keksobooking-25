// Фиксированные данные

const TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель'
};


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
  flat: 1000,
  bungalow: 0,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

export {
  TYPES,
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
