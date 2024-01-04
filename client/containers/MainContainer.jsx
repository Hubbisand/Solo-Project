import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserId from '../components/UserId.jsx';
import WishlistDisplay from '../components/WishlistDisplay.jsx';
import * as actions from '../actions/actions.js';

const MainContainer = props => {
  const dispatch = useDispatch();
  
  const userNum = useSelector(state => state.wishlist.userId);
  const wishlist = useSelector(state => state.wishlist.games);
  
  function updateUser(input) {
    return dispatch(actions.updateUserActionCreator(input));
  }
  const json = JSON.stringify({body: userNum});
  function updateWishlist() {
    const requestOptions = {
      method: 'POST',
      body: json,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch('/wishlist', requestOptions)
      .then(response => response.json())
      .then(wishlist => {
        return dispatch(actions.updateWishlistActionCreator(wishlist));
      });
  }

  function getDeals(gameSteamId) {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({body: gameSteamId}),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch('/wishlist/:appId', requestOptions)
      .then(data => data.json())
      .then(deals => {
        console.log(deals);
      });
  }

  function getStores() {
    fetch('/stores', {
      method: 'GET',
      mode: 'cors'
    })
      .then(data => data.json())
      .then(stores => dispatch(actions.updateStoresActionCreator(stores)));
  }

  return (
    <div>
      <UserId 
        updateUser = {updateUser}
        updateWishlist = {updateWishlist}
        getStores = {getStores}
        userNum = {userNum}
      />
      <WishlistDisplay
        wishlist = {wishlist}
        getDeals = {getDeals}
      />
    </div>
  );
};

export default MainContainer;