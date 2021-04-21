import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import ownerSignupReducer from './ownerSignupReducer';

export default combineReducers({
  searchReducer,
  ownerSignupReducer,
  // TODO: Add more reducers
});
