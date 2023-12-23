import React from 'react';

const UserId = () => {
  return (
    <div>
      <h1>Wishlist Price Comparer</h1>
      <div>
        <label htmlFor='SteamId'>Please input Steam ID:</label>
        <input 
          id='SteamId'
          type='number'
        />
        <button type='submit'>Populate Wishlist</button>
      </div>
    </div>
  );
};

export default UserId;