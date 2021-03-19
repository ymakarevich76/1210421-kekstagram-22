import {
  isAllElementsUniq
} from './util.js';

import {
  isEscEvent
} from './util.js';

const MAX_NAME_LENGHT = 20;
const MIN_NAME_LENGTH = 2;
const MAX_TEXT_LENGTH = 140;


const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const onValidationForm = () => {

  textHashtags.addEventListener('input', () => {
    const arrayHashtags = textHashtags.value.split(' ');

    if (arrayHashtags.length > 5) {
      textHashtags.setCustomValidity('Нельзя указать больше пяти хэш-тегов');
    } else if (!isAllElementsUniq(arrayHashtags)) {
      textHashtags.setCustomValidity('Xэш-теги не должны повторяться');
    } else {
      for (let i = 0; i < arrayHashtags.length; i++) {
        let element = arrayHashtags[i];

        if (element[0] !== '#') {
          textHashtags.setCustomValidity('Первый символ должен быть #');
          break
        }

        if (element.length < 1) {
          textHashtags.setCustomValidity('Строка должна содержать не только #');
          break
        }

        if (element.length < MIN_NAME_LENGTH) {
          textHashtags.setCustomValidity('Длина должна быть больше ' + MIN_NAME_LENGTH + ' симв.');
          break
        }

        if (element.length > MAX_NAME_LENGHT) {
          textHashtags.setCustomValidity('Длина должна быть меньше ' + MAX_NAME_LENGHT + ' симв.');
          break
        }

        if (!element.match(/^#[A-Za-z0-9]{1,19}$/)) {
          textHashtags.setCustomValidity('Cтрока после решётки должна состоять из букв и чисел');
          break
        } else {
          textHashtags.setCustomValidity('');
        }
      }
    }
    textHashtags.reportValidity();
  });

  textHashtags.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.stopPropagation();
    }
  });

  textDescription.addEventListener('input', () => {
    const valueTextLength = textDescription.value.length;
    if (valueTextLength > MAX_TEXT_LENGTH) {
      textDescription.setCustomValidity('Длина должна быть меньше ' + MAX_TEXT_LENGTH + ' симв.');
    } else {
      textDescription.setCustomValidity('');
    }
    textDescription.reportValidity();
  });

  textDescription.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.stopPropagation();
    }
  });
}

export {
  onValidationForm
};
