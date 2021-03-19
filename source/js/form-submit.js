import {
  showAlertError
} from './error-message.js';

import {
  showAlertSuccess
} from './success-message.js';

import {
  sendData
} from './api.js';

const pictureForm = document.querySelector('.img-upload__form');
const modalPhoto = document.querySelector('.img-upload__overlay');


const photoFormSubmit = (onSuccess) => {
  pictureForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    modalPhoto.classList.add('hidden');

    sendData(
      () => showAlertSuccess(onSuccess),
      () => showAlertError(),
      new FormData(evt.target),
    );
  });
};

export {
  photoFormSubmit
}
