import {
  openModal
} from './modal.js';

const picturesContainer = document.querySelector('.pictures');
const photoUserTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const listFragment = document.createDocumentFragment();

const onButtonClick = (photo) => {
  return () => {
    openModal(photo);
  }
}

const clearPicturesContainer = () => {
  listFragment.innerHTML = '';
  const pictures = picturesContainer.querySelectorAll('.picture');
  pictures.forEach((picture) => {
    picture.remove();
  });
}

const renderPictures = (picture) => {
  picture.forEach((photo) => {
    const photoUser = photoUserTemplate.cloneNode(true);
    photoUser.querySelector('.picture__img').src = photo.url;
    photoUser.querySelector('.picture__likes').textContent = photo.likes;
    photoUser.querySelector('.picture__comments').textContent = photo.comments.length;
    listFragment.appendChild(photoUser);
    photoUser.addEventListener('click', onButtonClick(photo));
  })
  clearPicturesContainer();
  picturesContainer.appendChild(listFragment);
}

export {
  renderPictures
};
