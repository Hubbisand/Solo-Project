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
    return {
      ...state,
      stores: newStores
    };

  case types.UPDATE_DEALS:
    const newDeals = {
      deals: []
    };
    if(action.payload.info) {
      newDeals.steamId = action.payload.info.steamAppID;
      action.payload.deals.forEach(deal => {
        newDeals.deals.push({
          dealLink: `https://www.cheapshark.com/redirect?dealID=${deal.dealID}`,
          storeId: state.stores[deal.storeID],
          price: deal.price
        });
      });
    } else {
      newDeals.steamId = action.payload.steamId;
      newDeals.deals.push({
        price : 'Not for Sale Yet'
      });
    }
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