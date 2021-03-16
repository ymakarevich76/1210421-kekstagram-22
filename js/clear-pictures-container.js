const listFragment = document.createDocumentFragment();
const picturesContainer = document.querySelector('.pictures');

const clearPicturesContainer = () => {
  listFragment.innerHTML = '';
  const pictures = picturesContainer.querySelectorAll('.picture');
  pictures.forEach((picture) => {
    picture.remove();
  });
}

export {
  clearPicturesContainer
}
