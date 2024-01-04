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
  console.log('params => ', steamAppId.body);
  const dsId = await fetch('https://www.cheapshark.com/api/1.0/games?steamAppID=' + steamAppId.body)
    .then(data => data.json())
    .then(item => {
      if (item.length !== 0) {
        console.log('DS ID => ', item);
        return item[0].gameID;
      } else {
        console.log('Undefined')
        res.locals.dsId = undefined;
        return next();
      }
    });
  res.locals.dsId = dsId;
  return next();
};
  
apiController.getDeals = async (req, res, next) => {
  if (res.locals.dsId !== undefined) {
    const deals = await (fetch('https://www.cheapshark.com/api/1.0/games?id=' + res.locals.dsId))
      .then(data => data.json())
      .then(dealData => {
        console.log('Deal Data => ', dealData);
        return dealData.deals;
      });
    res.locals.deals = deals;
    return next();
  } else {
    console.log('Undefined Again')
    res.locals.deals = 'no deals';
    return next();
  }
};

module.exports = apiController;