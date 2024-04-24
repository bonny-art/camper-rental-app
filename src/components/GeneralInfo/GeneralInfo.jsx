import React from 'react';

import { ImageSlide, InfoContainer, Slide, Slides } from './GeneralInfo.styled';

export const GeneralInfo = ({ camper }) => {
  const { name, description, gallery } = camper;

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
