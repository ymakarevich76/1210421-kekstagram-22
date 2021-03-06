import {
  isAllElementsUniq
} from './util.js';

import {
  isEscEvent
} from './util.js';

const MAX_NUMBER_HASH = 5;
const MAX_NAME_LENGHT = 20;
const MIN_NAME_LENGTH = 2;
const MAX_TEXT_LENGTH = 100;
const COLOR = 'red';

const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const colorField = () => {
  textHashtags.style.borderColor = COLOR;
}

const onValidationForm = () => {
  textHashtags.addEventListener('input', () => {
    const arrayHashtags = textHashtags.value.split(' ');
    if (arrayHashtags.length === 1 && arrayHashtags[0] === '') {
      textHashtags.setCustomValidity('');
      textHashtags.removeAttribute('style');
    } else if (arrayHashtags.length > MAX_NUMBER_HASH) {
      textHashtags.setCustomValidity('Нельзя указать больше пяти хэш-тегов');
      colorField();

    } else if (!isAllElementsUniq(arrayHashtags)) {
      textHashtags.setCustomValidity('Xэш-теги не должны повторяться');
      colorField();
    } else if (arrayHashtags[0] !== '') {
      for (let i = 0; i < arrayHashtags.length; i++) {
        let element = arrayHashtags[i];

        if (element[0] !== '#') {
          textHashtags.setCustomValidity('Первый символ должен быть #');
          colorField();
          break
        }

        if (element.length < 1) {
          textHashtags.setCustomValidity('Строка должна содержать не только #');
          colorField();
          break
        }

        if (element.length < MIN_NAME_LENGTH) {
          textHashtags.setCustomValidity('Длина должна быть больше ' + MIN_NAME_LENGTH + ' симв.');
          colorField();
          break
        }

        if (element.length > MAX_NAME_LENGHT) {
          textHashtags.setCustomValidity('Длина должна быть меньше ' + MAX_NAME_LENGHT + ' симв.');
          colorField();
          break
        }

        if (!element.match(/^#[A-Za-z0-9]{1,19}$/)) {
          textHashtags.setCustomValidity('Cтрока после решётки должна состоять из букв и чисел');
          colorField();
          break
        } else {
          textHashtags.setCustomValidity('');
          textHashtags.removeAttribute('style');
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
      textDescription.style.borderColor = COLOR;
    } else {
      textDescription.setCustomValidity('');
      textDescription.removeAttribute('style');
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
