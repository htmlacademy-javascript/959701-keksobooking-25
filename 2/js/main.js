//Функция, возвращающая случайное целое число из переданного диапазона включительно.
//Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber(min, max) {
  if (min > max || min < 0 || max <= 0) {
    return ('Error. Pick other numbers.');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumber(1,7);


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. Вариант №1.
function getRandomDigits(minValue, maxValue, NumberOfDigits) {
  if (minValue > maxValue || minValue < 0 || maxValue <= 0) {
    return ('Error. Pick other numbers.');
  }
  minValue = Math.ceil(minValue);
  maxValue = Math.floor(maxValue);
  return ((Math.random() * (maxValue - minValue + 1)) + minValue).toFixed(NumberOfDigits);
}
getRandomDigits(1,4,6);


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. Вариант №2.
//Источник: https://qna.habr.com/q/999157
function getRandomCordinate(minDigit, maxDigit, digitsAfterDot = 0) {
  if (minDigit > maxDigit || minDigit < 0 || maxDigit <= 0) {
    return ('Error. Pick other numbers.');
  }
  const digitsDegree = 10 ** digitsAfterDot;
  return ~~((Math.random() * (maxDigit - minDigit) + minDigit) * digitsDegree) / digitsDegree;
}
getRandomCordinate(3, 5, 6);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. Вариант №3.
//Источник: подглядела у наставника в Telegram и немного модифицировала:)
function getRandom(firstNumber, secondNumber, decimals) {
  if (firstNumber < 0 || secondNumber < 0) {
    return ('Error. Pick other numbers.');
  }
  const maxNumber = Math.max(firstNumber, secondNumber);
  const minNumber = Math.min(firstNumber, secondNumber);

  const intermediateResult = Math.random() * (maxNumber - minNumber + 1) + minNumber;

  return Number(Math.min(intermediateResult, maxNumber).toFixed(decimals).toString());
}
getRandom(2,4,6);
