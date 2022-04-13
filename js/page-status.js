// Активация/деактивация элементов страницы

const mapFiltersElement = document.querySelector('.map__filters');
const adFormElement = document.querySelector('.ad-form');
const mapFiltersDisabledClassName = 'map__filters--disabled';
const adFormDisabledClassName = 'ad-form--disabled';
const mapCanvasElement = document.querySelector('#map-canvas');

const toggleForm = (activeFlag, formElement, disabledClassName) => {
  const classMethod = activeFlag ? 'remove' : 'add';
  formElement.classList[classMethod](disabledClassName);

  formElement.querySelectorAll('fieldset').forEach((fieldset) => {
    fieldset.disabled = !activeFlag;
  });
  formElement.querySelectorAll('select').forEach((select) => {
    select.disabled = !activeFlag;
  });
  if (!activeFlag) {
    while (mapCanvasElement.firstChild) {
      mapCanvasElement.removeChild(mapCanvasElement.firstChild);
    }
  }
};

const toggleStatusForm = (activeFlag) => () => {
  toggleForm(activeFlag, adFormElement, adFormDisabledClassName);
};

const activateForm = toggleStatusForm(true);

export { activateForm, mapFiltersElement, toggleForm, mapFiltersDisabledClassName };

