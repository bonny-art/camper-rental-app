import { Campers } from 'components/Campers/Campers';
import { SideBar } from 'components/SideBar/SideBar';
import React from 'react';
import { Container, Section } from './Catalog.styled';

export const Catalog = () => {
  return (
    <Container>
      <Section>
        <div>
          <SideBar />
        </div>
        <div>
          <Campers />
        </div>
      </Section>
    </Container>
  );
};
