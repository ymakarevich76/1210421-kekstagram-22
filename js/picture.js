const picturesContainer = document.querySelector('.pictures');
const photoUserTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const listFragment = document.createDocumentFragment();

const renderPictures = (picture) => {
  picture.forEach((photo) => {
    const photoUser = photoUserTemplate.cloneNode(true);
    photoUser.querySelector('.picture__img').src = photo.url;
    photoUser.querySelector('.picture__likes').textContent = photo.likes;
    photoUser.querySelector('.picture__comments').textContent = photo.comments.length;
    listFragment.appendChild(photoUser);
  })
  picturesContainer.appendChild(listFragment);
  }

export { renderPictures };
