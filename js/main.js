import { QUANTITY_OBJECTS } from './data.js';
import { getNewRandomListings, getListing } from './listing-generator.js';
import { createOfferTemplate } from './template-card.js';
import './user-form.js';
import { deactivatePage, activatePage } from './page-status.js';


const [offer] = getNewRandomListings(QUANTITY_OBJECTS, getListing);
const offerTemplate = createOfferTemplate(offer);

const mapCanvas = document.querySelector('#map-canvas');

mapCanvas.append(offerTemplate);

deactivatePage();

mapCanvas.addEventListener('click', () => activatePage());
