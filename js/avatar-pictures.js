const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_AVATAR = 'img/muffin-grey.svg';

const avatarFileChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const picturesFileChooser = document.querySelector('.ad-form__upload input[type=file]');
const picturesPreviewContainer = document.querySelector('.ad-form__photo');

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
    picturesPreview.width = 40;
    picturesPreview.height = 44;
    picturesPreviewContainer.append(picturesPreview);
    picturesPreviewContainer.style.textAlign = 'center';
    picturesPreviewContainer.style.paddingTop = '13px';
  }
});

const clearPhotos = () => {
  avatarPreview.src = DEFAULT_AVATAR;

  const picturesPreviews = picturesPreviewContainer.querySelectorAll('img');
  for (const picturePreview of picturesPreviews) {
    picturePreview.remove();
  }
};

export {clearPhotos};
