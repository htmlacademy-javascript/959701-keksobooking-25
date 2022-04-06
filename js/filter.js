import { receiveData } from './api.js';
import { removeMapPin } from './map.js';
import { renderListings } from './main.js';
import { QUANTITY_OFFERS } from './data.js';
import { debounce } from './util.js';

const RERENDER_DELAY = 500;
const DEFAULT_VALUE = 'any';
const housingPrice = {
  'low': {
    from: 0,
    to: 10000,
  },
  'middle': {
    from: 10000,
    to: 50000,
  },
  'high': {
    from: 50000,
    to: Infinity,
  },
};
const filterElement = document.querySelector('.map__filters');
const filters = Array.from(document.querySelector('.map__filters').children);

const filterRules = {
  'housing-type': (data, filter) => filter.value === data.offer.type,
  'housing-price': (data, filter) => data.offer.price >= housingPrice[filter.value].from && data.offer.price < housingPrice[filter.value].to,
  'housing-rooms': (data, filter) => filter.value === data.offer.rooms.toString(),
  'housing-guests': (data, filter) => filter.value === data.offer.guests.toString(),
  'housing-features': (data, filter) => {
    const checkedCheckboxes = Array.from(filter.querySelectorAll('input[type="checkbox"]:checked'));
    return checkedCheckboxes.every((checkbox) => data.offer.features.some((feature) => feature === checkbox.value));
  },
};

const filterOffers = (data) => {
  const offers = [];
  let result;
  for (let i = 0; i < data.length && offers.length < QUANTITY_OFFERS; i++) {
    result = filters.every((filter) => filter.value === DEFAULT_VALUE ? true : filterRules[filter.id](data[i], filter));
    if (result) {
      offers.push(data[i]);
    }
  }
  return offers;
};

filterElement.addEventListener('change', () => {
  receiveData((data) => {
    removeMapPin();
    const offers = data.slice();
    debounce(renderListings(filterOffers(offers), RERENDER_DELAY));
  });
});

export { filterOffers, filterElement };

