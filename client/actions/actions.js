import * as types from '../constants/actionTypes.js';

export const updateWishlistActionCreator = data => ({
  type: types.UPDATE_WISHLIST,
  payload: data
});

export const updateUserActionCreator = data => ({
  type: types.UPDATE_USER,
  payload: data
});

export const updateStoresActionCreator = data => ({
  type: types.UPDATE_STORES,
  payload: data
});

export const updateDealsActionCreator = data => ({
  type: types.UPDATE_DEALS,
  payload: data
});