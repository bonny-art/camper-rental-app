import React from 'react';

import sprite from '../../assets/sprite.svg';

import {
  Attributes,
  CamperRating,
  ImageSlide,
  Info,
  InfoContainer,
  Label,
  Labels,
  MapPinIcon,
  Price,
  Slide,
  Slides,
  StarIcon,
} from './GeneralInfo.styled';

export const GeneralInfo = ({ camper }) => {
  const { name, price, rating, reviews, location, description, gallery } =
    camper;

  return (
    <InfoContainer>
      <Slides>
        {gallery.map((imageSrc, index) => (
          <Slide key={index}>
            <ImageSlide src={imageSrc} alt={`${name} ${index + 1}`} />
          </Slide>
        ))}
      </Slides>

      <p>{description}</p>
    </InfoContainer>
  );
};
