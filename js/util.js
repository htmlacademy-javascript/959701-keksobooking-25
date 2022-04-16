const PLURAL_THRESHOLD = 5;

// Функция проверки нажатия клавиши Escape

const isEscapeKeyPressed = (evt) => evt.key === 'Escape';

// Выбор словоформы по значению числа

const getWordAfterNum = (num, wordForms) => {
  const [nominative, genitiveSin = nominative, genitivePl = genitiveSin] = wordForms;
  const unitsValue = num % 10;
  if (num % 100 - unitsValue === 10 || unitsValue >= PLURAL_THRESHOLD) {
    return genitivePl;
  }
  if (num % 100 - unitsValue === 10 || unitsValue >= PLURAL_THRESHOLD) {
    return genitivePl;
  }

  if (unitsValue === 1) {
    return nominative;
  }

  return genitiveSin;
};

// Вывод числа с подходящей словоформой

const getNumWithWord = (num, wordForms) => `${num} ${getWordAfterNum(num, wordForms)}`;


// Устранение "дребезга"

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {
  isEscapeKeyPressed,
  getNumWithWord,
  debounce
};
