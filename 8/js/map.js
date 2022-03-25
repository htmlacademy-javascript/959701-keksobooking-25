import { activatePage } from './page-status.js';
import { getNewRandomListings, getListing } from './listing-generator.js';
import { QUANTITY_OBJECTS } from './data.js';
import { createOfferTemplate } from './template-card.js';

const offers = getNewRandomListings(QUANTITY_OBJECTS, getListing);
const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage();
  })
  .setView({
    lat: 35.6894,
    lng: 139.69235,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// Добавление главного маркера

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6894,
    lng: 139.69235,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

// Добавление координат по умолчанию в форму

address.value = `${mainPinMarker._latlng.lat},${mainPinMarker._latlng.lng}`;

// Данные для address в форме объявления

mainPinMarker.on('moveend', (evt) => {
  const markerCoordinate = evt.target.getLatLng();
  address.value = `${markerCoordinate.lat.toFixed(5)},${markerCoordinate.lng.toFixed(5)}`;
});

// mainPinMarker.remove(); удаление маркера

// Маркер для размещенных объявлений

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


// Создание маркера объявления и popup

const createMarker = ((offer) => {
  const marker = L.marker(
    {
      lat: offer.location.lat,
      lng: offer.location.lng,
    },
    {
      icon: icon,
    },
  );
  marker
    .addTo(map)
    .bindPopup(createOfferTemplate(offer));
});

// Сброс формы

const resetButton = document.querySelector('.ad-form__reset');

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: 35.6894,
    lng: 139.69235,
  });
  map.setView({
    lat: 35.6894,
    lng: 139.69235,
  }, 12);
}
);

export {
  offers,
  createMarker,
};
