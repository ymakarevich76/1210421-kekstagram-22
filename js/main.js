import {
  getRandomIntegerNumber
} from './random.js';
import {
  photoUsers,
  generatePhotoData
} from './data.js';
import {
  renderPictures
} from './picture.js';
import {
  createModal
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
  onValidationInput
} from './validation-input.js';


getRandomIntegerNumber(1, 10);
generatePhotoData(25, 1, 10);
renderPictures(photoUsers);
createModal();
photoLoad();
const counts = document.querySelectorAll('.img-upload__scale');
counts.forEach(toScaleFunc);
createEffectsPhoto();
onValidationInput();
