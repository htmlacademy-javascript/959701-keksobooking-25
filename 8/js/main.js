import './user-form.js';
import './slider.js';
import { QUANTITY_OBJECTS, } from './data.js';
import { getListing, getNewRandomListings } from './listing-generator.js';
import { createOfferTemplate } from './template-card.js';
import { createMarker } from './map.js';

const offers = getNewRandomListings(QUANTITY_OBJECTS, getListing);

// Добавление объявлений

offers.forEach((offer) => {
  createMarker(offer.location, createOfferTemplate(offer));
});
