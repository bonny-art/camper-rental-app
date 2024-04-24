import styled from '@emotion/styled';

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
  }
`;

export const Attributes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Labels = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StarIcon = styled.svg`
  width: 16px;
  height: 16px;

  fill: ${({ theme }) => theme.colors.yellow};
`;

export const CamperRating = styled.p`
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;

export const MapPinIcon = styled.svg`
  width: 16px;
  height: 16px;

  fill: transparent;
  stroke: ${({ theme }) => theme.colors.black};
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`;
