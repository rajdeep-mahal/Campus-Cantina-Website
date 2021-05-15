import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import ownerSignupReducer from './ownerSignupReducer';
import cartItemsReducer from './cartItemsReducer';
<<<<<<< HEAD
import appUserReducer from './appUserReducer';
=======
import userReducer from './userReducer';
>>>>>>> d7e0842addd72d4beec43e2d07b18c4159f94319

export default combineReducers({
  searchReducer,
  ownerSignupReducer,
  cartItemsReducer,
<<<<<<< HEAD
  appUserReducer,
=======
  userReducer,
>>>>>>> d7e0842addd72d4beec43e2d07b18c4159f94319
  // TODO: Add more reducers
});
