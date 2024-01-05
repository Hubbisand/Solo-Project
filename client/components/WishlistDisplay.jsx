import React from 'react';
import WishlistItem from './WishlistItem.jsx';

const WishlistDisplay = props => {
  
  const wishlist = props.wishlist.map((el, idx) => <WishlistItem 
    gameName = {el.gameName}
    gameId = {el.gameId}
    getDeals = {props.getDeals}
    index = {idx}
    dealList = {props.dealList}
    key = {idx}
  />);

  return(
    <div>
      {/* <h2>Wishlist</h2> */}
      {wishlist}
    </div>
  );
};

export default WishlistDisplay;