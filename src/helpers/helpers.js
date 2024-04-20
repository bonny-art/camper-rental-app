export const mapName = value => {
  const nameMapping = {
    AC: 'ac',
    Automatic: 'transmission',
    Kitchen: 'kitchen',
    TV: 'tv',
    'Shower/WC': 'shower',
    Van: 'panelTruck',
    Alcove: 'alcove',
    'Fully Integrated': 'fullyIntegrated',
  };

  return nameMapping[value] || value;
};

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
