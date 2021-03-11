/* eslint-disable indent */
const getData = (onSuccess, onError) => {
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => {
      onError();
    });
};

const sendData = (onSuccess, showAlertError, body) => {
  fetch(
      'https://22.javascript.pages.academy/kekstagram', {
        method: 'POST',
        body,
      },
    )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        showAlertError();
      }
    })
    .catch(() => {
      showAlertError();
    });
};

export {
  getData,
  sendData
};
