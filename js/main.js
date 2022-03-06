import './util.js';
import {QUANTITY_OBJECTS} from './data.js';
import {getNewRandomListings, getListing} from './listing-generator.js';


console.log(getNewRandomListings(QUANTITY_OBJECTS, getListing));
