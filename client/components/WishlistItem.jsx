import React from 'react';
import ItemDeals from './ItemDeals.jsx';

const WishlistItem = props => {
  const grabDeals = () => props.getDeals(props.gameId);

  const dealGen = () => {
    if (props.gameId === props.dealList.steamId) {
      const deals = props.dealList.deals.map((deal, idx) => <ItemDeals
        dealLink = {deal.dealLink}
        storeName = {deal.storeId}
        price = {deal.price}
        key = {idx}
      />);
      return deals;
    } 
  };

  const dealReturn = dealGen();

  return(
    <div id='itemDiv'>
      <p>
        <span id='gameName'>{props.gameName} </span>
        <button onClick={grabDeals}>Get Deals</button>
      </p>
      <div>
        {dealReturn}
      </div>
    </div>
  );
};

export default WishlistItem;