import styled from '@emotion/styled';

export const ReviewsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 430px;
  height: 532px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollbar};
    border-radius: 7px;
  }
`;
