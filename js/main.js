import './slider.js';
import './user-form.js';
import './filter.js';
import { QUANTITY_OFFERS } from './data.js';
import { createMarker } from './map.js';
import { receiveData } from './api.js';
import { createOfferTemplate } from './template-card.js';

const renderListings = (listings) => {
  listings.forEach((offer) => {
    createMarker(offer.location, createOfferTemplate(offer));
  });
};

receiveData((data) => {
  renderListings(data.slice(0, QUANTITY_OFFERS));
});

export { renderListings };
