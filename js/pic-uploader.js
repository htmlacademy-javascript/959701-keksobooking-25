const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const inputAvatar = document.querySelector('.ad-form-header__input[type=file]');
const inputHousePhoto = document.querySelector('#images[type=file]');
const previewAvatar = document.querySelector('#userAvatar');
const previewHousePhoto = document.querySelector('.ad-form__photo');

// Загрузка и отрисовка превью изображений

const getPreviewAvatar = (fileChooser, photo) => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    photo.src = URL.createObjectURL(file);
  }
};

const getPreviewHousePhoto = (fileChooser, photoPreview) => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      photoPreview.style.background = `url(${reader.result}`;
      photoPreview.style.backgroundSize = 'cover';
      photoPreview.style.backgroundRepeat = 'no-repeat';
    });

    reader.readAsDataURL(file);
  }
};

inputAvatar.addEventListener('change', () => {
  getPreviewAvatar(inputAvatar, previewAvatar);
});

inputHousePhoto.addEventListener('change', () => {
  getPreviewHousePhoto(inputHousePhoto, previewHousePhoto);
});

export { inputAvatar, inputHousePhoto };
