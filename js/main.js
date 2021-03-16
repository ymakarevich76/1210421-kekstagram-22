import {
  getRandomIntegerNumber
} from './random.js';
import {
  generatePhotoData
} from './data.js';
import {
  // newArrayPhoto,
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
import {
  filterRenderPhotoByClick
} from './img-filter.js'

getRandomIntegerNumber(1, 10);
generatePhotoData(25, 1, 10);
createCloseModal();
photoLoad();
const counts = document.querySelectorAll('.img-upload__scale');
counts.forEach(toScaleFunc);
createEffectsPhoto();
onValidationForm();
filterRenderPhotoByClick();

const imgFilters = document.querySelector('.img-filters');
let arrPictures = [];
getData(
  (pictures) => {
    arrPictures = pictures;
    renderPictures(pictures);
    imgFilters.classList.remove('img-filters--inactive');

  },
  () => showAlert('Не удалось загрузить фотографии. Попробуйте еще раз'),
);
photoFormSubmit(closeModal);
export {
  arrPictures
}
