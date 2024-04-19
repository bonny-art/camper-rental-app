import { Button } from 'components/Button/Button';
import { CamperList } from 'components/CamperList/CamperList';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { campersSelectors } from 'store/campers/campersSlice';

export const Favorites = () => {
  const allCampers = useSelector(campersSelectors.selectFavoriteCampers);

  const [visibleCampersNumber, setVisibleCampersNumber] = useState(4);

  const visibleCampers = allCampers.slice(0, visibleCampersNumber);

  const handleLoadMore = () => {
    setVisibleCampersNumber(
      prevVisibleCampersNumber => prevVisibleCampersNumber + 4
    );

    // TODO See in images HW how to make this
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const canLoadMore = visibleCampersNumber < allCampers.length;

  return (
    <>
      <CamperList campers={visibleCampers} />
      {canLoadMore && <Button onClick={handleLoadMore}>Load more</Button>}
    </>
  );
};
