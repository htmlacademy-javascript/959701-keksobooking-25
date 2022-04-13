// Функция проверки нажатия клавиши Escape

const isEscapeKeyPressed = (evt) => evt.key === 'Escape';

// Корректировка существительных после числительных

const declineNum = (num, optionOne, optionTwo) => {
  if (Number(num) === 1) { return optionOne; }
  else {
    return optionTwo;
  }
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
