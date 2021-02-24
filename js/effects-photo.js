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

const createSlider = (params) => {
  noUiSlider.create(sliderElement, {
    range: {
      min: params.min,
      max: params.max,
    },
    start: params.start,
    step: params.step,
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

    switch (params.filter) {
      case 'grayscale':
        effectChrome.value = valueElement.value;
        return imgUploadPreview.style.filter = `grayscale(${valueElement.value})`;
      case 'sepia':
        effectSepia.value = valueElement.value;
        return imgUploadPreview.style.filter = `sepia(${valueElement.value})`;
      case 'invert':
        effectMarvin.value = valueElement.value;
        return imgUploadPreview.style.filter = `invert(${valueElement.value}%)`;
      case 'blur':
        effectPhobos.value = valueElement.value;
        return imgUploadPreview.style.filter = `blur(${valueElement.value}px)`;
      case 'brightness':
        effectHeat.value = valueElement.value;
        return imgUploadPreview.style.filter = `brightness(${valueElement.value})`;
      default:
        return 'Непонятно!';
    }
  });
}

const createEffectsPhoto = () => {

  effectNone.addEventListener('change', (evt) => {
    if(evt.target.checked) {
      sliderElement.noUiSlider.destroy();
      imgUploadPreview.removeAttribute('style');
      valueElement.setAttribute('value', '');
    }
  });

  const checkSlider = () => {
    if (sliderElement.classList.contains('noUi-target')) {
      sliderElement.noUiSlider.destroy();
    }
  }

  effectChrome.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      checkSlider();
      createSlider({
        filter:'grayscale',
        min: 0,
        max: 1,
        start: 1,
        step: 0.1,
      });
    }
  });

  effectSepia.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      checkSlider();
      createSlider({
        filter:'sepia',
        min: 0,
        max: 1,
        start: 1,
        step: 0.1,
      });
    }
  });

  effectMarvin.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      checkSlider();
      createSlider({
        filter:'invert',
        min: 0,
        max: 100,
        start: 100,
        step: 1,
      });
    }
  });

  effectPhobos.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      checkSlider();
      createSlider({
        filter:'blur',
        min: 0,
        max: 3,
        start: 3,
        step: 0.1,
      });
    }
  });

  effectHeat.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      checkSlider();
      createSlider({
        filter:'brightness',
        min: 1,
        max: 3,
        start: 3,
        step: 0.1,
      });
    }
  });
}

export { imgUploadPreview, createEffectsPhoto };
