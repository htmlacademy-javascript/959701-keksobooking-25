// Неактивное состояние страницы

const disableForm = () => {
  document.querySelector('.ad-form').classList.add('ad-form--disabled');
  document.querySelector('.map__filters').classList.add('map__filters--disabled');
  const disabledFormElements = document.querySelector('.ad-form').querySelectorAll('fieldset');
  for (let i = 0; i < disabledFormElements.length; i++) {
    disabledFormElements[i].setAttribute('disabled', 'disabled');
  }
  const disabledFilterElements = document.querySelector('.map__filters').querySelectorAll('select, fieldset');
  for (let j = 0; j < disabledFilterElements.length; j++) {
    disabledFilterElements[j].setAttribute('disabled', 'disabled');
  }
};

// Переход в неактивное состояние при загрузке страницы

document.addEventListener('DOMContentLoaded', disableForm);

// Активное состояние страницы
const activateForm = () => {
  document.querySelector('.ad-form').classList.remove('ad-form--disabled');
  document.querySelector('.map__filters').classList.remove('map__filters--disabled');
  const activeFormElements = document.querySelector('.ad-form').querySelectorAll('fieldset');
  for (let i = 0; i < activeFormElements.length; i++) {
    activeFormElements[i].removeAttribute('disabled');
  }
  const activeFilterElements = document.querySelector('.map__filters').querySelectorAll('select, fieldset');
  for (let j = 0; j < activeFilterElements.length; j++) {
    activeFilterElements[j].removeAttribute('disabled');
  }
};
activateForm();

