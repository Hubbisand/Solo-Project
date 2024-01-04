import React from 'react';

const WishlistItem = props => {
  const grabDeals = () => props.getDeals(props.gameId);

  return(
    <div>
      <p>
        <span id='gameName'>{props.gameName}</span>
        <button onClick={grabDeals}>Get Deals</button>
      </p>
    </div>
  );
};

export default WishlistItem;