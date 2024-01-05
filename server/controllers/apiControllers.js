const apiController = {};

apiController.getWishlist = (req, res, next) => {
  const wishlistId = req.body;
  fetch(`https://store.steampowered.com/wishlist/profiles/${wishlistId.body}/wishlistdata/`)
    .then(data => data.json())
    .then(wishlist => {
      res.locals.wishlist = wishlist;
      return next();
    });
};

apiController.getStores = (req, res, next) => {
  fetch('https://www.cheapshark.com/api/1.0/stores')
    .then(data => data.json())
    .then(stores => {
      res.locals.stores = stores;
      return next();
    });
};

apiController.getDsId = async (req, res, next) => {
  const steamAppId = req.body;
  const dsId = await fetch('https://www.cheapshark.com/api/1.0/games?steamAppID=' + steamAppId.body)
    .then(data => data.json())
    .then(item => {
      if (item.length !== 0) {
        return item[0].gameID;
      } else {
        res.locals.steamId = steamAppId.body;
        res.locals.dsId = undefined;
        return next();
      }
    });
  res.locals.dsId = dsId;
  return next();
};
  
apiController.getDeals = async (req, res, next) => {
  const steamId = res.locals.steamId;
  if (res.locals.dsId !== undefined) {
    const deals = await (fetch('https://www.cheapshark.com/api/1.0/games?id=' + res.locals.dsId))
      .then(data => data.json())
      .then(dealData => {
        return dealData;
      });
    res.locals.deals = deals;
    return next();
  } else {
    res.locals.deals = {
      steamId: steamId
    };
    return next();
  }
};

module.exports = apiController;