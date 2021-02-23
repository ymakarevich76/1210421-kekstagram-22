/* global noUiSlider:readonly */
import { imgUploadPreview } from './scale-control.js';

const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectNone = document.querySelector('#effect-none');
const effectChrome = document.querySelector('#effect-chrome');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');

// valueElement.value = 10;

const createSlider = (filter, min, max, start, step) => {
  noUiSlider.create(sliderElement, {
    range: {
      min: min,
      max: max,
    },
    start: start,
    step: step,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  sliderElement.noUiSlider.on('update', (values, handle) => {
    valueElement.value = values[handle];
    valueElement.setAttribute('value', values[handle]);

    if (filter === 'grayscale') {
      imgUploadPreview.style.filter = `grayscale(${valueElement.value})`;
      effectChrome.value = valueElement.value;
    } else if (filter === 'sepia') {
      effectSepia.value = valueElement.value;
      imgUploadPreview.style.filter = `sepia(${valueElement.value})`;
    } else if (filter === 'invert') {
      effectMarvin.value = valueElement.value;
      imgUploadPreview.style.filter = `invert(${valueElement.value}%)`;
    } else if (filter === 'blur') {
      effectPhobos.value = valueElement.value;
      imgUploadPreview.style.filter = `blur(${valueElement.value}px)`;
    } else if (filter === 'brightness') {
      effectHeat.value = valueElement.value;
      imgUploadPreview.style.filter = `brightness(${valueElement.value})`;
    }
  });
}

const createEffectsPhoto = () => {

  effectNone.addEventListener('change', (evt) => {
    if(evt.target.checked) {
      sliderElement.noUiSlider.destroy();
      imgUploadPreview.removeAttribute('style');
    }
  });

  effectChrome.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      if (sliderElement.classList.contains('noUi-target')) {
        sliderElement.noUiSlider.destroy();
      }
      createSlider('grayscale', 0, 1, 1, 0.1);
    }
  });

  effectSepia.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      if (sliderElement.classList.contains('noUi-target')) {
        sliderElement.noUiSlider.destroy();
      }
      createSlider('sepia', 0, 1, 1, 0.1);
    }
  });

  effectMarvin.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      if (sliderElement.classList.contains('noUi-target')) {
        sliderElement.noUiSlider.destroy();
      }
      createSlider('invert', 0, 100, 100, 1);
    }
  });

  effectPhobos.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      if (sliderElement.classList.contains('noUi-target')) {
        sliderElement.noUiSlider.destroy();
      }
      createSlider('blur', 0, 3, 3, 0.1);
    }
  });

  effectHeat.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      if (sliderElement.classList.contains('noUi-target')) {
        sliderElement.noUiSlider.destroy();
      }
      createSlider('brightness', 1, 3, 3, 0.1);
    }
  });
}

export { imgUploadPreview, createEffectsPhoto };
