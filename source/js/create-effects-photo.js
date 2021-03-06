/* global noUiSlider:readonly */
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const imgUploadPreviewContainer = document.querySelector('.img-upload__preview-container');
const sliderWrapper = document.querySelector('.effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectNone = document.querySelector('#effect-none');
const effectChrome = document.querySelector('#effect-chrome');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');

const createSlider = (params) => {
  imgUploadPreviewContainer.appendChild(sliderWrapper);
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
    valueElement.setAttribute('value', values[handle]);
    switch (params.filter) {
      case 'grayscale':
        return imgUploadPreview.style.filter = `grayscale(${valueElement.value})`;
      case 'sepia':
        return imgUploadPreview.style.filter = `sepia(${valueElement.value})`;
      case 'invert':
        return imgUploadPreview.style.filter = `invert(${valueElement.value}%)`;
      case 'blur':
        return imgUploadPreview.style.filter = `blur(${valueElement.value}px)`;
      case 'brightness':
        return imgUploadPreview.style.filter = `brightness(${valueElement.value})`;
      default:
        return 'Непонятно!';
    }
  });
}

const checkSlider = () => {
  imgUploadPreview.removeAttribute('class');
  if (sliderElement.classList.contains('noUi-target')) {
    sliderElement.noUiSlider.reset();
    sliderElement.noUiSlider.destroy();
  }
}

const destroyImgFilter = () => {
  checkSlider();
  imgUploadPreview.removeAttribute('style');
  sliderElement.classList.remove('noUi-target');
  if (imgUploadPreviewContainer.contains(sliderWrapper)) {
    sliderWrapper.remove();
  }
}

const createEffectsPhoto = () => {
  effectNone.addEventListener('change', () => {
    if (effectNone.checked) {
      checkSlider();
      destroyImgFilter();
    }
  });
  checkSlider();

  effectChrome.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      checkSlider();
      createSlider({
        filter: 'grayscale',
        min: 0,
        max: 1,
        start: 1,
        step: 0.1,
      });

      imgUploadPreview.classList.add('effects__preview--chrome');
    }
  });

  effectSepia.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      checkSlider();
      createSlider({
        filter: 'sepia',
        min: 0,
        max: 1,
        start: 1,
        step: 0.1,
      });
      imgUploadPreview.classList.add('effects__preview--sepia');
    }
  });

  effectMarvin.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      checkSlider();
      createSlider({
        filter: 'invert',
        min: 0,
        max: 100,
        start: 100,
        step: 1,
      });
      imgUploadPreview.classList.add('effects__preview--marvin');
    }
  });

  effectPhobos.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      checkSlider();
      createSlider({
        filter: 'blur',
        min: 0,
        max: 3,
        start: 3,
        step: 0.1,
      });
      imgUploadPreview.classList.add('effects__preview--phobos');
    }
  });

  effectHeat.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      checkSlider();
      createSlider({
        filter: 'brightness',
        min: 1,
        max: 3,
        start: 3,
        step: 0.1,
      });
      imgUploadPreview.classList.add('effects__preview--heat');
    }
  });
}


export {
  imgUploadPreview,
  createEffectsPhoto,
  destroyImgFilter
};
