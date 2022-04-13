import { createPopup } from './popup.js';
import { mapFiltersElement, toggleForm, mapFiltersDisabledClassName } from './page-status.js';
import { SERVER, DATA_URL } from './const.js';

// Загрузка объявлений с сервера

const receiveData = (onSuccess) => fetch(DATA_URL, {
  method: 'GET',
  credentials: 'same-origin',
})
  .then((res) => res.json())
  .then(onSuccess)
  .then(() => toggleForm(true, mapFiltersElement, mapFiltersDisabledClassName))
  .catch(() => {
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
  })
  .catch(() => {
    createPopup(false);
  });

export { receiveData, sendData };

