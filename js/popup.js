import {createSimilarAds} from './data.js';

const TYPES_RUS = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const similarAdsTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarAdsList = document.querySelector('#map-canvas');

const similarAds = createSimilarAds();

const similarListFragment = document.createDocumentFragment();

similarAds.forEach((ad) => {
  const adsElement = similarAdsTemplate.cloneNode(true);
  adsElement.querySelector('.popup__title').textContent = ad.offer.title;
  adsElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  adsElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
  adsElement.querySelector('.popup__type').textContent = TYPES_RUS[ad.offer.type];
  adsElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  adsElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
  adsElement.querySelector('.popup__description').textContent = ad.offer.description;

  const featuresContainer = similarAdsTemplate.querySelector('.popup__features');
  const featuresListFragment = document.createDocumentFragment();
  const features = ad.offer.features;
  features.forEach((feature) => {
    const featuresListItem = featuresContainer.querySelector(`.popup__feature--${feature}`);
    if (featuresListItem) {
      featuresListFragment.append(featuresListItem);
    }
  });
  featuresContainer.innerHTML = '';
  featuresContainer.append(featuresListFragment);

  const photosContainer = similarAdsTemplate.querySelector('.popup__photos');
  const photosListFragment = document.createDocumentFragment();
  const photos = ad.offer.photos;
  photos.forEach((photo) => {
    const photosListItem = photosContainer.querySelector('.popup__photo');
    photosListItem.src = photo;
    photosListFragment.append(photosListItem);
  });
  photosContainer.innerHTML = '';
  photosContainer.append(photosListFragment);

  // вариант 2
  // for (let i = 0; i < ad.offer.photos.length; i++) {
  //   const photoTemplate = photos.children[0];
  //   photoTemplate.src = ad.offer.photos[i];
  //   photosFragment.append(photoTemplate);
  // }
  // photos.innerHTML = '';
  // photos.append(photosFragment);

  // вариант 3
  // for (let i = 0; i < ad.offer.photos.length; i++) {
  //   const photoTemplate = photosList.querySelector('.popup__photo');
  //   photoTemplate.src = ad.offer.photos[i];
  //   photosFragment.append(photoTemplate);
  // }

  adsElement.querySelector('.popup__description').src = ad.author.avatar;

  similarListFragment.appendChild(adsElement);
});

similarAdsList.appendChild(similarListFragment);

