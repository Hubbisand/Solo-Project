import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/index.js';
import wishlistReducer from './reducers/wishlistReducer';

const store = configureStore({
  reducer: reducers
});

export default store;