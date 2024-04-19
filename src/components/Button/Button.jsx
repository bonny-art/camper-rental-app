import React from 'react';
import { ButtonStyled } from './Button.styled';

export const Button = ({ children, onClick, type = 'button', className }) => {
  return (
    <ButtonStyled type={type} className={className} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
