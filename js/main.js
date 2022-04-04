import './slider.js';
import './user-form.js';
import { createMarker } from './map.js';
import { receiveData } from './api.js';
import { createOfferTemplate } from './template-card.js';

const renderListings = (listings) => {
  listings.forEach((offer) => {
    createMarker(offer.location, createOfferTemplate(offer));
  });
};

receiveData(renderListings);
