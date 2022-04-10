const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const getPreviewPhoto = (fileChooserElement, photoPreviewElement, imageElement = null) => {
  const file = fileChooserElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    if (imageElement) {
      imageElement.style.visibility = 'hidden';
    }

    const reader = new FileReader();

    reader.addEventListener('load', () => {
      photoPreviewElement.style.backgroundImage = `url(${reader.result}`;
      photoPreviewElement.classList.add('preview_style');
    });

    reader.readAsDataURL(file);
  } else {
    fileChooserElement.value = '';
    photoPreviewElement.style.backgroundImage = 'none';
    if (imageElement) {
      imageElement.style.visibility = 'visible';
    }
  }
};

export { getPreviewPhoto };
