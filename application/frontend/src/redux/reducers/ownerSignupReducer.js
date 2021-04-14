const initState = {
  description: '',
  type: '',
  price: '',
  title: '',
  image: '',
  loading: false,
  listings: [],
  error: '',
  showListing: false,
  singleListing: [],
};
const ownerSignupReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DESCRIPTION_SET':
      return {
        ...state,
        description: action.description,
      };
    case 'TYPE_SET':
      return {
        ...state,
        type: action.ListingType,
      };
    case 'PRICE_SET':
      return {
        ...state,
        price: action.price,
      };
    case 'TITLE_SET':
      return {
        ...state,
        title: action.title,
      };
    case 'IMAGE_SET':
      return {
        ...state,
        image: action.image,
      };
    default:
      return state;
  }
};

export default ownerSignupReducer;
