const SET_TIMEOUT_MIN_DELAY_MS = 4;

const debounce = (callback, delayMs = SET_TIMEOUT_MIN_DELAY_MS) => {
  if (!callback) {
    throw new TypeError('callback 인자가 전달되지 않았습니다.');
  }

  if (typeof callback !== 'function') {
    throw new TypeError('callback 인자는 함수여야 합니다.');
  }

  let timerId = null;

  return (paramsObject = {}) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => callback(paramsObject), delayMs);
  };
};

export default debounce;
