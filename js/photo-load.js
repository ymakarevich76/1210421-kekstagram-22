import { body } from './modal.js';
import { isEscEvent } from './util.js';
import { imgUploadPreview } from './effects-photo.js';

const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('.img-upload__input');
const closePhoto = document.querySelector('.img-upload__cancel');

const onPhotoEscPress = (evt) => {
  if(isEscEvent(evt)) {
    evt.preventDefault();
    uploadOverlay.classList.add('hidden');
    body.classList.add('modal-open');
    uploadInput.value = '';
    imgUploadPreview.removeAttribute('style');
  }
};

const photoLoad = () => {
  uploadInput.addEventListener('change', () => {
    uploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onPhotoEscPress);
  });

  closePhoto.addEventListener('click', () => {
    uploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPhotoEscPress);
    imgUploadPreview.removeAttribute('style');
  })
};

export { photoLoad };
