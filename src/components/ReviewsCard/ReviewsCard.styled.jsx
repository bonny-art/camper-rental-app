import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.lightBlue};

  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 1.33333;
  }
`;

export const Review = styled.div`
  color: ${({ theme }) => theme.colors.gray};
`;
