import {
  isEscEvent,
  isEnterEvent
} from './util.js';

const DEFAULT_COUNT_COMMENTS = 5;
const STEP_COUNT_COMMENTS = 5;
let count = DEFAULT_COUNT_COMMENTS;
let photos = [];

const modal = document.querySelector('.big-picture');
const modalInside = document.querySelector('.big-picture__preview');
const modalClose = document.querySelector('#picture-cancel');
const commentCount = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const commentsBlock = document.querySelector('.social__comments');

const fragment = document.createDocumentFragment();

const clearComments = () => {
  commentsBlock.innerHTML = '';
  count = DEFAULT_COUNT_COMMENTS;
  commentLoader.classList.remove('hidden');
  commentLoader.removeEventListener('click', loadMore);
}

const closeModal = () => {
  modal.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscPress);
  clearComments();
}

const onModalEscPress = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

const checkCommentsLength = (comments) => {
  if (comments.length <= STEP_COUNT_COMMENTS) {
    renderComments(comments.length, comments);
    commentLoader.classList.add('hidden');
  } else if (comments.length > STEP_COUNT_COMMENTS && count < comments.length) {
    renderComments(count, comments);
  } else if (count >= comments.length) {
    renderComments(comments.length, comments);
    commentLoader.classList.add('hidden');
  }
}

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
  count += STEP_COUNT_COMMENTS;
  checkCommentsLength(photos.comments);
}

const openModal = (photoData) => {
  photos = photoData;
  document.addEventListener('keydown', onModalEscPress);
  body.classList.add('modal-open');
  modal.classList.remove('hidden');

  commentCount.classList.add('hidden');
  modal.querySelector('.big-picture__img img').src = photos.url;
  modal.querySelector('.likes-count').textContent = photos.likes;
  modal.querySelector('.comments-count').textContent = photos.comments.length;
  modal.querySelector('.social__caption').textContent = photos.description;

  checkCommentsLength(photos.comments);
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
