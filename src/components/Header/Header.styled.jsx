import styled from '@emotion/styled';

export const Container = styled.header`
  position: fixed;
  z-index: 2;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  padding: 20px 0;
`;

export const Section = styled.div`
  width: 1352px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 60px;
    height: 42px;
    fill: ${({ theme }) => theme.colors.black};
  }

  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
  }

  span {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 24px;

  align-items: center;
`;
