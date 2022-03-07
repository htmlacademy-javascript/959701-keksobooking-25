import {
  TYPES,
  CHECKIN,
  CHECKOUT,
  FEATURES,
  PHOTOS,
  QUANTITY_OBJECTS,
  COORD_DECIMALS,
  LatRange,
  LngRange,
  PriceRange,
  RoomsRange,
  GuestsRange
} from './data.js';

import {
  getArrayRandomElement,
  getRandomNumber,
  getRandomCoordinate,
  getNumberWithLeadZero,
  getRandomArrayPart
} from './util.js';

// Генерация объявлений

// Функция, генерирующая одно объявление (объект) со случайным содержимым.
// Источник: частично из демонстрации и лайва раздела 4 "Встроенные объекты и функции".

const getListing = (_el, i) => {
  const lat = getRandomCoordinate(LatRange.MIN, LatRange.MAX, COORD_DECIMALS);
  const lng = getRandomCoordinate(LngRange.MIN, LngRange.MAX, COORD_DECIMALS);

  return {
    author: {
      avatar: `img/avatars/user${getNumberWithLeadZero(i + 1)}.png`,
    },
    offer: {
      title: `Заголовок объявления ${i + 1}`,
      address: `${lat}, ${lng}`,
      price: getRandomNumber(PriceRange.MIN, PriceRange.MAX),
      type: getArrayRandomElement(TYPES),
      rooms: getRandomNumber(RoomsRange.MIN, RoomsRange.MAX),
      guests: getRandomNumber(GuestsRange.MIN, GuestsRange.MAX),
      checkin: getArrayRandomElement(CHECKIN),
      checkout: getArrayRandomElement(CHECKOUT),
      features: getRandomArrayPart(FEATURES),
      description: `Описание номера ${i + 1}`,
      photos: getArrayRandomElement(PHOTOS),
    },
    location: {
      lat,
      lng
    }
  };
};


// Функция, генерирующая массив из 10 объявлений (объектов) со случайным содержимым.
// Источник: https://up.htmlacademy.ru/profession/react/9/javascript/25/demos/6301#13

function getNewRandomListings(length, getObject) {
  return Array.from({ length }, getObject);
}


export {
  getListing,
  getNewRandomListings
};


