import { createOfferTemplate } from './template-card.js';
import { createMarker, removeMapPin } from './map.js';
import { QUANTITY_OFFERS } from './const.js';
import { receiveData } from './api.js';
import { filterElement, filterOffers } from './filter.js';
import { debounce } from './util.js';
import { RERENDER_DELAY } from './const.js';
import { buttonResetElement } from './user-form.js';

let initialOffers = [];

// Отрисовка маркеров и объявлений

const renderListings = (listings) => {
  listings.forEach((offer) => {
    createMarker(offer.location, createOfferTemplate(offer));
  });
};

const renderInitialListings = () => renderListings(initialOffers);

const renderDownloadedListings = () => {
  receiveData((data) => {
    const offers = data.slice();
    initialOffers = offers.slice(0, QUANTITY_OFFERS);
    renderInitialListings();
    filterElement.addEventListener('change', debounce(() => {
      removeMapPin();
      const filtrationResult = filterOffers(offers);
      while (filtrationResult.length > QUANTITY_OFFERS) {
        if (filtrationResult === QUANTITY_OFFERS) {
          break;
        }
        filtrationResult.pop();
      }
      renderListings(filtrationResult);
    }, RERENDER_DELAY));
    buttonResetElement.addEventListener('click', () => renderInitialListings());
  });
};

export { renderListings, renderDownloadedListings, renderInitialListings };
