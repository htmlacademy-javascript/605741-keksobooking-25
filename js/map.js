import {deactivatePage, activatePage} from './form.js';
import {getPopup} from './popup.js';

const COORDINATE_DIGITS = 5;

const centralCoordinates = {
  lat: 35.68617,
  lng: 139.75231,
};
const inputAddress = document.querySelector('#address');

deactivatePage();

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage();
  })
  .setView(centralCoordinates, 14);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  centralCoordinates,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const getInitialInputAdressValue = () => {
  inputAddress.value = `${centralCoordinates.lat}, ${centralCoordinates.lng}`;
};

getInitialInputAdressValue();

mainPinMarker.on('moveend', (evt) => {
  const currentAddress = evt.target.getLatLng();
  inputAddress.value = `${currentAddress.lat.toFixed(COORDINATE_DIGITS)}, ${currentAddress.lng.toFixed(COORDINATE_DIGITS)}`;
});

const icon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const getResetMap = () => {
  mainPinMarker.setLatLng(centralCoordinates);
  map.setView(centralCoordinates, 14);
  getInitialInputAdressValue();
};

// eslint-disable-next-line no-unused-vars
const markerGroup = L.layerGroup().addTo(map);

const createMarker = (point) => {
  const  {lat, lng} = point.location;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(getPopup(point));
};

const createData = (element) => {
  element.forEach((item) => {
    createMarker(item);
  });
};

export {getResetMap, createData};
