import {removeBalloon} from './reset.js';

const Default = {
  TYPE: 'any',
};

const HOUSING_PRICE = {
  MIN_PRICE: 10000,
  MAX_PRICE: 50000,
};

const mapFilters = document.querySelector('.map__filters');
const typeSelector = mapFilters.querySelector('[name="housing-type"]');
const priceSelector = mapFilters.querySelector('[name="housing-price"]');
const roomsSelector = mapFilters.querySelector('[name="housing-rooms"]');
const guestsSelector = mapFilters.querySelector('[name="housing-guests"]');

const typeFilter = (data) => typeSelector.value === Default.TYPE || data.offer.type === typeSelector.value;
const roomsFilter = (data) => roomsSelector.value === Default.TYPE || data.offer.rooms === +roomsSelector.value;
const guestsFilter = (data) => guestsSelector.value === Default.TYPE || data.offer.guests === +guestsSelector.value;


const priceFilter = (data) => {
  if (priceSelector.value === 'low') {
    return data.offer.price < HOUSING_PRICE.MIN_PRICE;
  }
  if (priceSelector.value === 'middle') {
    return data.offer.price >= HOUSING_PRICE.MIN_PRICE && data.offer.price <= HOUSING_PRICE.MAX_PRICE;
  }
  if (priceSelector.value === 'high') {
    return data.offer.price > HOUSING_PRICE.MAX_PRICE;
  }

  return true;
};

const featuresFilter = (data) => {
  const featuresInputs = mapFilters.querySelectorAll('[name="features"]:checked');
  const featuresValues = Array.from(featuresInputs, (element) => element.value);

  if (data.offer.features) {
    return featuresValues.every((value) => data.offer.features.includes(value));
  }
};

const onFilter = (data) =>
  typeFilter(data) &&
  priceFilter(data) &&
  roomsFilter(data) &&
  guestsFilter(data) &&
  featuresFilter(data);

const setFilterChanges = (cb) => {
  mapFilters.addEventListener('change', () => {
    cb();
    removeBalloon();
  });
};

export {onFilter, setFilterChanges, typeFilter, Default, typeSelector, priceSelector, roomsSelector, guestsSelector};
