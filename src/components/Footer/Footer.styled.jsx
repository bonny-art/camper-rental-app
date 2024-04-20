import styled from '@emotion/styled';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;

export const NavSection = styled.div`
  width: 1352px;
  margin-left: auto;
  margin-right: auto;
  padding: 12px 20px;

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

export const Nav = styled.div`
  display: flex;
  gap: 24px;

  align-items: center;

  padding-bottom: 20px;
`;

export const Logo = styled.div`
  display: flex;
  gap: 24px;

  align-items: center;
`;

export const CopyrightContainer = styled.header`
  border-top: 3px solid ${({ theme }) => theme.colors.gray};
`;

export const CopyrightSection = styled.div`
  width: 1352px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 20px;
`;

export const Copyright = styled.div`
  text-align: center;

  p {
    font-weight: 500;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
