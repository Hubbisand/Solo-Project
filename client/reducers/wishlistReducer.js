import * as types from '../constants/actionTypes.js';

const initialWishlist = {
  gameIds: [],
  gameNames: [],
  userId: ''
};

const wishlistReducer = (state = initialWishlist, action) => {
  switch (action.type) {
  case types.UPDATE_USER:
    return {
      ...state,
      userId: action.payload  
    };

  case types.UPDATE_WISHLIST:
    console.log(action.payload);
    const newGameIds = [];
    const newGameNames = [];
    for (const id in action.payload) {
      newGameIds.push(id);
      newGameNames.push(action.payload[id].name);
    }
    console.log(newGameIds);
    console.log(newGameNames);
    return {
      gameIds: newGameIds,
      gameNames: newGameNames,
      userId: ''
    };
    
  default: {
    return state;
  }
  }
};

export default wishlistReducer;