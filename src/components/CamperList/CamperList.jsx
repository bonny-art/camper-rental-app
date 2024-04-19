import React from 'react';

import { CamperCard } from 'components/CamperCard/CamperCard';

export const CamperList = ({ campers }) => {
  console.log('🚀 ~ campers:', campers);
  return (
    <ul>
      {campers.map(c => (
        <CamperCard key={c._id} camper={c} />
      ))}
    </ul>
  );
};
