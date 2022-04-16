import {adForm, housingType, priceForNight, timeIn, timeOut, roomsField, capacityField} from './form.js';
import {getResetMap} from './map.js';

const getFieldsInitialState = () => {
  adForm.querySelector('[name="title"]').value = '';
  housingType.value = 'flat';
  priceForNight.value = '';
  timeIn.value = '12:00';
  timeOut.value = '12:00';
  roomsField.value = '1';
  capacityField.value = '3';
  adForm.querySelector('[name="description"]').value = '';
};

const getResetPage = () => {
  getFieldsInitialState();
  getResetMap();
};

export {getResetPage};
