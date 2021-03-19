/* global _:readonly */
import {
  getRandomIntegerNumber
} from './random.js';
import {
  renderPictures
} from './render-pictures.js';
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

const randomSort = () => {
  return getRandomIntegerNumber(0, 2) - 1
}

const sortArrayRandom = () => {
  const getUniqArray = Array.from(new Set(arrPictures)).sort(randomSort);
  renderPictures(getUniqArray);
}

const filterDefaultOnClick = () => {
  renderPictures(arrPictures);
}

const filterDiscusseOnClick = () => {
  const arrFiltered = arrPictures.slice().sort(sortPhotos);
  renderPictures(arrFiltered);
}

const filterRandomOnClick = () => {
  sortArrayRandom();
}

const debounceFilterDefaultOnClick = _.debounce(filterDefaultOnClick, RERENDER_DELAY);
const debounceFilterDiscusseOnClick = _.debounce(filterDiscusseOnClick, RERENDER_DELAY);
const debounceFilterRandomOnClick = _.debounce(filterRandomOnClick, RERENDER_DELAY);

const filterRenderPhoto = () => {
  filterDefault.addEventListener('click', () => {
    debounceFilterDefaultOnClick();

    filterDiscusse.classList.remove('img-filters__button--active');
    filterDefault.classList.add('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
  })

  filterDiscusse.addEventListener('click', () => {
    debounceFilterDiscusseOnClick();

    filterDiscusse.classList.add('img-filters__button--active');
    filterDefault.classList.remove('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
  })

  filterRandom.addEventListener('click', () => {
    debounceFilterRandomOnClick();

    filterDiscusse.classList.remove('img-filters__button--active');
    filterDefault.classList.remove('img-filters__button--active');
    filterRandom.classList.add('img-filters__button--active');
  })
}

export {
  filterRenderPhoto
}
