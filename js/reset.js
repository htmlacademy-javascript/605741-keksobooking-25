import {adForm, housingType, priceForNight, timeIn, timeOut, roomsField, capacityField} from './form.js';
import {getResetMap} from './map.js';
import {Default, typeSelector, priceSelector, roomsSelector, guestsSelector} from './filters.js';
import {clearPhotos} from './avatar-pictures.js';

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

const getResetFilters = () => {
  typeSelector.value = Default.TYPE;
  priceSelector.value = Default.TYPE;
  roomsSelector.value = Default.TYPE;
  guestsSelector.value = Default.TYPE;
  document.querySelectorAll('.map__checkbox').forEach((element) => {
    element.checked = false;
  });
};

const removeBalloon = () => {
  const openedBalloon = document.querySelector('.leaflet-popup');
  if (openedBalloon) {
    openedBalloon.remove();
  }
};

const getResetPage = () => {
  getFieldsInitialState();
  getResetMap();
  getResetFilters();
  clearPhotos();
  removeBalloon();
};

export {getResetPage, removeBalloon};
