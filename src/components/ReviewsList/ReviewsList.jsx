import { ReviewsCard } from 'components/ReviewsCard/ReviewsCard';
import React from 'react';
import { ReviewsContainer } from './ReviewsList.styled';
import { Review } from 'components/ReviewsCard/ReviewsCard.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <ReviewsContainer>
      {reviews.length ? (
        reviews.map((review, index) => (
          <ReviewsCard key={index} review={review} />
        ))
      ) : (
        <Review>
          There are no reviews for this camper yet. Try it and write the first
          review!
        </Review>
      )}
    </ReviewsContainer>
  );
};
