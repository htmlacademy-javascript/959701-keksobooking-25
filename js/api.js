import { createPopup } from './popup.js';
import { switchSubmitButton } from './user-form.js';
import { mapFiltersElement, toggleForm, mapFiltersDisabledClassName } from './page-status.js';
import { SERVER, DATA_URL } from './data.js';

// Загрузка объявлений с сервера

const receiveData = (onSuccess) => fetch(DATA_URL, {
  method: 'GET',
  credentials: 'same-origin',
})
  .then((res) => res.json())
  .then(onSuccess)
  .catch(() => {
    createPopup(false, (popupElement) => {
      popupElement.querySelector('.error__message').textContent = 'Ошибка получения объявлений';
      popupElement.querySelector('.error__button').textContent = 'Добавить объявление';
    });
    toggleForm(false, mapFiltersElement, mapFiltersDisabledClassName);
    return [];
  });

// Отправка объявления на сервер

const sendData = (data) => fetch(SERVER, {
  method: 'POST',
  body: data,
})
  .then(({ ok }) => {
    createPopup(ok);
    switchSubmitButton(false);
  })
  .catch(() => {
    createPopup(false);
  });

export { receiveData, sendData };

