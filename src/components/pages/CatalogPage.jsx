import { Catalog } from 'components/Catalog/Catalog';
import { SideBar } from 'components/SideBar/SideBar';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { campersActions } from 'store/campers/campersSlice';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(campersActions.getCampersAction());
  }, [dispatch]);

  return (
    <>
      <SideBar />
      <Catalog />
    </>
  );
};
export default CatalogPage;
