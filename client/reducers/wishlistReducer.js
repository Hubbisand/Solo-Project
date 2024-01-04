import * as types from '../constants/actionTypes.js';

const initialWishlist = {
  games: [],
  stores: {},
  deals: {},
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
    const newGames = [];
    for (const id in action.payload) {
      newGames.push({
        gameId : id,
        gameName: action.payload[id].name
      });
    }
    return {
      ...state,
      games: newGames,
      userId: ''
    };

  case types.UPDATE_STORES:
    const newStores = {};
    action.payload.forEach(element => {
      newStores[element.storeID] = element.storeName;
    });
    console.log(newStores);
    return {
      ...state,
      stores: newStores
    };

  case types.UPDATE_DEALS:
    const newDeals = {
      steamId: action.payload.info.steamAppID,
      deals: []
    };
    if (Array.isArray(action.payload.deals)) {
      action.payload.deals.forEach(deal => {
        newDeals.deals.push({
          storeId: state.stores[deal.storeID],
          price: deal.price
        });
      });
    } else {
      newDeals.push({
        storeId: 'Not for Sale',
        price: 'Not for Sale'
      });
    }
    console.log('Deals => ', newDeals);
    return {
      ...state,
      deals: newDeals
    };

  default: {
    return state;
  }
  }
};

export default wishlistReducer;