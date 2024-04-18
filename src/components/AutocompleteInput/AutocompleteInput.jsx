import React, { useEffect, useState } from 'react';

export const AutocompleteInput = ({
  suggestions,
  onLocationSelect,
  isCleared,
  setIsCleared,
}) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    if (isCleared) {
      setUserInput('');
      setIsCleared(false);
    }
  }, [isCleared, setIsCleared]);

  const onChange = e => {
    const userInput = e.currentTarget.value;
    setUserInput(userInput);

    const filtered = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(userInput.toLowerCase())
    );

    setFilteredSuggestions(userInput ? filtered : suggestions);
  };

  const handleFocus = () => {
    setFilteredSuggestions(suggestions);
  };

  const handleSuggestionClick = suggestion => {
    setUserInput(suggestion);
    setFilteredSuggestions([]);
    onLocationSelect(suggestion);
  };

  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        onFocus={handleFocus}
        value={userInput}
      />
      <ul>
        {filteredSuggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};
