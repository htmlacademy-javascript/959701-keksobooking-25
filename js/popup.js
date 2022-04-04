import { isEscapeKeyPressed } from './util.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const createPopup = (isSucces = true, modifyPopup = null) => {

  const template = isSucces ? successTemplate : errorTemplate;
  const popupElement = template.cloneNode(true);

  if (typeof modifyPopup === 'function') {
    modifyPopup(popupElement);
  }
  document.body.append(popupElement);

  const closePopup = () => {
    popupElement.remove();
    document.removeEventListener('keydown', keyCloseHandler);
  };

  function keyCloseHandler(evt) {
    if (isEscapeKeyPressed(evt)) {
      evt.preventDefault();
      closePopup();
    }
  }
  popupElement.addEventListener('click', () => closePopup());
  document.addEventListener('keydown', keyCloseHandler);
};

export { createPopup, errorTemplate };
