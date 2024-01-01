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

module.exports = apiController;