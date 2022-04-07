import './slider.js';
import './user-form.js';
import './filter.js';
import './pic-uploader.js';
import { QUANTITY_OFFERS } from './data.js';
import { renderListings } from './map.js';
import { receiveData } from './api.js';

receiveData((data) => {
  renderListings(data.slice(0, QUANTITY_OFFERS));
});

