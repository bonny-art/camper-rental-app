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
      <Info>
        <h2>{name}</h2>

        <Attributes>
          <Labels>
            <Label>
              <StarIcon>
                <use xlinkHref={`${sprite}#star`}></use>
              </StarIcon>
              <CamperRating>{`${rating}(${reviews.length} Review${
                reviews.length === 1 ? 's' : ''
              })`}</CamperRating>
            </Label>

            <Label>
              <MapPinIcon>
                <use xlinkHref={`${sprite}#map-pin`}></use>
              </MapPinIcon>
              <p>{location}</p>
            </Label>
          </Labels>

          <Price>{`€${price}.00`}</Price>
        </Attributes>
      </Info>

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
