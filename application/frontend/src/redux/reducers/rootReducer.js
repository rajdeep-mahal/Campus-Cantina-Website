import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import ownerSignupReducer from './ownerSignupReducer';
import cartItemsReducer from './cartItemsReducer';
import appUserReducer from './appUserReducer';

export default combineReducers({
  searchReducer,
  ownerSignupReducer,
  cartItemsReducer,
  appUserReducer,
  // TODO: Add more reducers
});
