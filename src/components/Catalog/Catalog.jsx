import { Button } from 'components/Button/Button';
import { CamperList } from 'components/CamperList/CamperList';
import React from 'react';

export const Catalog = () => {
  return (
    <>
      <CamperList />
      <Button>Load more</Button>
    </>
  );
};
