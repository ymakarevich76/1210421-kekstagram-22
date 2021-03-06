import {
  renderPictures
} from './render-pictures.js';
import {
  createCloseModal,
  closeModal
} from './modal.js';
import {
  photoLoadModal
} from './photo-load-modal.js';
import {
  createEffectsPhoto
} from './create-effects-photo.js';
import {
  onValidationForm
} from './on-validation-form.js';
import {
  photoFormSubmit
} from './photo-form-submit.js';
import {
  getData
} from './api.js';
import {
  showAlert
} from './util.js';
import {
  filterRenderPhoto
} from './filter-render-photo.js';
import {
  photoLoad
} from './photo-load.js';

const imgFilters = document.querySelector('.img-filters');
let arrPictures = [];

createCloseModal();
photoLoad();
photoLoadModal();
createEffectsPhoto();
onValidationForm();
filterRenderPhoto();

getData(
  (pictures) => {
    arrPictures = pictures;
    renderPictures(pictures);
    imgFilters.classList.remove('img-filters--inactive');
  },
  () => showAlert('Не удалось загрузить фотографии. Попробуйте еще раз'),
);
const getArrPic = () => {
  return arrPictures
}
photoFormSubmit(closeModal);
export {
  getArrPic
}
