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

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text',
});

const roomsField = adForm.querySelector('[name="rooms"]');
const capacityField = adForm.querySelector('[name="capacity"]');
const capacityOption = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const validateCapacity = () => capacityOption[roomsField.value].includes(capacityField.value);

const getCapacityErrorMessage = () => {
  if (roomsField.value === '1') {
    return 'для 1 гостя';
  } else if (roomsField.value === '2') {
    return 'для 1 или 2 гостей';
  } else if (roomsField.value === '3') {
    return 'для 1-3 гостей';
  } else if (roomsField.value === '100') {
    return 'не для гостей';
  }
};

pristine.addValidator(roomsField, validateCapacity, getCapacityErrorMessage);
pristine.addValidator(capacityField, validateCapacity, getCapacityErrorMessage);

adForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

export {deactivatePage, activatePage};

