import { typeToRangeConfig } from './data.js';

const sliderPrice = document.querySelector('.ad-form__slider');
const priceValue = document.querySelector('#price');
const accommodationType = document.querySelector('#type');

// Создание слайдера

noUiSlider.create(sliderPrice, {
  range: {
    min: 1000,
    max: 100000,
  },
  start: 0,
  step: 1000,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});

/*Попытка написать функцию для генерации слайдера
const createUISlider = (formElement) => {
  noUiSlider.create(formElement, {
    range: {
      min: 0,
      max: 100000,
    },
    start: 0,
    step: 1000,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(0);
      },
      from: function (value) {
        return parseFloat(value);
      },
    }
  });
};
createUISlider(sliderPrice);

const priceSlider = createUISlider(sliderPrice); пробовала подставить в виде такой переменной
*/

// Отправка значения ползунка в форму объявления

sliderPrice.noUiSlider.on('slide', () => {
  priceValue.value = sliderPrice.noUiSlider.get();
});

accommodationType.addEventListener('change', (evt) => {
  sliderPrice.noUiSlider.updateOptions(typeToRangeConfig[evt.target.value]);
});
