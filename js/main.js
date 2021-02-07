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


//Новое задание
/*
Напишите необходимые функции для создания массива из 25 сгенерированных объектов.
Структура каждого объекта должна быть следующей:

id, число — идентификатор описания. Это число от 1 до 25. Идентификаторы не должны повторяться. +

url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться. +

description, строка — описание фотографии. Описание придумайте самостоятельно. +

likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200. +

comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:

{
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артем',
}
У каждого комментария есть идентификатор — id — случайное число. Идентификаторы не должны повторяться.

Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.

Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:

  Всё отлично!
  В целом всё неплохо. Но не всё.
  Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
  Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
  Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
  Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!

Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.
*/

const arr = [];

const descriptions = [
  '1 photo description',
  '2 photo description',
  '3 photo description',
  '4 photo description',
  '5 photo description',
  '6 photo description',
  '7 photo description',
  '8 photo description',
  '9 photo description',
  '10 photo description',
  '11 photo description',
  '12 photo description',
  '13 photo description',
  '14 photo description',
  '15 photo description',
  '16 photo description',
  '17 photo description',
  '18 photo description',
  '19 photo description',
  '20 photo description',
  '21 photo description',
  '22 photo description',
  '23 photo description',
  '24 photo description',
  '25 photo description',
];

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

const comments = [];

for(let i = 0; i < 25; i++) {
  comments[i] = {};
  let g = i;
  g++;
  comments[i].id = g;
  comments[i].avatar = 'img/avatar-' + getRandomIntegerNumber(1,6) + '.svg',
  comments[i].message = messages[getRandomIntegerNumber(0,1)];
  comments[i].name = names[getRandomIntegerNumber(0, 7)];
}

for(let i = 0; i < 25; i++) {
  arr[i] = {};
  let j = i;
  j++;
  arr[i].id = j;
  arr[i].url = 'photos/' + j + '.jpg';
  arr[i].description = descriptions[i];
  arr[i].likes = getRandomIntegerNumber(15,200);

  let commentNumber = getRandomIntegerNumber(1, 5);
  arr[i].comments = [];

  for (let g = 0; g < commentNumber; g++) {
    // Затрудняюсь сделать этот момент, подскажите, пожалуйста, как сделать, чтобы не повторялись комментарии, ведь рандом не дает гарантии, что выпадет тот же комментарий.
    arr[i].comments[g] = comments[getRandomIntegerNumber(0, 24)];
  }
}

// console.log(arr);
