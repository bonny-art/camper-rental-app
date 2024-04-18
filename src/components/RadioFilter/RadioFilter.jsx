import React, { useEffect, useState } from 'react';

export const RadioFilter = ({ onTypeChange, isCleared, setIsCleared }) => {
  const [selectedValue, setSelectedValue] = useState('');

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
    <form>
      <label>
        Van
        <input
          type="radio"
          value="Van"
          name="typeFilter"
          onChange={handleChange}
          checked={selectedValue === 'Van'}
        />
      </label>
      <label>
        Fully Integrated
        <input
          type="radio"
          value="Fully Integrated"
          name="typeFilter"
          onChange={handleChange}
          checked={selectedValue === 'Fully Integrated'}
        />
      </label>
      <label>
        Alcove
        <input
          type="radio"
          value="Alcove"
          name="typeFilter"
          onChange={handleChange}
          checked={selectedValue === 'Alcove'}
        />
      </label>
    </form>
  );
};
