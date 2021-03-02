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

export {
  isEscEvent,
  isEnterEvent,
  isAllElementsUniq
};
