import React from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { campersActions } from 'store/campers/campersSlice';

export const FavoriteButton = ({ camper, isInFavorite }) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (isInFavorite) {
      dispatch(campersActions.removeFromFavoriteItemsAction(camper._id));
    } else {
      dispatch(campersActions.addToFavoriteItemsAction(camper));
    }
  };

  return (
    <button onClick={handleFavoriteClick}>
      {isInFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};
