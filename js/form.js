const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const deactivatePage = () => {
  adForm.classList.add('ad-form--disabled');
  adForm.querySelector('fieldset').classList.add('disabled');
  mapFilters.classList.add('map__filters--disabled');
  mapFilters.querySelector('select').classList.add('disabled');
  mapFilters.querySelector('fieldset').classList.add('disabled');
};

const activatePage = () => {
  adForm.classList.remove('ad-form--disabled');
  adForm.querySelector('fieldset').classList.remove('disabled');
  mapFilters.classList.remove('map__filters--disabled');
  mapFilters.querySelector('select').classList.remove('disabled');
  mapFilters.querySelector('fieldset').classList.remove('disabled');
};

export {deactivatePage, activatePage};
