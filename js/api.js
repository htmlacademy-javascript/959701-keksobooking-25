import { createPopup } from './popup.js';
import { switchButton } from './user-form.js';
import { mapFiltersElement, toggleForm, mapFiltersDisabledClassName } from './page-status.js';

const SERVER = 'https://25.javascript.pages.academy/keksobooking';
const DATA_URL = `${SERVER}/data`;

// Загрузка объявлений с сервера

const receiveData = (onSuccess) => fetch(DATA_URL, {
  method: 'GET',
  credentials: 'same-origin',
})
  .then((res) => res.json())
  .then(onSuccess)
  .catch(() => {
    toggleForm(false, mapFiltersElement, mapFiltersDisabledClassName);
    createPopup(false, (popupElement) => {
      popupElement.querySelector('.error__message').textContent = 'Ошибка получения объявлений';
      popupElement.querySelector('.error__button').textContent = 'Добавить объявление';
    });
    return [];
  });

// Отправка объявления на сервер

const sendData = (data) => fetch(SERVER, {
  method: 'POST',
  body: data,
})
  .then(({ ok }) => {
    createPopup(ok);
    switchButton(false);
  })
  .catch(() => {
    createPopup(false);
  });

export { receiveData, sendData };

