import {isEscapeKey} from './util.js';

const SHOW_TIME = 3000;

const successMessageContainer = document.querySelector('#success').content.querySelector('.success');
const successMessage = successMessageContainer.cloneNode(true);

const onSuccessMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideSuccessMessage();
  }
};

function showSuccessMessage () {
  document.body.append(successMessage);
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
  successMessage.addEventListener('click', () => {
    hideSuccessMessage();
  });

  setTimeout(() => {
    successMessage.remove();
  }, SHOW_TIME);
}

function hideSuccessMessage () {
  successMessage.style.display = 'none';
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
}

export {showSuccessMessage};
