import styled from '@emotion/styled';

export const Block = styled.div`
  display: flex;
  gap: 4px;
  height: 16px;
`;

export const StarIcon = styled.svg`
  width: 16px;
  height: 16px;

  &.star-filled {
    fill: ${({ theme }) => theme.colors.yellow};
  }

  &.star-empty {
    fill: ${({ theme }) => theme.colors.lightBlue};
  }
`;
