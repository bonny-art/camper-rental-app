import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './Navigation.styled';

export const Navigation = ({ position }) => {
  console.log('🚀 ~ position:', position);
  return (
    <Container position={position}>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/catalog'}>Catalog</NavLink>
      <NavLink to={'/favorites'}>Favorites</NavLink>
    </Container>
  );
};
