import { getNewRandomListings, getListing } from './listing-generator.js';
import { QUANTITY_OBJECTS, FEATURES, PHOTOS } from './data.js';
import { getRandomArrayPart } from './util.js';


const arrayListings = getNewRandomListings(QUANTITY_OBJECTS, getListing);


arrayListings.forEach((listing) => {
  const similarListElement = document.querySelector('#map-canvas');
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);

  const card = cardElement.querySelector('.popup');
  card.querySelector('.popup__title').textContent = listing.offer.title;
  card.querySelector('.popup__text--address').textContent = listing.offer.address;
  card.querySelector('.popup__text--price').textContent = `${listing.offer.price} \u20bd/ночь`;
  card.querySelector('.popup__type').textContent = listing.offer.type;
  card.querySelector('.popup__text--capacity').textContent = `${listing.offer.rooms} комнаты для ${listing.offer.guests} гостей`;
  card.querySelector('.popup__text--time').textContent = `Заезд после ${listing.offer.checkin} выезд до ${listing.offer.checkout}`;
  card.querySelectorAll('.popup__feature');
  card.querySelector('.popup__description').textContent = listing.offer.description;
  card.querySelector('.popup__photos');
  card.querySelector('.popup__avatar').src = listing.author.avatar;

  similarListElement.appendChild(card);

  // Отрисовка photos (фотографий помещений).
  const arrayPhotos = getRandomArrayPart(PHOTOS);
  const photosPopup = document.querySelector('.popup__photos');
  for (let i = 0; i < arrayPhotos.length; i++) {
    const photoTemplate = photosPopup.querySelector('.popup__photo').cloneNode(true);
    photoTemplate.src = arrayPhotos[i];
    photosPopup.remove();
    similarListElement.appendChild(photoTemplate);
  }
}
);

// Удаление из разметки отсутствующих в объявлении features.
const arrayFeatures = getRandomArrayPart(FEATURES);
const featureContainer = document.querySelector('.popup__features');
const featureList = featureContainer.querySelectorAll('.popup__feature');

featureList.forEach((featureListItem) => {
  const isNecessary = arrayFeatures.some(
    (userFeature) => featureListItem.classList.contains(`popup__feature--${userFeature}`),
  );
  if (!isNecessary) {
    featureListItem.remove();
  }
});


