import React, { useEffect, useState } from 'react';
import sprite from '../../assets/sprite.svg';
import {
  CustomInput,
  Form,
  Icon,
  Input,
  Label,
  Wrapper,
} from './CheckboxFilter.styled';
import { mapName } from 'helpers/helpers';

export const CheckboxFilter = ({
  onEquipmentChange,
  isCleared,
  setIsCleared,
}) => {
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [prevSelectedEquipment, setPrevSelectedEquipment] = useState([]);

  useEffect(() => {
    const hasSelectedEquipmentChanged =
      selectedEquipment.length !== prevSelectedEquipment.length ||
      !selectedEquipment.every(element =>
        prevSelectedEquipment.includes(element)
      );
    if (hasSelectedEquipmentChanged) {
      onEquipmentChange(selectedEquipment);
      setPrevSelectedEquipment(selectedEquipment);
    }
  }, [selectedEquipment, prevSelectedEquipment, onEquipmentChange]);

  useEffect(() => {
    if (isCleared) {
      setSelectedEquipment([]);
      setPrevSelectedEquipment([]);
      setIsCleared(false);
    }
  }, [isCleared, setIsCleared]);

  const handleCheckboxChange = equipment => {
    setSelectedEquipment(prev => {
      const newSelectedEquipment = prev.includes(equipment)
        ? prev.filter(item => item !== equipment)
        : [...prev, equipment];
      return newSelectedEquipment;
    });
  };

  const createCheckbox = equipment => (
    <Wrapper key={equipment}>
      <Input
        type="checkbox"
        id={equipment}
        checked={selectedEquipment.includes(equipment)}
        onChange={() => handleCheckboxChange(equipment)}
      />
      <Label htmlFor={equipment}>
        <CustomInput
          className={mapName(equipment)}
          isSelected={selectedEquipment.includes(equipment)}
        >
          <Icon>
            <use href={`${sprite}#${mapName(equipment)}`} />
          </Icon>
          <p>{equipment}</p>
        </CustomInput>
      </Label>
    </Wrapper>
  );

  return (
    <Form>
      {['AC', 'Automatic', 'Kitchen', 'TV', 'Shower/WC'].map(createCheckbox)}
    </Form>
  );
};
