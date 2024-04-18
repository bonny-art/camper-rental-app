import { RadioFilter } from 'components/RadioFilter/RadioFilter';
import React from 'react';
import { useDispatch } from 'react-redux';
import { campersActions } from 'store/campers/campersSlice';

export const TypeFilter = () => {
  const dispatch = useDispatch();

  const handleTypeChange = type => {
    dispatch(campersActions.setTypeFilterAction(type));
  };

  return (
    <div>
      <h4>Vehicle type</h4>
      <RadioFilter onChange={handleTypeChange} />
    </div>
  );
};
