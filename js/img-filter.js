/* global _:readonly */
import {
  getRandomIntegerNumber
} from './random.js';
import {
  renderPictures
} from './picture.js';
import {
  arrPictures
} from './main.js';

const RERENDER_DELAY = 500;

const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscusse = document.querySelector('#filter-discussed');

const sortPhotos = (a, b) => {
  return b.likes - a.likes;
}

const testFunc = () => {
  const getUniqArray = Array.from(new Set(arrPictures)).sort(randomSort);
  renderPictures(getUniqArray);
}
const debouncePrint = _.debounce(
  () => testFunc(),
  RERENDER_DELAY, {
    'leading': true,
    'trailing': false,
  },
);

const randomSort = () => {
  return getRandomIntegerNumber(0, 2) - 1
}

const filterRenderPhotoByClick = () => {

  filterDefault.addEventListener('click', () => {
    renderPictures(arrPictures);

    filterDiscusse.classList.remove('img-filters__button--active');
    filterDefault.classList.add('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
  })

  filterDiscusse.addEventListener('click', () => {
    const arrFiltered = arrPictures.slice().sort(sortPhotos);
    renderPictures(arrFiltered);

    filterDiscusse.classList.add('img-filters__button--active');
    filterDefault.classList.remove('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
  })

  filterRandom.addEventListener('click', () => {
    debouncePrint()

    filterDiscusse.classList.remove('img-filters__button--active');
    filterDefault.classList.remove('img-filters__button--active');
    filterRandom.classList.add('img-filters__button--active');
  })
}

export {
  filterRenderPhotoByClick
}
