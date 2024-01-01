import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserId from '../components/UserId.jsx';
import * as actions from '../actions/actions.js';

const MainContainer = props => {
  const dispatch = useDispatch();
  
  const userNum = useSelector(state => state.wishlist.userId);
  
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
    console.log(requestOptions);
    fetch('/wishlist', requestOptions)
      .then(response => response.json())
      .then(wishlist => {
        return dispatch(actions.updateWishlistActionCreator(wishlist))
      });
  }

  return (
    <UserId 
      updateUser = {updateUser}
      updateWishlist = {updateWishlist}
      userNum = {userNum}
    />
  );
};

export default MainContainer;