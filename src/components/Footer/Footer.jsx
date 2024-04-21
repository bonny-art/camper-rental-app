import React from 'react';
import {
  Container,
  Copyright,
  CopyrightContainer,
  CopyrightSection,
  Logo,
  NavSection,
} from './Footer.styled';
import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { Navigation } from 'components/Navigation/Navigation';

export const Footer = () => {
  return (
    <Container>
      <NavSection>
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

        <Navigation position="footer" />
      </NavSection>

      <CopyrightContainer>
        <CopyrightSection>
          <Copyright>
            <p>
              Developed by{' '}
              <a
                href="https://www.linkedin.com/in/svitlana-otenko/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Svitlana Otenko
              </a>
              , a student of{' '}
              <a
                href="https://goit.ua/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GoIT School
              </a>
            </p>
          </Copyright>
        </CopyrightSection>
      </CopyrightContainer>
    </Container>
  );
};
