import {
  isEscEvent
} from './util.js';

import {
  destroyImgFilter
} from './effects-photo.js'

const errorSection = document.querySelector('#error').content.querySelector('.error');
const errorButton = document.querySelector('#error').content.querySelector('.error__button');
const errorInner = document.querySelector('#error').content.querySelector('.error__inner');

const onErrorEscPress = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeError();
  }
}

const showAlertError = () => {
  const errorTemplate = document.querySelector('#error').content;
  document.body.appendChild(errorTemplate);
  document.addEventListener('keydown', onErrorEscPress);
};

const closeError = () => {
  errorSection.classList.add('hidden');
  document.removeEventListener('keydown', onErrorEscPress);
  destroyImgFilter();
}

errorButton.addEventListener('click', () => {
  closeError();
});

errorSection.addEventListener('click', (evt) => {
  const isClickInside = errorInner.contains(evt.target);
  if (!isClickInside) {
    closeError();
  }
});

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    closeError();
  }
});

export {
  showAlertError
}
