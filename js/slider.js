import {housingType, priceForNight} from './form.js';

const RANGE_MIN = 0;
const RANGE_MAX = 100000;
const RANGE_STEP = 1;

const sliderElement = document.querySelector('.ad-form__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: RANGE_MIN,
    max: RANGE_MAX,
  },
  start: priceForNight.placeholder,
  step: RANGE_STEP,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  priceForNight.value = sliderElement.noUiSlider.get();
});

priceForNight.addEventListener('change', () => sliderElement.noUiSlider.set(priceForNight.value));
housingType.addEventListener('change', () => sliderElement.noUiSlider.set(priceForNight.placeholder));
