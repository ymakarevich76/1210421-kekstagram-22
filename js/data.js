import { getRandomIntegerNumber } from './random.js';

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
];
const names = [
  'Александр',
  'Станислав',
  'Ирина',
  'Кирилл',
  'Виктор',
  'Юлия',
  'Светлана',
  'Евгений',
];

const generateCommentsData = (count) => {
  const commentsData = [];
  for(let i = 0; i < count; i++) {
    commentsData[i] = {};
    let g = i;
    g++;
    commentsData[i].id = g;
    commentsData[i].avatar = 'img/avatar-' + getRandomIntegerNumber(1,6) + '.svg',
    commentsData[i].message = messages[getRandomIntegerNumber(0, messages.length - 1)];
    commentsData[i].name = names[getRandomIntegerNumber(0, names.length - 1)];
  }
  return commentsData;
}

const getComments = (commentsArr, minNumbersComments, maxNumbersComments) => {
  const comments = [];
  let commentNumber = getRandomIntegerNumber(minNumbersComments, maxNumbersComments);
  for (let i = 0; i < commentNumber; i++) {
    comments[i] = commentsArr[getRandomIntegerNumber(0, commentsArr.length - 1)];
  }
  return comments;
}

const generatePhotoData = (photoCount, minNumbersComments, maxNumbersComments) => {
  const photoData = [];
  for(let i = 0; i < photoCount; i++) {
    photoData[i] = {};
    let j = i;
    j++;
    photoData[i].id = j;
    photoData[i].url = `photos/${j}.jpg`;
    photoData[i].description = `${j} описание фотографии`;
    photoData[i].likes = getRandomIntegerNumber(15,200);
    photoData[i].comments = getComments(generateCommentsData(25), minNumbersComments, maxNumbersComments);
  }
  return photoData;
}

const photoUsers = generatePhotoData(25, 5, 10);

export { photoUsers, generatePhotoData, generateCommentsData };
