import { generatePhotoData } from './data.js';

const picturesContainer = document.querySelector('.pictures');
const photoUserTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const listFragment = document.createDocumentFragment();

const photoUsers = generatePhotoData(25, 1, 6);

photoUsers.forEach((photo) => {
  const photoUser = photoUserTemplate.cloneNode(true);
  photoUser.querySelector('.picture__img').src = photo.url;
  photoUser.querySelector('.picture__likes').textContent = photo.likes;
  photoUser.querySelector('.picture__comments').textContent = photo.comments.length;
  listFragment.appendChild(photoUser);
})
picturesContainer.appendChild(listFragment);
