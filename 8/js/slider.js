const sliderPrice = document.querySelector('.ad-form__slider');
const priceValue = document.querySelector('#price');
const accommodationType = document.querySelector('#type');

// Создание слайдера

noUiSlider.create(sliderPrice, {
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

// Отправка значения ползунка в форму объявления

sliderPrice.noUiSlider.on('slide', () => {
  priceValue.value = sliderPrice.noUiSlider.get();
});

// Настройка минимального значения ползунка в зависимости от типа жилья

accommodationType.addEventListener('change', () => {
  if (accommodationType.value === 'flat') {
    sliderPrice.noUiSlider.updateOptions({
      range: {
        min: 1000,
        max: 100000,
      },
      start: 1000,
      step: 1000,
    });
  } else if (accommodationType.value === 'bungalow') {
    sliderPrice.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100000,
      },
      start: 0,
      step: 1000,
    });
  } else if (accommodationType.value === 'hotel') {
    sliderPrice.noUiSlider.updateOptions({
      range: {
        min: 3000,
        max: 100000,
      },
      start: 3000,
      step: 1000,
    });
  } else if (accommodationType.value === 'house') {
    sliderPrice.noUiSlider.updateOptions({
      range: {
        min: 5000,
        max: 100000,
      },
      start: 5000,
      step: 1000,
    });
  } else if (accommodationType.value === 'palace') {
    sliderPrice.noUiSlider.updateOptions({
      range: {
        min: 10000,
        max: 100000,
      },
      start: 10000,
      step: 1000,
    });
  }
});
