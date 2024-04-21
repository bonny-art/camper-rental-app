import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;

  &:focus-visible {
    outline: none;
  }

  svg {
    position: absolute;

    top: 18px;
    left: 18px;

    width: 18px;
    height: 20px;
    fill: transparent;
    stroke: ${({ theme }) => theme.colors.black};
  }

  input {
    border: none;
    border-radius: 10px;
    padding: 18px;
    padding-left: 44px;
    width: 360px;
    height: 56px;

    line-height: 1.25;

    background: ${({ theme }) => theme.colors.lightGray};

    &:focus-visible {
      outline: none;
    }

    &::placeholder {
      line-height: 1.25;
      color: ${({ theme }) => theme.colors.blackTransp06};
    }
  }
`;
