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
    <div id='topDiv'>
      <img id='steamLogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Steam_logo.png/240px-Steam_logo.png' />
      <h1>Wishlist Price Comparer</h1>
      <div className='inputField'>
        <label htmlFor='SteamId'>Please input Steam ID Number: </label>
        <input 
          id='SteamId'
          type='number'
          onChange={wishlistCapture}
          value={props.userNum}
        />
        <button className='userButton' onClick={updateWishlistAndStores}>Populate Wishlist</button>
      </div>
    </div>
  );
};

export default UserId;