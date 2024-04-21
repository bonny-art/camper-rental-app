import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 44px;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  height: 200px;

  align-content: flex-start;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollbar};
    border-radius: 7px;
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  border-radius: 100px;
  padding: 12px 18px;

  background: #f2f4f7;
  mix-blend-mode: multiply;

  p {
    font-weight: 500;
    line-height: 1.25;
  }
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;

  fill: ${({ theme }) => theme.colors.black};
`;

export const IconWithStroke = styled.svg`
  width: 20px;
  height: 20px;

  fill: transparent;
  stroke: ${({ theme }) => theme.colors.black};
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  height: 286px;
`;

export const Title = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.blackTransp02};

  h3 {
    display: block;

    height: 48px;

    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33333;
  }
`;
