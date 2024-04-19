import React, { useEffect, useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';

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
    <div>
      <HiOutlineLocationMarker />
      <input
        type="text"
        list="suggestions"
        onChange={handleInputChange}
        value={userInput}
        placeholder="Type location to filter..."
      />
      <datalist id="suggestions">
        {suggestions.map((suggestion, index) => (
          <option key={index} value={suggestion} />
        ))}
      </datalist>
    </div>
  );
};
