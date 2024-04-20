import { Catalog } from 'components/Catalog/Catalog';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { campersActions } from 'store/campers/campersSlice';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(campersActions.getCampersAction());
  }, [dispatch]);

  return <Catalog />;
};
export default CatalogPage;
