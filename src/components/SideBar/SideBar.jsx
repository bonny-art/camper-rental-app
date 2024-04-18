import { AutocompleteInput } from 'components/AutocompleteInput/AutocompleteInput';
import { Button } from 'components/Button/Button';
import { CheckboxFilter } from 'components/CheckboxFilter/CheckboxFilter';
import { RadioFilter } from 'components/RadioFilter/RadioFilter';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { campersActions, campersSelectors } from 'store/campers/campersSlice';

export const SideBar = () => {
  const dispatch = useDispatch();

  const suggestions = useSelector(campersSelectors.getUniqueLocations);

  const [location, setLocation] = useState('');
  const [equipment, setEquipment] = useState([]);
  const [type, setType] = useState('');

  const [isCleared, setIsCleared] = useState(false);

  const handleLocationSelect = newLocation => {
    setLocation(newLocation);
  };

  const handleEquipmentChange = newEquipment => {
    setEquipment([...newEquipment]);
  };

  const handleTypeChange = newType => {
    setType(newType);
  };

  const handleButtonClick = actionName => {
    if (actionName === 'search') {
      const payload = {
        location,
        equipment,
        type,
      };

      dispatch(campersActions.setFiltersAction(payload));
    } else if (actionName === 'clear') {
      setLocation('');
      setEquipment([]);
      setType('');
      dispatch(campersActions.clearFiltersAction());
      setIsCleared(true);
    }
  };

  return (
    <div>
      <div>
        <h4>Location</h4>
        <AutocompleteInput
          suggestions={suggestions}
          onLocationSelect={handleLocationSelect}
          isCleared={isCleared}
          setIsCleared={setIsCleared}
        />
      </div>
      <h3>Filters</h3>
      <div>
        <h4>Vehicle equipment</h4>
        <CheckboxFilter
          onEquipmentChange={handleEquipmentChange}
          isCleared={isCleared}
          setIsCleared={setIsCleared}
        />
      </div>
      <div>
        <h4>Vehicle type</h4>
        <RadioFilter
          onTypeChange={handleTypeChange}
          isCleared={isCleared}
          setIsCleared={setIsCleared}
        />
      </div>
      <Button onClick={() => handleButtonClick('search')}>Search</Button>
      <Button onClick={() => handleButtonClick('clear')}>Clear</Button>
    </div>
  );
};
