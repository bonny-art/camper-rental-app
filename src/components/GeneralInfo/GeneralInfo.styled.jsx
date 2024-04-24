import styled from '@emotion/styled';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Slides = styled.div`
  display: flex;
  gap: 16px;
`;

export const Slide = styled.div`
  border-radius: 10px;
  width: 290px;
  height: 310px;

  overflow: hidden;
`;

export const ImageSlide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;
