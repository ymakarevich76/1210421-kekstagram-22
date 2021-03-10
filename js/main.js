import {
  getRandomIntegerNumber
} from './random.js';
import {
  generatePhotoData
} from './data.js';
import {
  renderPictures
} from './picture.js';
import {
  createCloseModal,
  closeModal
} from './modal.js';
import {
  photoLoad
} from './photo-load.js';
import {
  toScaleFunc
} from './scale-control.js';
import {
  createEffectsPhoto
} from './effects-photo.js';
import {
  onValidationForm
} from './validation-form.js';
import {
  photoFormSubmit
} from './form-submit.js';
import {
  getData
} from './api.js';
import {
  showAlert
} from './util.js';

getRandomIntegerNumber(1, 10);
generatePhotoData(25, 1, 10);
createCloseModal();
photoLoad();
const counts = document.querySelectorAll('.img-upload__scale');
counts.forEach(toScaleFunc);
createEffectsPhoto();
onValidationForm();

const COUNT_PICTURES = 25;
getData(
  (pictures) => {
    renderPictures(pictures.slice(0, COUNT_PICTURES));
  },
  () => showAlert('Не удалось загрузить фотографии. Попробуйте еще раз'),
);

photoFormSubmit(closeModal);
