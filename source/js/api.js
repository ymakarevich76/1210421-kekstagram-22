/* eslint-disable indent */
const URL_GET = 'https://22.javascript.pages.academy/kekstagram/data';
const URL_SEND = 'https://22.javascript.pages.academy/kekstagram';

const getData = (onSuccess, onError) => {
  fetch(URL_GET)
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
      URL_SEND, {
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
