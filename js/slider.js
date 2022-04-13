import { MAX_PRICE } from './user-form.js';

// Создание слайдера

const createTypeRangeConfig = (min) => ({
  range: {
    min,
    max: MAX_PRICE
  },
  start: min,
  step: 1000,
});

const createUISlider = (formElement, start = 0) => {
  noUiSlider.create(formElement, {
    ...createTypeRangeConfig(0),
    start,
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
  return formElement.noUiSlider;
};

const updateSlider = (slider, value) => slider.updateOptions(createTypeRangeConfig(value));

export { createUISlider, updateSlider };
