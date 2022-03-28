import { activatePage } from './page-status.js';
import { DEFAULT_LOCATION } from './data.js';

const address = document.querySelector('#address');

const map = L.map('map-canvas').on('load', activatePage).setView(DEFAULT_LOCATION, 12);

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
    .addTo(map)
    .bindPopup(popupContent);
};

// Сброс формы

const resetButton = document.querySelector('.ad-form__reset');

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng(DEFAULT_LOCATION);
  map.setView(DEFAULT_LOCATION, 12);
}
);

export { createMarker };
