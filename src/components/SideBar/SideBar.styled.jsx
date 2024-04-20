import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 64px;

  width: 360px;
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const LocationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3 {
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.blackTransp06};
  }
`;

export const BigFilterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  h3 {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FilterTitle = styled.div`
  height: 48px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.filterLine};
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
