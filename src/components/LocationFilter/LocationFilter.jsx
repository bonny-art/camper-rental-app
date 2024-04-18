import { AutocompleteInput } from 'components/AutocompleteInput/AutocompleteInput';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { campersActions, campersSelectors } from 'store/campers/campersSlice';

export const LocationFilter = () => {
  const dispatch = useDispatch();

  const handleLocationSelect = location => {
    dispatch(campersActions.setLocationFilterAction(location));
  };

  const suggestions = useSelector(campersSelectors.getUniqueLocations);

  return (
    <div>
      <h4>Location</h4>
      <AutocompleteInput
        suggestions={suggestions}
        onLocationSelect={handleLocationSelect}
      />
    </div>
  );
};
