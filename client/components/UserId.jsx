import React from 'react';

const UserId = props => {
  const wishlistCapture = event => {
    return props.updateUser(event.target.value);
  };

  const updateWishlistAndStores = () => {
    props.updateWishlist();
    props.getStores();
  };

  return (
    <div>
      <h1>Wishlist Price Comparer</h1>
      <div>
        <label htmlFor='SteamId'>Please input Steam ID:</label>
        <input 
          id='SteamId'
          type='number'
          onChange={wishlistCapture}
          value={props.userNum}
        />
        <button onClick={updateWishlistAndStores}>Populate Wishlist</button>
      </div>
    </div>
  );
};

export default UserId;