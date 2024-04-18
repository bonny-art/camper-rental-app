import { CheckboxFilter } from 'components/CheckboxFilter/CheckboxFilter';
import React from 'react';
import { useDispatch } from 'react-redux';
import { campersActions } from 'store/campers/campersSlice';

export const EquipmentFilter = () => {
  const dispatch = useDispatch();

  const handleEquipmentChange = newEquipment => {
    dispatch(campersActions.setEquipmentFilterAction(newEquipment));
  };

  return (
    <div>
      <h4>Vehicle equipment</h4>
      <CheckboxFilter onChange={handleEquipmentChange} />
    </div>
  );
};
