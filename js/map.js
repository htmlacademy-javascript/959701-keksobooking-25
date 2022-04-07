import { activatePage } from './page-status.js';
import { DEFAULT_LOCATION } from './data.js';
import { filterElement } from './filter.js';
import { receiveData } from './api.js';
import { QUANTITY_OFFERS } from './data.js';
import { createOfferTemplate } from './template-card.js';

const address = document.querySelector('#address');

const map = L.map('map-canvas').on('load', activatePage).setView(DEFAULT_LOCATION, 12);

const markerGroup = L.layerGroup().addTo(map);

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

const mainPinMarker = L.marker(DEFAULT_LOCATION, {
  draggable: true,
  icon: mainPinIcon,
});
mainPinMarker.addTo(map);

// Добавление координат в форму

const getLocationString = (({ lat, lng }) => `${lat.toFixed(5)}, ${lng.toFixed(5)}`);

mainPinMarker.on('moveend', (evt) => {
  address.value = getLocationString(evt.target.getLatLng());
});

// Маркер для размещенных объявлений

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// Создание маркера объявления

const createMarker = (location, popupContent) => {
  L
    .marker(location, { icon })
    .addTo(markerGroup)
    .bindPopup(popupContent);
};

// Отрисовка маркеров и объявлений

const renderListings = (listings) => {
  listings.forEach((offer) => {
    createMarker(offer.location, createOfferTemplate(offer));
  });
};

// Удаление маркеров

const removeMapPin = () => {
  markerGroup.clearLayers();
};

// Сброс формы

const resetButton = document.querySelector('.ad-form__reset');

const resetMapSettings = () => {
  mainPinMarker.setLatLng(DEFAULT_LOCATION);
  map.closePopup().setView(DEFAULT_LOCATION, 12);
  filterElement.reset();
  receiveData((data) => {
    renderListings(data.slice(0, QUANTITY_OFFERS));
  });

};

resetButton.addEventListener('click', () => {
  resetMapSettings();
});


export { createMarker, map, mainPinMarker, resetMapSettings, removeMapPin, renderListings };
