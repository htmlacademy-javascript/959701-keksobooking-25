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

const typeToRangeConfig = {
  flat: {
    range: {
      min: 1000,
      max: 100000,
    },
    start: 1000,
    step: 1000,
  },
  bungalow: {
    range: {
      min: 0,
      max: 100000,
    },
    start: 0,
    step: 1000,
  },
  hotel: {
    range: {
      min: 3000,
      max: 100000,
    },
    start: 3000,
    step: 1000,
  },
  house: {
    range: {
      min: 5000,
      max: 100000,
    },
    start: 5000,
    step: 1000,
  },
  palace: {
    range: {
      min: 10000,
      max: 100000,
    },
    start: 10000,
    step: 1000,
  }
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
  typeToRangeConfig
};
