import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import ownerSignupReducer from './ownerSignupReducer';
import cartItemsReducer from './cartItemsReducer';

export default combineReducers({
  searchReducer,
  ownerSignupReducer,
  cartItemsReducer,
  // TODO: Add more reducers
});
