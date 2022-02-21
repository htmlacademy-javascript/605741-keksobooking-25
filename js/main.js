function getRandomIntInclusive(min, max) {
  if (min >= max || min < 0 || max <= 0) {
    return 'Задан неверный диапазон, необходимо выбрать другое значение';
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(5, 25);

function getRandomIntInclusiveWithPoint(min, max, floatingPoint) {
  if (min >= max || min < 0 || max <= 0) {
    return 'Задан неверный диапазон, необходимо выбрать другое значение';
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  const i = Math.random() * (max - min + 1) + min;
  return i.toFixed(floatingPoint);
}
getRandomIntInclusiveWithPoint(6, 36, 4);

// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://rollbar.com/guides/javascript/how-to-throw-exceptions-in-javascript/
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
