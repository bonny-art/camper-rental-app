import styled from '@emotion/styled';

export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 8px;

  .ac {
    width: 112px;

    svg {
      fill: ${({ theme }) => theme.colors.black};
    }
  }

  .transmission {
    width: 115px;

    svg {
      fill: ${({ theme }) => theme.colors.white};
      stroke: ${({ theme }) => theme.colors.black};
    }
  }

  .kitchen {
    width: 113px;

    svg {
      fill: ${({ theme }) => theme.colors.white};
      stroke: ${({ theme }) => theme.colors.black};
    }
  }

  .tv {
    width: 112px;

    svg {
      fill: ${({ theme }) => theme.colors.white};
      stroke: ${({ theme }) => theme.colors.black};
    }
  }

  .shower {
    width: 115px;

    svg {
      fill: ${({ theme }) => theme.colors.white};
      stroke: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Label = styled.label`
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const CustomInput = styled.span`
  display: flex;
  flex-direction: column;
  gap: 5px;

  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.blackTransp02};
  border-radius: 10px;

  transition: border-color ${({ theme }) => theme.animation.transition};

  height: 95px;

  cursor: pointer;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  p {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
  }

  border-color: ${({ theme, isSelected }) => isSelected && theme.colors.orange};
`;

export const Icon = styled.svg`
  width: 40px;
  height: 28px;
`;
