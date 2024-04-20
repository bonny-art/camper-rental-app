import { ReviewsCard } from 'components/ReviewsCard/ReviewsCard';
import React from 'react';
import { ReviewsContainer } from './ReviewsList.styled';
import { Message } from 'components/Message/Message';

export const ReviewsList = ({ reviews }) => {
  return (
    <ReviewsContainer>
      {reviews.length ? (
        reviews.map((review, index) => (
          <ReviewsCard key={index} review={review} />
        ))
      ) : (
        <Message>
          There are no reviews for this camper yet.
          <br />
          Try it and write the first review!
        </Message>
      )}
    </ReviewsContainer>
  );
};
