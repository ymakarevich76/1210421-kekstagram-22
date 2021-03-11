import {
  isEscEvent
} from './util.js';

import {
  destroyImgFilter
} from './effects-photo.js'

const successSection = document.querySelector('#success').content.querySelector('.success');
const successButton = document.querySelector('#success').content.querySelector('.success__button');
const successInner = document.querySelector('#success').content.querySelector('.success__inner');

const onSuccessEscPress = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeSuccess();
  }
}

const showAlertSuccess = () => {
  const successTemplate = document.querySelector('#success').content;
  document.body.appendChild(successTemplate);
  document.addEventListener('keydown', onSuccessEscPress);

};

const closeSuccess = () => {
  successSection.classList.add('hidden');
  document.removeEventListener('keydown', onSuccessEscPress);
  destroyImgFilter();
}

successButton.addEventListener('click', () => {
  closeSuccess()
});

successSection.addEventListener('click', (evt) => {
  const isClickInside = successInner.contains(evt.target);
  if (!isClickInside) {
    closeSuccess()
  }
});

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    closeSuccess()
  }
});

export {
  showAlertSuccess
}
