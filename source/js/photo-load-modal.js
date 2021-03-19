import {
  isEscEvent
} from './util.js';
import {
  imgUploadPreview
} from './effects-photo.js';
import {
  destroyImgFilter
} from './effects-photo.js';

const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('.img-upload__input');
const closePhoto = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');

const effectNone = document.querySelector('#effect-none');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const onPhotoEscPress = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    uploadOverlay.classList.add('hidden');
    body.classList.add('modal-open');
    destroyImgFilter();
  }
};

const photoLoadModal = () => {
  uploadInput.addEventListener('change', () => {
    uploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onPhotoEscPress);
    effectNone.checked = true;
    textHashtags.value = '';
    textDescription.value = '';
  });

  const closeButton = () => {
    uploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPhotoEscPress);
    imgUploadPreview.removeAttribute('style');
  }

  closePhoto.addEventListener('click', () => {
    closeButton();
    destroyImgFilter();
  })

  closePhoto.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      closeButton();
      destroyImgFilter();
    }
  });
};

export {
  photoLoadModal
};
