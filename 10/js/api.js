import { createPopup } from './popup.js';

const SERVER = 'https://25.javascript.pages.academy/keksobooking';
const DATA_URL = `${SERVER}/data`;

// Загрузка объявлений с сервера

const receiveData = (onSuccess) => fetch(DATA_URL,
  {
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
    return [];
  });

// Отправка объявления на сервер

const sendData = (data) => fetch(SERVER,
  {
    method: 'POST',
    body: data,
  })
  .then(({ ok }) => {
    createPopup(ok);
  });

export { receiveData, sendData };
