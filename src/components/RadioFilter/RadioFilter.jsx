import React, { useEffect, useState } from 'react';
import sprite from '../../assets/sprite.svg';
import {
  CustomInput,
  Form,
  Icon,
  Input,
  Label,
  Wrapper,
} from './RadioFilter.styled';

export const RadioFilter = ({ onTypeChange, isCleared, setIsCleared }) => {
  const [selectedValue, setSelectedValue] = useState('');
  console.log('🚀 ~ selectedValue:', selectedValue);

  useEffect(() => {
    if (isCleared) {
      setSelectedValue('');
      setIsCleared(false);
    }
  }, [isCleared, setIsCleared]);

  const handleChange = event => {
    setSelectedValue(event.target.value);
    onTypeChange(event.target.value);
  };

  return (
    <Form>
      <Wrapper>
        <Input
          id="van"
          type="radio"
          value="Van"
          name="typeFilter"
          onChange={handleChange}
          checked={selectedValue === 'Van'}
        />
        <Label htmlFor="van">
          <CustomInput className="van" isSelected={selectedValue === 'Van'}>
            <Icon>
              <use href={`${sprite}#camper-van`} />
            </Icon>
            <p>Van</p>
          </CustomInput>
        </Label>
      </Wrapper>

      <Wrapper>
        <Input
          id="fully-integrated"
          type="radio"
          value="Fully Integrated"
          name="typeFilter"
          onChange={handleChange}
          checked={selectedValue === 'Fully Integrated'}
        />
        <Label htmlFor="fully-integrated">
          <CustomInput
            className="fully-integrated"
            isSelected={selectedValue === 'Fully Integrated'}
          >
            <Icon>
              <use href={`${sprite}#camper-fully-integrated`} />
            </Icon>
            <p>Fully Integrated</p>
          </CustomInput>
        </Label>
      </Wrapper>

      <Wrapper>
        <Input
          id="alcove"
          type="radio"
          value="Alcove"
          name="typeFilter"
          onChange={handleChange}
          checked={selectedValue === 'Alcove'}
        />
        <Label htmlFor="alcove">
          <CustomInput
            className="alcove"
            isSelected={selectedValue === 'Alcove'}
          >
            <Icon>
              <use href={`${sprite}#camper-alcove`} />
            </Icon>
            <p>Alcove</p>
          </CustomInput>
        </Label>
      </Wrapper>
    </Form>
  );
};
