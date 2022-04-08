const DECLINE_THRESHOLD = 5;
const DECLINE_TAILSTART = -2;

// Функция проверки нажатия клавиши Escape

const isEscapeKeyPressed = (evt) => evt.key === 'Escape';

// Корректировка существительных после числительных

const declineNum = (num, nominative, genitiveSingular = nominative, genitivePlural = genitiveSingular) => {
  let answer = genitivePlural;
  const numLast = parseInt(num.toString().slice(-1), 10);
  const numLastDecim = parseInt(num.toString().slice(DECLINE_TAILSTART, -1), 10);
  if (numLastDecim !== 1) {
    if (numLast === 1) {
      answer = nominative;
    } else if (numLast > 1 && numLast < DECLINE_THRESHOLD) {
      answer = genitiveSingular;
    }
  }
  return `${num} ${answer}`;
};

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
  declineNum,
  debounce
};
