// Загрузка и отрисовка превью фото

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const getPreviewPhoto = (fileChooser, photoPreview) => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const otherPhoto = photoPreview.querySelector('img');
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (photoPreview.contains(otherPhoto)) {
    otherPhoto.style.visibility = 'hidden';
  }

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      photoPreview.style.backgroundImage = `url(${reader.result}`;
      photoPreview.style.backgroundSize = 'cover';
    });

    reader.readAsDataURL(file);
  }
};

export { getPreviewPhoto };

