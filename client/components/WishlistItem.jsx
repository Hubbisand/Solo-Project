import React from 'react';

const WishlistItem = props => {
  return(
    <div>
      <p>
        <label htmlFor='gameName'>{props.index}:</label>
        <span id='gameName'>{props.gameName}</span>
      </p>
    </div>
  )
};

export default WishlistItem;