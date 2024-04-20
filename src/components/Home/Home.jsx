import React from 'react';
import {
  AboutSection,
  AboutTextBox,
  BenefitsSection,
  Container,
  HeroSection,
  Icon,
  Img,
  ImgCover,
  TextBox,
} from './Home.styled';
import { Button } from 'components/Button/Button';
import { Link } from 'react-router-dom';
import car from '../../assets/car.webp';
import sprite from '../../assets/sprite.svg';

export const Home = () => {
  return (
    <Container>
      <HeroSection>
        <TextBox>
          <h2>Campervan Hab</h2>
          <h1>
            Your Gateway to <span>Freedom!</span>
          </h1>
          <p>
            Explore freely with our trusted campervans. Make memories, find joy,
            and travel with confidence. Where adventures begin.
          </p>
        </TextBox>

        <div>
          <Link to={'/catalog'}>
            <Button className="form">Catalog</Button>
          </Link>
        </div>

        <Img src={car} alt="Camper" />

        <ImgCover></ImgCover>
      </HeroSection>

      <BenefitsSection>
        <ul>
          <li>
            <svg>
              <use href={`${sprite}#flexibility`} />
            </svg>
            <h2>Flexibility</h2>
            <p>Explore freely with Campervan Hab's versatile rentals.</p>
          </li>

          <li>
            <svg>
              <use href={`${sprite}#adventure`} />
            </svg>
            <h2>Comfort</h2>
            <p>Cozy interiors ensure a restful journey every time.</p>
          </li>

          <li>
            <svg>
              <use href={`${sprite}#comfort`} />
            </svg>
            <h2>Adventure</h2>
            <p>Embrace boundless exploration with Campervan Hab's offerings.</p>
          </li>
        </ul>
      </BenefitsSection>

      <AboutSection>
        <Icon>
          <use href={`${sprite}#camper-alcove`} />
        </Icon>

        <AboutTextBox>
          <h2>Adventure Awaits</h2>
          <p>
            Gateway to adventure: flexible rentals, cozy comforts. Explore
            freely, create memories, embrace the thrill. Unforgettable journeys,
            quality service. Join us, embark on your next adventure.
          </p>
          <Link to={'/catalog'}>
            <Button className="form">Order</Button>
          </Link>
        </AboutTextBox>
      </AboutSection>
    </Container>
  );
};
