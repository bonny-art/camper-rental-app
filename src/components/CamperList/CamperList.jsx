import React from 'react';

import { CamperCard } from 'components/CamperCard/CamperCard';
import { Container } from './CamperList.styled';

export const CamperList = ({ campers }) => {
  return (
    <Container>
      {campers.map(c => (
        <CamperCard key={c._id} camper={c} />
      ))}
    </Container>
  );
};
