let inputValueHidden = document.querySelector('.scale__control--hidden');

function toScaleFunc(count) {
  const btnPlus = count.querySelector('.scale__control--bigger');
  const btnMinus = count.querySelector('.scale__control--smaller');
  const field = count.querySelector('.scale__control--value');
  let fieldValue = parseFloat(field.value, 10);

  field.value = 100 + '%';

  btnMinus.addEventListener('click', function () {
    if (fieldValue > 25) {
      fieldValue = fieldValue - 25;
      field.value = fieldValue + '%';
      imgUploadPreview.style.transform = `scale(${(fieldValue*2-fieldValue)/100})`;
      inputValueHidden.value = field.value;
    }
  });

  btnPlus.addEventListener('click', function () {
    if (fieldValue < 100) {
      fieldValue = fieldValue + 25;
      field.value = fieldValue + '%';
      imgUploadPreview.style.transform = `scale(${(fieldValue*2-fieldValue)/100})`;
      inputValueHidden.value = field.value;
    }
  });
}

export {
  toScaleFunc
};
