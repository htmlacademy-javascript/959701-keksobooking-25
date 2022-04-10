import { activatePage } from './page-status.js';
import { DEFAULT_LOCATION } from './data.js';
import { filterElement } from './filter.js';
import { renderStartListings } from './render-listings.js';

const addressElement = document.querySelector('#address');

const renderStartingLayer = (leafletMap) => {
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  ).addTo(leafletMap);
};

const map = L.map('map-canvas');

map.on('load', activatePage, renderStartingLayer(map), renderStartListings()).setView(DEFAULT_LOCATION, 12);

const markerGroup = L.layerGroup().addTo(map);

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
  addressElement.value = getLocationString(evt.target.getLatLng());
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

// Удаление маркеров

const removeMapPin = () => {
  markerGroup.clearLayers();
};

// Сброс к начальным настройкам карты

const resetMapSettings = () => {
  mainPinMarker.setLatLng(DEFAULT_LOCATION);
  map.closePopup().setView(DEFAULT_LOCATION, 12);
  filterElement.reset();
  renderStartListings();
};

export { createMarker, map, mainPinMarker, resetMapSettings, removeMapPin };
