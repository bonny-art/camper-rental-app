import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  border-radius: 200px;

  font-weight: 500;
  letter-spacing: -0.01em;

  border: 1px solid ${({ theme }) => theme.colors.grayTransp};

  height: 56px;

  transition: border-color ${({ theme }) => theme.animation.transition};

  &:hover {
    border-color: ${({ theme }) => theme.colors.orangeDark};
  }

  &.clear,
  &.form {
    padding: 16px 60px;
  }

  &.load {
    padding: 16px 32px;
  }

  &.show {
    padding: 16px 40px;
  }

  &.form,
  &.show {
    border: 1px solid transparent;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.orange};

    transition: background-color ${({ theme }) => theme.animation.transition};

    &:hover {
      background-color: ${({ theme }) => theme.colors.orangeDark};
    }
  }
`;
