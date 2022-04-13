// import {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement} from './util.js';

// const ADS_COUNT = 10;
// const DIGITS_COUNT = 5;
// const PRICE_MIN = 0;
// const PRICE_MAX = 0;
// const ROOMS_MIN = 0;
// const ROOMS_MAX = 0;
// const GUESTS_MIN = 0;
// const GUESTS_MAX = 0;
// const LATITUDE_MIN = 35.65000;
// const LATITUDE_MAX = 35.70000;
// const LONGITUDE_MIN = 139.70000;
// const LONGITUDE_MAX = 139.80000;
// const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
// const TIMES = ['12:00', '13:00', '14:00'];
// const OPTIONS = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
// const IMAGES = [
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
// ];

// const usersIds = Array.from({length: ADS_COUNT}, (v, i) => ++i);

// const getUniqueImg = () => {
//   const imgNumber = usersIds.shift();
//   return imgNumber < 10 ? `img/avatars/user0${imgNumber}.png` : `img/avatars/user${imgNumber}.png`;
// };

// const avatars = [];
// for (let i = 0; i < 10; i++) {
//   const j = getUniqueImg();
//   avatars.push(j);
// }

// const getUniqueAvatar = () => avatars.shift();

// const getRandomLatitude = () => {
//   const latitude = getRandomPositiveFloat(LATITUDE_MIN, LATITUDE_MAX, DIGITS_COUNT);
//   return latitude;
// };

// const getRandomLongitude = () => {
//   const longitude = getRandomPositiveFloat(LONGITUDE_MIN, LONGITUDE_MAX, DIGITS_COUNT);
//   return longitude;
// };

// const getFeatures = () => {
//   const features = [];
//   const featuresLength = getRandomPositiveInteger(1, OPTIONS.length);
//   const optionsCopy = OPTIONS.slice(0, OPTIONS.length);

//   for (let i = 1; i <= featuresLength; i++) {
//     const newFeatures = optionsCopy.shift();
//     features.push(newFeatures);
//   }
//   return features;
// };

// const getPhotos = () => {
//   const photos = [];
//   const photosLength = getRandomPositiveInteger(1, IMAGES.length);
//   const imagesCopy = IMAGES.slice(0, IMAGES.length);

//   for (let i = 1; i <= photosLength; i++) {
//     const newPhotos = imagesCopy.shift();
//     photos.push(newPhotos);
//   }
//   return photos;
// };

// const createAds = () => {
//   const locationOfAd = {};
//   locationOfAd.lat = getRandomLatitude();
//   locationOfAd.lng = getRandomLongitude();

//   return {
//     author: {
//       avatar: getUniqueAvatar(),
//     },
//     offer: {
//       title: 'Временный заголовок',
//       address: Object.values(locationOfAd).join(', '),
//       price: getRandomPositiveInteger(PRICE_MIN, PRICE_MAX),
//       type: getRandomArrayElement(TYPES),
//       rooms: getRandomPositiveInteger(ROOMS_MIN, ROOMS_MAX),
//       guests: getRandomPositiveInteger(GUESTS_MIN, GUESTS_MAX),
//       checkin: getRandomArrayElement(TIMES),
//       checkout: getRandomArrayElement(TIMES),
//       features: getFeatures(),
//       description: 'Временное описание',
//       photos: getPhotos(),
//     },
//     location: locationOfAd,
//   };
// };

// const createSimilarAds = () => Array.from({length: ADS_COUNT}, createAds);

// export {createSimilarAds};
