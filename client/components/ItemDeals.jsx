import React from 'react';

const ItemDeals = props => {
  return (
    <div>
      <label htmlFor='deal'>{props.storeName}</label>
      <span id='deas'>{props.price}</span>
    </div>
  );
};

export default ItemDeals;