import styled from '@emotion/styled';

export const Icon = styled.svg`
  width: 24px;
  height: 24px;

  fill: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.orange : theme.colors.white};
  stroke: ${({ theme, isSelected }) => !isSelected && theme.colors.black};
`;
