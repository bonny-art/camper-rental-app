import styled from '@emotion/styled';

export const Container = styled.div`
  width: 380px;

  position: -webkit-sticky;
  position: sticky;
  top: 114px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollbar};
    border-radius: 7px;
  }
`;

export const FiltersBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  width: 360px;
  height: calc(100vh - 254px);
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
