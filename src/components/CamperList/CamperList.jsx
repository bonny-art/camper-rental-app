import React from 'react';

import campers from '../../db/campers';
import { CamperCard } from 'components/CamperCard/CamperCard';

export const CamperList = () => {
  return (
    <ul>
      {campers.map(c => (
        <CamperCard key={c._id} camper={c} />
      ))}
    </ul>
  );
};
