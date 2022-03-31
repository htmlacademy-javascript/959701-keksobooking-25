import { loadingErrorTemplate, createPopup } from './user-form.js';

const DATA = 'https://25.javascript.pages.academy/keksobooking/data';
const SERVER = 'https://25.javascript.pages.academy/keksobooking';

// Загрузка объявлений с сервера

const createLoader = (onSuccess) => (fetch(DATA,
  {
    method: 'GET',
    credentials: 'same-origin',
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    if (response.status === 400) {
      return createPopup(loadingErrorTemplate);
    }
    if (response.status === 403) {
      return createPopup(loadingErrorTemplate);
    }
    if (response.status === 404) {
      return createPopup(loadingErrorTemplate);
    }
    if (response.status === 500) {
      return createPopup(loadingErrorTemplate);
    }
  })
  .then((data) => {
    onSuccess(data);
  }));

// Отправка данных

const sendData = (data) => (fetch(SERVER,
  {
    method: 'POST',
    body: data,
  },
));

export { createLoader, sendData };
