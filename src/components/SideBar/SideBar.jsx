import { AutocompleteInput } from 'components/AutocompleteInput/AutocompleteInput';
import { Button } from 'components/Button/Button';
import { CheckboxFilter } from 'components/CheckboxFilter/CheckboxFilter';
import { RadioFilter } from 'components/RadioFilter/RadioFilter';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { campersActions, campersSelectors } from 'store/campers/campersSlice';
import {
  BigFilterBox,
  ButtonsBox,
  Container,
  FilterBox,
  FilterTitle,
  Filters,
  LocationBox,
} from './SideBar.styled';
import { mapName } from 'helpers/helpers';

export const SideBar = () => {
  const dispatch = useDispatch();

  const suggestions = useSelector(campersSelectors.selectUniqueLocations);

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
        type: mapName(type),
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
    <Container>
      <Filters>
        <LocationBox>
          <h3>Location</h3>
          <AutocompleteInput
            suggestions={suggestions}
            onLocationSelect={handleLocationSelect}
            isCleared={isCleared}
            setIsCleared={setIsCleared}
          />
        </LocationBox>

        <BigFilterBox>
          <h3>Filters</h3>

          <FilterBox>
            <FilterTitle>
              <h4>Vehicle equipment</h4>
            </FilterTitle>

            <CheckboxFilter
              onEquipmentChange={handleEquipmentChange}
              isCleared={isCleared}
              setIsCleared={setIsCleared}
            />
          </FilterBox>
        </BigFilterBox>

        <FilterBox>
          <FilterTitle>
            <h4>Vehicle type</h4>
          </FilterTitle>

          <RadioFilter
            onTypeChange={handleTypeChange}
            isCleared={isCleared}
            setIsCleared={setIsCleared}
          />
        </FilterBox>
      </Filters>

      <ButtonsBox>
        <Button className="form" onClick={() => handleButtonClick('search')}>
          Search
        </Button>
        <Button className="clear" onClick={() => handleButtonClick('clear')}>
          Clear
        </Button>
      </ButtonsBox>
    </Container>
  );
};
