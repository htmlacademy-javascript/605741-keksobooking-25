import {isEscapeKey} from './util.js';

const ALERT_TIME = 5000;

const alertContainer = document.querySelector('#error').content.querySelector('.error');
const alert = alertContainer.cloneNode(true);
const errorButton = alert.querySelector('.error__button');

const hideAlert = () => {
  alert.style.display = 'none';
};

const onAlertEscKeydown = (evt) => {
  if (isEscapeKey) {
    evt.preventDefault();
    hideAlert();
  }
};

const showAlert = () => {
  document.body.append(alert);

  document.addEventListener('keydown', onAlertEscKeydown);

  setTimeout(() => {
    alert.remove();
  }, ALERT_TIME);
};

errorButton.addEventListener('click', () => {
  hideAlert();
});

export {showAlert};
