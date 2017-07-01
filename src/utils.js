/* eslint-disable import/prefer-default-export */

export const getImageUrl = (image, size = 512) => {
  if (image) {
    return `https://images.jqestate.ru/${image.id}-jqestate-${size}`;
  }
};
