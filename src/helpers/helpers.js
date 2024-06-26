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

export const scrollDown = () => {
  window.scroll({
    top: window.scrollY + (window.innerHeight - 352.5),
    behavior: 'smooth',
  });
};

export const getType = form => {
  if (form === 'alcove') {
    return 'Alcove';
  } else if (form === 'fullyIntegrated') {
    return 'Fully Integrated';
  } else if (form === 'panelTruck') {
    return 'Van';
  }
};
