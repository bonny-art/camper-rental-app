import React, { useEffect, useState } from 'react';

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
    <label key={equipment}>
      {equipment}
      <input
        type="checkbox"
        checked={selectedEquipment.includes(equipment)}
        onChange={() => handleCheckboxChange(equipment)}
      />
    </label>
  );

  return (
    <div>
      {['AC', 'Automatic', 'Kitchen', 'TV', 'Shower/WC'].map(createCheckbox)}
    </div>
  );
};
