import React from 'react';
import WishlistItem from './WishlistItem.jsx';

const WishlistDisplay = props => {
  
  const wishlist = props.names.map((el, idx) => <WishlistItem 
    gameName = {el}
    index = {idx + 1}
    key = {idx}
  />);

  console.log(wishlist)
  return(
    <div>
      <h2>Wishlist</h2>
      {wishlist}
    </div>
  );
};

export default WishlistDisplay;