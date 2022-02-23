// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomNumber(min, max) {
  if (min > max || min < 0 || max <= 0) {
    return 'Error. Pick other numbers.';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumber(1, 7);


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// Источник: https://bobbyhadz.com/blog/javascript-get-random-float-in-range

function getRandomCoordinate(minDigit, maxDigit, decimals) {
  if (minDigit > maxDigit || minDigit < 0 || maxDigit <= 0) {
    return 'Error. Pick other numbers.';
  }
  const coordinate = (Math.random() * (maxDigit - minDigit) + minDigit).toFixed(decimals);

  return parseFloat(coordinate);
}
getRandomCoordinate(2, 4, 6);

