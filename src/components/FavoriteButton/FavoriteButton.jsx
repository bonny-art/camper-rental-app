import React from 'react';

import { useDispatch } from 'react-redux';
import { campersActions } from 'store/campers/campersSlice';
import sprite from '../../assets/sprite.svg';
import { Icon } from './FavoriteButton.styled';

export const FavoriteButton = ({ camper, isInFavorite }) => {
  const dispatch = useDispatch();

  const icon = isInFavorite ? 'heart-pressed' : 'heart';

  const handleFavoriteClick = () => {
    if (isInFavorite) {
      dispatch(campersActions.removeFromFavoriteItemsAction(camper._id));
    } else {
      dispatch(campersActions.addToFavoriteItemsAction(camper));
    }
  };

  return (
    <div onClick={handleFavoriteClick}>
      <Icon>
        <use href={`${sprite}#${icon}`} />
      </Icon>
    </div>
  );
};
