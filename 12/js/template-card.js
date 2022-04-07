// Создание шаблона объявления

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

const createOfferTemplate = ({ author = {}, offer = {} }) => {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);
  const card = cardElement.querySelector('.popup');

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
    const element = card.querySelector(selector);
    if (content) {
      element.textContent = content;
    } else {
      element.remove();
    }
  });

  const featuresELement = card.querySelector('.popup__features');
  fillELement(featuresELement, offer.features, (feature) => {
    const featureElement = document.createElement('li');
    featureElement.className = `popup__feature popup__feature--${feature}`;
    return featureElement;
  });

  const photosElement = card.querySelector('.popup__photos');
  const photoSampleELement = photosElement.querySelector('.popup__photo');
  fillELement(photosElement, offer.photos, (photo) => {
    const photoElement = photoSampleELement.cloneNode();
    photoElement.src = photo;
    return photoElement;
  });

  const avatarElement = card.querySelector('.popup__avatar');
  if (author.avatar) {
    avatarElement.src = author.avatar;
  } else {
    avatarElement.remove();
  }
  return card;
};

export { createOfferTemplate };
