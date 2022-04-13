import {isEscapeKey} from './util.js';

const SHOW_TIME = 3000;

const successMessageContainer = document.querySelector('#success').content.querySelector('.success');
const successMessage = successMessageContainer.cloneNode(true);

const hideSuccessMessage = () => {
  successMessage.style.display = 'none';
};

const onSuccessMessageEscKeydown = (evt) => {
  if (isEscapeKey) {
    evt.preventDefault();
    hideSuccessMessage();
  }
};

const showSuccessMessage = () => {
  document.body.append(successMessage);

  document.addEventListener('keydown', onSuccessMessageEscKeydown);

  setTimeout(() => {
    successMessage.remove();
  }, SHOW_TIME);
};

export {showSuccessMessage};
