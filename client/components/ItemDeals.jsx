import React from 'react';

const ItemDeals = props => {
  return (
    <div id='dealDiv'>
      <a className='storeName' href={props.dealLink}>{props.storeName}</a>
      <span id='deals'>{props.price}</span>
    </div>
  );
};

export default ItemDeals;