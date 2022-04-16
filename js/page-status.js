// Активация/деактивация элементов страницы

const mapFiltersElement = document.querySelector('.map__filters');
const postFormElement = document.querySelector('.ad-form');
const mapFiltersDisabledClassName = 'map__filters--disabled';
const postFormDisabledClassName = 'ad-form--disabled';

const toggleForm = (activeFlag, formElement, disabledClassName) => {
  const classMethod = activeFlag ? 'remove' : 'add';
  formElement.classList[classMethod](disabledClassName);

  formElement.querySelectorAll('fieldset').forEach((fieldset) => {
    fieldset.disabled = !activeFlag;
  });
  formElement.querySelectorAll('select').forEach((select) => {
    select.disabled = !activeFlag;
  });
};

const toggleStatusForm = (activeFlag) => () => {
  toggleForm(activeFlag, postFormElement, postFormDisabledClassName);
};

const activateForm = toggleStatusForm(true);

export { activateForm, mapFiltersElement, toggleForm, mapFiltersDisabledClassName };

