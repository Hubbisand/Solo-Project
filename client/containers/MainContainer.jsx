import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserId from '../components/UserId.jsx';
import WishlistDisplay from '../components/WishlistDisplay.jsx';
import * as actions from '../actions/actions.js';

const MainContainer = props => {
  const dispatch = useDispatch();
  
  const userNum = useSelector(state => state.wishlist.userId);
  const wishlistNames = useSelector(state => state.wishlist.gameNames);
  const wishlitIds = useSelector(state => state.wishlist.gameIds);
  
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
    console.log('User ID => ', userNum)
    console.log('Game State => ', wishlistNames);
    fetch('/wishlist', requestOptions)
      .then(response => response.json())
      .then(wishlist => {
        return dispatch(actions.updateWishlistActionCreator(wishlist));
      });
  }

  return (
    <div>
      <UserId 
        updateUser = {updateUser}
        updateWishlist = {updateWishlist}
        userNum = {userNum}
      />
      <WishlistDisplay
        names = {wishlistNames}
        ids = {wishlitIds}
      />
    </div>
  );
};

export default MainContainer;