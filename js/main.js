import { QUANTITY_OBJECTS } from './data.js';
import { getNewRandomListings, getListing } from './listing-generator.js';
import './util.js';
import './template-card.js';

getNewRandomListings(QUANTITY_OBJECTS, getListing);
