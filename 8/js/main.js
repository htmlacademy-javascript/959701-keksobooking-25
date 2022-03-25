import './user-form.js';
import { offers, createMarker } from './map.js';
import './slider.js';

// Добавление объявлений

offers.forEach((offer) => {
  createMarker(offer);
});
