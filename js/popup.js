import { isEscapeKeyPressed } from './util.js';
import { switchButton, buttonSubmitElement, buttonResetElement } from './user-form.js';

const errorTemplateElement = document.querySelector('#error').content.querySelector('.error');
const successTemplateElement = document.querySelector('#success').content.querySelector('.success');

const createPopup = (isSucces = true, modifyPopup = null) => {

  const template = isSucces ? successTemplateElement : errorTemplateElement;
  const popupElement = template.cloneNode(true);

  if (typeof modifyPopup === 'function') {
    modifyPopup(popupElement);
  }
  document.body.append(popupElement);
  switchButton(buttonSubmitElement, true);
  switchButton(buttonResetElement, true);

  const closePopup = () => {
    popupElement.remove();
    switchButton(buttonSubmitElement, false);
    switchButton(buttonResetElement, false);
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

export { createPopup };
