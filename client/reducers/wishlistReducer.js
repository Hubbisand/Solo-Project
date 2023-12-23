import * as types from '..constants/actionTypes.js';

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
    const url = `https://store.steampowered.com/wishlist/profiles/${state.userId}/wishlistdata/`;
    fetch(url)
      .then(data => data.json())
      .then(wishlist => {
        const newGameIds = [];
        const newGameNames = [];
        for (const id in wishlist) {
          newGameIds.push(id);
          newGameNames.push(wishlist[id].name);
        }
        return {
          gameIds: newGameIds,
          gameNames: newGameNames,
          userId: 0
        };
      });
  }
};

export default wishlistReducer;