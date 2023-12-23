import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserId from '../components/UserId.jsx';
import * as actions from '../actions/actions.js';

const MainContainer = props => {
  const dispatch = useDispatch();

  function updateUser(input) {
    return dispatch(actions.updateUserActionCreator(input));
  }
  
  function updateWishlist() {
    return dispatch(actions.updateWishlistActionCreator());
  }

  return (
    <UserId 
      updateUser = {updateUser}
      updateWishlist = {updateWishlist}
    />
  );
};

export default MainContainer;