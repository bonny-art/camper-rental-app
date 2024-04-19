import { Rating } from 'components/Rating/Rating';
import React from 'react';
import { Avatar, Card, Review, Title, TitleBlock } from './ReviewsCard.styled';

export const ReviewsCard = ({ review }) => {
  const { reviewer_name, reviewer_rating, comment } = review;
  return (
    <Card>
      <TitleBlock>
        <Avatar>
          <p>{reviewer_name.trim()[0].toUpperCase()}</p>
        </Avatar>

        <Title>
          <h3>{reviewer_name}</h3>
          <Rating reviewer_rating={reviewer_rating} />
        </Title>
      </TitleBlock>

      <Review>
        <p>{comment}</p>
      </Review>
    </Card>
  );
};
