import { isEscEvent, isEnterEvent } from './util.js';

const modal = document.querySelector('.big-picture');
const modalClose = document.querySelector('#picture-cancel');
const commentCount = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const comments = document.querySelector('.social__comments');

const onModalEscPress = (evt) => {
  if(isEscEvent(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

const openModal = (photo) => {
  document.addEventListener('keydown', onModalEscPress);
  body.classList.add('modal-open');
  modal.classList.remove('hidden');
  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
  modal.querySelector('.big-picture__img img').src = photo.url;
  modal.querySelector('.likes-count').textContent = photo.likes;
  modal.querySelector('.comments-count').textContent = photo.comments.length;
  modal.querySelector('.social__caption').textContent = photo.description;

  const fragment = document.createDocumentFragment();
  for(let i = 0; i < photo.comments.length; i++) {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');
    commentElement.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
    commentElement.querySelector('.social__picture').src = photo.comments[i].avatar;
    commentElement.querySelector('.social__picture').alt = photo.comments[i].name;
    commentElement.querySelector('.social__text').textContent = photo.comments[i].message;
    fragment.appendChild(commentElement);
  }
  comments.appendChild(fragment);
}

const closeModal = () => {
  modal.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscPress);
  comments.innerHTML = '';
}

const createModal = () => {
  modalClose.addEventListener('keydown', (evt) => {
    if(isEnterEvent(evt)) {
      openModal();
    }
  });

  modalClose.addEventListener('click', () => {
    closeModal();
  })

  modal.addEventListener('keydown', (evt) => {
    if(isEnterEvent(evt)) {
      closeModal();
    }
  });
}

export { openModal, createModal };