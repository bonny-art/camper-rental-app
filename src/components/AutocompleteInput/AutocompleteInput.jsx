import React, { useEffect, useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { Container } from './AutocompleteInput.styled';

export const AutocompleteInput = ({
  suggestions,
  onLocationSelect,
  isCleared,
  setIsCleared,
  icon,
}) => {
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    if (isCleared) {
      setUserInput('');
      setIsCleared(false);
    }
  }, [isCleared, setIsCleared]);

  const handleInputChange = e => {
    const input = e.target.value;
    setUserInput(input);
    onLocationSelect(input);
  };

  return (
    <Container>
      <input
        type="text"
        list="suggestions"
        onChange={handleInputChange}
        value={userInput}
        placeholder="City"
      />
      <datalist id="suggestions">
        {suggestions.map((suggestion, index) => (
          <option key={index} value={suggestion} />
        ))}
      </datalist>
      <svg>
        <use href={`${sprite}#map-pin`} />
      </svg>
    </Container>
  );
};
