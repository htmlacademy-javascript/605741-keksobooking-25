import {isEscapeKey} from './util.js';

const SHOW_TIME = 3000;

const successMessageContainer = document.querySelector('#success').content.querySelector('.success');
const successMessage = successMessageContainer.cloneNode(true);
document.body.append(successMessage);
successMessage.style.display = 'none';

const onSuccessMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideSuccessMessage();
  }
};

function showSuccessMessage () {
  successMessage.style.display = 'block';
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
  successMessage.addEventListener('click', () => {
    hideSuccessMessage();
  });

  setTimeout(() => {
    hideSuccessMessage();
  }, SHOW_TIME);
}

function hideSuccessMessage () {
  successMessage.style.display = 'none';
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
}

export {showSuccessMessage};
