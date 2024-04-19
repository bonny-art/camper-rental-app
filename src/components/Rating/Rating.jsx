import React from 'react';
import sprite from '../../assets/sprite.svg';
import { Block, StarIcon } from './Rating.styled';

export const Rating = ({ reviewer_rating }) => {
  return (
    <Block>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <StarIcon
            key={ratingValue}
            className={
              ratingValue <= reviewer_rating ? 'star-filled' : 'star-empty'
            }
          >
            <use xlinkHref={`${sprite}#star`}></use>
          </StarIcon>
        );
      })}
    </Block>
  );
};
