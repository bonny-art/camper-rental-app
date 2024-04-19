import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  border-radius: 200px;
  padding: 16px 60px;

  font-weight: 500;
  letter-spacing: -0.01em;

  border: 1px solid ${({ theme }) => theme.colors.grayTransparent};
  border-radius: 200px;
  padding: 16px 32px;
  width: 145px;
  height: 56px;

  transition: border-color ${({ theme }) => theme.animation.transition};

  &:hover {
    border-color: ${({ theme }) => theme.colors.orangeDark};
  }

  &.accent {
    border: 1px solid transparent;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.orange};

    transition: background-color ${({ theme }) => theme.animation.transition};

    &:hover {
      background-color: ${({ theme }) => theme.colors.orangeDark};
    }
  }
`;
