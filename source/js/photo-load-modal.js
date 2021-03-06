import {
  isEscEvent
} from './util.js';
import {
  imgUploadPreview,
  destroyImgFilter
} from './create-effects-photo.js';
import {
  toScalePhoto,
  onBtnMinusPress,
  onBtnPlusPress
} from './to-scale-photo.js';

const imgUploadPreviewContainer = document.querySelector('.img-upload__preview-container');
const sliderWrapper = document.querySelector('.effect-level');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('.img-upload__input');
const closePhoto = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');

const effectNone = document.querySelector('#effect-none');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const btnPlus = document.querySelector('.scale__control--bigger');
const btnMinus = document.querySelector('.scale__control--smaller');

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

    btnMinus.removeEventListener('click', onBtnMinusPress);
    btnPlus.removeEventListener('click', onBtnPlusPress);
    toScalePhoto();

    document.addEventListener('keydown', onPhotoEscPress);
    if (imgUploadPreviewContainer.contains(sliderWrapper)) {
      destroyImgFilter();
    }
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
