import { QUANTITY_OBJECTS } from './data.js';
import { getNewRandomListings, getListing } from './listing-generator.js';
import { createOfferTemplate } from './template-card.js';


const [offer] = getNewRandomListings(QUANTITY_OBJECTS, getListing);
const offerTemplate = createOfferTemplate(offer);

document.querySelector('#map-canvas').append(offerTemplate);
