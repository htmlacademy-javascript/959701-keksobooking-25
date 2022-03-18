
// Вспомогательные функции


// Функция, возвращающая значение элемента массива в рандомном порядке
// Источник: https://expange.ru/e/%D0%A1%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D1%8B%D0%B9_%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0_(JavaScript)

const getArrayRandomElement = (arr) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};


// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomNumber(min, max) {
  if (min >= max || min < 0 || max <= 0) {
    return 'Error. Pick other numbers.';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// Источник: https://bobbyhadz.com/blog/javascript-get-random-float-in-range

function getRandomCoordinate(minDigit, maxDigit, decimals) {
  if (minDigit >= maxDigit || minDigit < 0 || maxDigit <= 0) {
    return 'Error. Pick other numbers.';
  }
  const coordinate = Math.random() * (maxDigit - minDigit) + minDigit;
  return parseFloat(coordinate.toFixed(decimals));
}


// Функция, задающая номер для адреса изображения (avatar)
// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

function getNumberWithLeadZero(num) {
  return num < 10 ? `0${num}` : num;
}


// Функция, для получения случайного фрагмента массива.

const getRandomArrayPart = (arr) => {
  const lastIndex = arr.length - 1;
  const a = getRandomNumber(0, lastIndex);
  const b = getRandomNumber(0, lastIndex);
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  return arr.slice(lower, upper);
};


// Функция для получения случайного значения из объекта.

const getRandomProperty = (obj) => {
  const keys = Object.keys(obj);
  return obj[getArrayRandomElement(keys)];
};

// Функция проверки нажатия клавиши Escape
const isEscapeKey = (evt) => evt.key === 'Escape';

export {
  getArrayRandomElement,
  getRandomNumber,
  getRandomCoordinate,
  getNumberWithLeadZero,
  getRandomArrayPart,
  getRandomProperty,
  isEscapeKey
};
