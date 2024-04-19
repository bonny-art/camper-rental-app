import { Favorites } from 'components/Favorites/Favorites';
import React from 'react';
import { useSelector } from 'react-redux';
import { campersSelectors } from 'store/campers/campersSlice';

const FavoritesPage = () => {
  const campers = useSelector(campersSelectors.selectCampers);
  console.log('🚀 ~ campers:', campers);

  return (
    <div>
      <Favorites />
    </div>
  );
};

export default FavoritesPage;
