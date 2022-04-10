import { createOfferTemplate } from './template-card.js';
import { createMarker } from './map.js';
import { QUANTITY_OFFERS } from './data.js';
import { receiveData } from './api.js';

// Отрисовка маркеров и объявлений

const renderListings = (listings) => {
  listings.forEach((offer) => {
    createMarker(offer.location, createOfferTemplate(offer));
  });
};

const renderStartListings = () => {
  receiveData((data) => {
    renderListings(data.slice(0, QUANTITY_OFFERS));
  });
};

export { renderListings, renderStartListings };
