import {isEscapeKey} from './util.js';

const ALERT_TIME = 5000;

const alertContainer = document.querySelector('#error').content.querySelector('.error');
const alert = alertContainer.cloneNode(true);
const errorButton = alert.querySelector('.error__button');
document.body.append(alert);
alert.style.display = 'none';

const onAlertEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideAlert();
  }
};

function showAlert () {
  alert.style.display = 'block';
  document.addEventListener('keydown', onAlertEscKeydown);
  alert.addEventListener('click', () => {
    hideAlert();
  });

  setTimeout(() => {
    hideAlert();
  }, ALERT_TIME);
}

function hideAlert () {
  alert.style.display = 'none';
  document.removeEventListener('keydown', onAlertEscKeydown);
}

errorButton.addEventListener('click', () => {
  hideAlert();
});

const showFailMessage = (message) => {
  const failMessageContainer = document.createElement('div');
  failMessageContainer.style.zIndex = '100';
  failMessageContainer.style.position = 'absolute';
  failMessageContainer.style.left = '0';
  failMessageContainer.style.top = '0';
  failMessageContainer.style.right = '0';
  failMessageContainer.style.padding = '10px 3px';
  failMessageContainer.style.fontSize = '30px';
  failMessageContainer.style.textAlign = 'center';
  failMessageContainer.style.backgroundColor = 'red';

  failMessageContainer.textContent = message;

  document.body.append(failMessageContainer);

  setTimeout(() => {
    failMessageContainer.remove();
  }, ALERT_TIME);
};

export {showAlert, showFailMessage};
