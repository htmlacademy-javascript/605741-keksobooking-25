import {showFailMessage} from './alert.js';
import {deactivateFilters, activateFilters} from './form.js';

const getData = (onSuccess) => {
  fetch(
    'https://25.javascript.pages.academy/keksobooking/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => {
      if (response.ok) {
        activateFilters();
        return response.json();
      } else {
        deactivateFilters();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => onSuccess(data))
    .catch((err) => showFailMessage(err));
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://25.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => onFail());
};

export {getData, sendData};
