import './popup.js';
import './map.js';
import './slider.js';
import './reset.js';

import {setUserFormSubmit} from './form.js';
import {showSuccessMessage} from './success-message.js';
import {getData} from './api.js';
import {createData} from './map.js';
import {setFilterChanges} from './filters.js';
import {debounce} from './util.js';

const RERENDER_DELAY = 500;

getData((ads) => {
  createData(ads);
  setFilterChanges(debounce(
    () => createData(ads),
    RERENDER_DELAY,
  ));
});

setUserFormSubmit(showSuccessMessage);
