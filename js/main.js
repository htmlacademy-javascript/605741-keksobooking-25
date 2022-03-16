const ADS_COUNT = 10;
const DIGITS_COUNT = 5;
const PRICE_MIN = 0;
const PRICE_MAX = 0;
const ROOMS_MIN = 0;
const ROOMS_MAX = 0;
const GUESTS_MIN = 0;
const GUESTS_MAX = 0;
const LATITUDE_MIN = 35.65000;
const LATITUDE_MAX = 35.70000;
const LONGITUDE_MIN = 139.70000;
const LONGITUDE_MAX = 139.80000;
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIMES = ['12:00', '13:00', '14:00'];
const OPTIONS = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const IMAGES = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const usersIds = Array.from({length: ADS_COUNT}, (v, i) => ++i);

const getUniqueImg = () => {
  let imgNumber = usersIds.shift();
  imgNumber = imgNumber < 10 ? imgNumber : `0${imgNumber}`;
  return `img/avatars/user${imgNumber}.png`;
};

const avatars = [];
for (let i = 0; i < 10; i++) {
  const j = getUniqueImg();
  avatars.push(j);
}

const getUniqueAvatar = () => avatars.shift();

const getRandomLatitude = () => {
  const latitude = getRandomPositiveFloat(LATITUDE_MIN, LATITUDE_MAX, DIGITS_COUNT);
  return latitude;
};

const getRandomLongitude = () => {
  const longitude = getRandomPositiveFloat(LONGITUDE_MIN, LONGITUDE_MAX, DIGITS_COUNT);
  return longitude;
};

const getFeatures = () => {
  const features = [];
  const featuresLength = getRandomPositiveInteger(1, OPTIONS.length);

  for (let i = 1; i <= featuresLength; i++) {
    const newFeatures = OPTIONS.shift();
    features.push(newFeatures);
  }
  return features;
};

const getPhotos = () => {
  const photos = [];
  const photosLength = getRandomPositiveInteger(1, IMAGES.length);

  for (let i = 1; i <= photosLength; i++) {
    const newPhotos = IMAGES.shift();
    photos.push(newPhotos);
  }
  return photos;
};

const locationOfAd = {};

const getLocation = () => {
  locationOfAd.lat = getRandomLatitude();
  locationOfAd.lng = getRandomLongitude();
  return locationOfAd;
};

const finalLocation = getLocation();

const getAddress = () => {
  const addressOfAd = Object.values(finalLocation).join(', ');
  return addressOfAd;
};

const createAds = () => ({
  author: {
    avatar: getUniqueAvatar(),
  },
  offer: {
    title: 'Временный заголовок',
    address: getAddress(),
    price: getRandomPositiveInteger(PRICE_MIN, PRICE_MAX),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomPositiveInteger(ROOMS_MIN, ROOMS_MAX),
    guests: getRandomPositiveInteger(GUESTS_MIN, GUESTS_MAX),
    checkin: getRandomArrayElement(TIMES),
    checkout: getRandomArrayElement(TIMES),
    features: getFeatures(),
    description: 'Временное описание',
    photos: getPhotos(),
  },
  location: finalLocation,
});

const similarAds = Array.from({length: ADS_COUNT}, createAds);

