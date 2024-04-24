import React from 'react';
import sprite from '../../assets/sprite.svg';
import {
  Attributes,
  CamperRating,
  Info,
  Label,
  Labels,
  MapPinIcon,
  Price,
  StarIcon,
} from './TitleInfo.styled';

export const TitleInfo = ({ camper }) => {
  const { name, price, rating, reviews, location } = camper;

  return (
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

        <Price>{`€${price.toFixed(2)}`}</Price>
      </Attributes>
    </Info>
  );
};
