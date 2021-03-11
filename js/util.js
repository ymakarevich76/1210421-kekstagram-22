const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
}
const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
}

const isAllElementsUniq = (array) => {
  const arrayLowerCase = array.map((element) => {
    return element.toLowerCase();
  })
  const unique = new Set(arrayLowerCase);
  return array.length === Array.from(unique).length;
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);
}

export {
  isEscEvent,
  isEnterEvent,
  isAllElementsUniq,
  showAlert
};
