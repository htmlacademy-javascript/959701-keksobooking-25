// Активация/деактивация страницы

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
  if(!activeFlag) {
    while (mapCanvasElement.firstChild) {
      mapCanvasElement.removeChild(mapCanvasElement.firstChild);
    }
  }
};

const togglePage = (activeFlag) => () => {
  toggleForm(activeFlag, mapFiltersElement, mapFiltersDisabledClassName);
  toggleForm(activeFlag, adFormElement, adFormDisabledClassName);
};

const activatePage = togglePage(true);
const deactivatePage = togglePage(false);

document.addEventListener('load', deactivatePage());

export { activatePage, deactivatePage, mapFiltersElement, toggleForm, mapFiltersDisabledClassName };
