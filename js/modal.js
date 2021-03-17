import {
  isEscEvent,
  isEnterEvent
} from './util.js';

let count = 5;

const modal = document.querySelector('.big-picture');
const modalInside = document.querySelector('.big-picture__preview');
const modalClose = document.querySelector('#picture-cancel');
const commentCount = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const commentsBlock = document.querySelector('.social__comments');

const closeModal = () => {
  modal.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscPress);
  commentsBlock.innerHTML = '';
  const COUNT = 5;
  commentLoader.classList.remove('hidden');
  commentLoader.removeEventListener('click', loadMore);
}

const onModalEscPress = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

const checkCommentsLength = (comments) => {
  if (comments.length <= 5) {
    renderComments(comments.length, comments);
    commentLoader.classList.add('hidden');
  } else if (comments.length > 5 && count < comments.length) {
    renderComments(count, comments);
  } else if (count >= comments.length) {
    renderComments(comments.length, comments);
    commentLoader.classList.add('hidden');
  }
}
let photo = [];

const fragment = document.createDocumentFragment();

const renderComments = (commentsLength, comments) => {
  for (let i = 0; i < commentsLength; i++) {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');
    commentElement.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
    commentElement.querySelector('.social__picture').src = comments[i].avatar;
    commentElement.querySelector('.social__picture').alt = comments[i].name;
    commentElement.querySelector('.social__text').textContent = comments[i].message;
    fragment.appendChild(commentElement);
  }
  commentsBlock.innerHTML = '';
  commentsBlock.appendChild(fragment);
}
const loadMore = () => {
  count += 5;
  checkCommentsLength(photo.comments);
}

const openModal = (photoData) => {
  photo = photoData;
  document.addEventListener('keydown', onModalEscPress);
  body.classList.add('modal-open');
  modal.classList.remove('hidden');

  commentCount.classList.add('hidden');
  modal.querySelector('.big-picture__img img').src = photo.url;
  modal.querySelector('.likes-count').textContent = photo.likes;
  modal.querySelector('.comments-count').textContent = photo.comments.length;
  modal.querySelector('.social__caption').textContent = photo.description;

  checkCommentsLength(photo.comments);
  commentLoader.addEventListener('click', loadMore);
}

const createCloseModal = () => {
  modalClose.addEventListener('keydown', (evt) => {
    if (isEnterEvent(evt)) {
      openModal();
    }
  });

  modalClose.addEventListener('click', () => {
    closeModal();
  });

  modal.addEventListener('click', (evt) => {
    const isClickInside = modalInside.contains(evt.target);
    if (!isClickInside) {
      closeModal();
    }
  });

  modal.addEventListener('keydown', (evt) => {
    if (isEnterEvent(evt)) {
      closeModal();
    }
  });
}

export {
  openModal,
  createCloseModal,
  closeModal,
  onModalEscPress
};
