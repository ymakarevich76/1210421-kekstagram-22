//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntegerNumber = (min, max) => {
  if(min >= 0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  else if(min < 0) {
    alert('Введено отрицательное число');
  }
  else {
    alert('Неправильно задан диапазон чисел');
  }
}
getRandomIntegerNumber(1,10);

const getLengthComment = (checkString, maxLength) => {
  return checkString.length <= maxLength;
}
getLengthComment('Юля', 3);

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
    photoData[i].description = `${j} photo description`;
    photoData[i].likes = getRandomIntegerNumber(15,200);
    photoData[i].comments = getComments(generateCommentsData(25), minNumbersComments, maxNumbersComments);
  }
  return photoData;
}

generatePhotoData(25, 1, 6);
