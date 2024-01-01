import * as types from '../constants/actionTypes.js';

const initialWishlist = {
  gameIds: [],
  gameNames: [],
  userId: 0
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
    return {
      gameIds: newGameIds,
      gameNames: newGameNames,
      userId: 0
    };
    

  default: {
    return state;
  }
  }
};

export default wishlistReducer;