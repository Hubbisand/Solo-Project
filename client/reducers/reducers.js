import { combineReducers } from 'redux';
import wishlistReducer from './wishlistReducer.js';

export default combineReducers({
  wishlist: wishlistReducer,
});