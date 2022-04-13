import './data.js';
import './popup.js';
import './map.js';
import './slider.js';
import './reset.js';

import {setUserFormSubmit} from './form.js';
import {showSuccessMessage} from './success-message.js';
import {getData} from './api.js';
import {createData} from './map.js';

const SIMILAR_ADS_COUNT = 10;

getData((ads) => createData(ads.slice(0, SIMILAR_ADS_COUNT)));

setUserFormSubmit(showSuccessMessage);
