import React from 'react';

import { CamperCard } from 'components/CamperCard/CamperCard';

export const CamperList = ({ campers }) => {
  return (
    <ul>
      {campers.map(c => (
        <CamperCard key={c._id} camper={c} />
      ))}
    </ul>
  );
};
