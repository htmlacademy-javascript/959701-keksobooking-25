import './slider.js';
import './user-form.js';
import { createLoader } from './api.js';
import { renderListings } from './template-card.js';

createLoader(renderListings);

