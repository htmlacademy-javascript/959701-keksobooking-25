import { offerType } from './user-form.js';

const cardTemplateElement = document.querySelector('#card').content;

const fillELement = (element, list = [], getChild) => {
  if (list.length > 0) {
    element.innerHTML = '';
    list.forEach((item) => {
      element.append(getChild(item));
    });
  } else {
    element.remove();
  }
};

// Создание шаблона объявления

const createOfferTemplate = ({ author = {}, offer = {} }) => {
  const cardElement = cardTemplateElement.cloneNode(true);
  const cardPopupElement = cardElement.querySelector('.popup');
  const typeElement = cardPopupElement.querySelector('.popup__type');
  const contentToSelector = {
    '.popup__title': offer.title,
    '.popup__text--address': offer.address,
    '.popup__text--price': `${offer.price} \u20bd/ночь`,
    '.popup__type': offer.type,
    '.popup__text--capacity': `${offer.rooms} комнаты для ${offer.guests} гостей`,
    '.popup__text--time': `Заезд после ${offer.checkin} выезд до ${offer.checkout}`,
    '.popup__description': offer.description
  };
  Object.entries(contentToSelector).forEach(([selector, content]) => {
    const element = cardPopupElement.querySelector(selector);
    typeElement.textContent = offerType[offer.type].ru;
    if (content) {
      element.textContent = content;
    } else {
      element.remove();
    }
  });

  const featuresELement = cardPopupElement.querySelector('.popup__features');
  fillELement(featuresELement, offer.features, (feature) => {
    const featureElement = document.createElement('li');
    featureElement.className = `popup__feature popup__feature--${feature}`;
    return featureElement;
  });

  const photosElement = cardPopupElement.querySelector('.popup__photos');
  const photoSampleELement = photosElement.querySelector('.popup__photo');
  fillELement(photosElement, offer.photos, (photo) => {
    const photoElement = photoSampleELement.cloneNode();
    photoElement.src = photo;
    return photoElement;
  });

  const avatarElement = cardPopupElement.querySelector('.popup__avatar');
  if (author.avatar) {
    avatarElement.src = author.avatar;
  } else {
    avatarElement.remove();
  }
  return cardPopupElement;
};

export { createOfferTemplate };
