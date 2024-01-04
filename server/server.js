const path = require('path');
const express = require('express');
const apiController = require('./controllers/apiControllers.js');

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.post('/wishlist/:appId',
  apiController.getDsId,
  apiController.getDeals,
  (req, res) => res.status(200).json(res.locals.deals)
);

app.post('/wishlist',
  apiController.getWishlist,
  (req, res) => res.status(200).send(res.locals.wishlist)
);

app.get('/stores',
  apiController.getStores,
  (req, res) => res.status(200).json(res.locals.stores)
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Unknown middleware error caught',
    status: 500,
    message: { err: 'An error occurred'}
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
