const STEP = 25;
const MAX_VALUE = 100;
const MIN_VALUE = 25;
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const btnPlus = document.querySelector('.scale__control--bigger');
const btnMinus = document.querySelector('.scale__control--smaller');
const field = document.querySelector('.scale__control--value');
const inputValueHidden = document.querySelector('.scale__control--hidden');
let fieldValue;

const onBtnMinusPress = () => {
  fieldValue = parseFloat(field.value);
  if (fieldValue > MIN_VALUE) {
    fieldValue -= STEP;
    field.setAttribute('value', fieldValue + '%');
    imgUploadPreview.style.transform = `scale(${(fieldValue*2-fieldValue)/100})`;
    inputValueHidden.value = field.value;
  }
}

const onBtnPlusPress = () => {
  fieldValue = parseFloat(field.value);
  if (fieldValue < MAX_VALUE) {
    fieldValue += STEP;
    field.setAttribute('value', fieldValue + '%');
    imgUploadPreview.style.transform = `scale(${(fieldValue*2-fieldValue)/100})`;
    inputValueHidden.value = field.value;
  }
}

const toScalePhoto = () => {
  inputValueHidden.setAttribute('value', MAX_VALUE + '%');
  field.setAttribute('value', MAX_VALUE + '%');

  btnMinus.addEventListener('click', onBtnMinusPress);
  btnPlus.addEventListener('click', onBtnPlusPress);
}

export {
  toScalePhoto,
  onBtnMinusPress,
  onBtnPlusPress
};
