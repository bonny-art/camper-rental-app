import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import { Container, Logo, Section } from './Header.styled';
import sprite from '../../assets/sprite.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Container>
      <Section>
        <Link to={'/'}>
          <Logo>
            <svg>
              <use href={`${sprite}#camper-alcove`} />
            </svg>

            <p>
              Campervan <span>Hub</span>
            </p>
          </Logo>
        </Link>

        <Navigation position="header" />
      </Section>
    </Container>
  );
};
