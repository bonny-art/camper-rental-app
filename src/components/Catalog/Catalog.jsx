import { Button } from 'components/Button/Button';
import { CamperList } from 'components/CamperList/CamperList';
import React from 'react';
import { useSelector } from 'react-redux';
import { campersSelectors } from '../../store/campers/campersSlice';

export const Catalog = () => {
  const campers = useSelector(campersSelectors.selectCampers);

  return (
    <>
      <CamperList campers={campers} />
      <Button>Load more</Button>
    </>
  );
};
