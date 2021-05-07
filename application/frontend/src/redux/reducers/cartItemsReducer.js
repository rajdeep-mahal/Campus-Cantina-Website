const initState = {
  cartItems: [],
  cartItemsTotalCount: '',
  cartTotal: '',
  cartDeliveryInstructions: '',
};

const cartItemsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CART_ITEMS_SET':
      return {
        ...state,
        cartItems: action.cartItems,
      };
    case 'CART_ITEMS_TOTAL_COUNT_SET':
      return {
        ...state,
        cartItemsTotalCount: action.cartItemsTotalCount,
      };
    case 'CART_TOTAL_SET':
      return {
        ...state,
        cartTotal: action.cartTotal,
      };
    case 'CART_DELIVERY_INSTRUCTIONS_SET':
      return {
        ...state,
        cartDeliveryInstructions: action.cartDeliveryInstructions,
      };
    default:
      return state;
  }
};

export default cartItemsReducer;
