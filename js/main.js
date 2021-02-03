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
