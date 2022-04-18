import {adForm} from './form.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarFileChooser = adForm.querySelector('.ad-form__field input[type=file]');
const avatarPreview = adForm.querySelector('.ad-form-header__preview img');
const picturesFileChooser = adForm.querySelector('.ad-form__upload input[type=file]');
// const picturesPreviewContainer = adForm.querySelector('.ad-form__photo-container');
const picturesPreviewContainer = adForm.querySelector('.ad-form__photo');

avatarFileChooser.addEventListener('change', () => {
  const file = avatarFileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    avatarPreview.src = URL.createObjectURL(file);
  }
});

picturesFileChooser.addEventListener('change', () => {
  const file = picturesFileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const picturesPreview = document.createElement('img');
    picturesPreview.src = URL.createObjectURL(file);
    picturesPreview.width = 70;
    picturesPreview.height = 70;
    picturesPreviewContainer.append(picturesPreview);
  }
});
