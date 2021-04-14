export const setDescription = (description) => ({
  type: 'DESCRIPTION_SET',
  description,
});

export const setType = (ListingType) => ({
  type: 'TYPE_SET',
  ListingType,
});

export const setPrice = (price) => ({
  type: 'PRICE_SET',
  price,
});

export const setTitle = (title) => ({
  type: 'TITLE_SET',
  title,
});

export const setImage = (image) => ({
  type: 'IMAGE_SET',
  image,
});
