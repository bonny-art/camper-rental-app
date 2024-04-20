import styled from '@emotion/styled';

export const Container = styled.li`
  display: flex;
  gap: 24px;

  border: 1px solid ${({ theme }) => theme.colors.blackTransp02};
  border-radius: 20px;
  padding: 24px;
  width: 100%;
  height: 358px;

  overflow: hidden;
`;

export const ImageBox = styled.div`
  border-radius: 10px;
  width: 290px;
  height: 310px;

  overflow: hidden;

  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  /* width: 526px; */
  flex-grow: 1;
  max-width: calc(100% - 290px - 24px);
  height: 310px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
  }

  div {
    display: flex;
    align-items: center;

    gap: 10px;
  }

  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
  }
`;

export const AttributesRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const AttributesItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Star = styled.svg`
  width: 16px;
  height: 16px;

  fill: ${({ theme }) => theme.colors.yellow};
`;

export const MapPin = styled.svg`
  width: 16px;
  height: 16px;

  fill: ${({ theme }) => theme.colors.white};
  stroke: ${({ theme }) => theme.colors.black};
`;

export const Description = styled.p`
  min-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

export const Icon = styled.svg`
  width: 20px;
  height: 20px;

  fill: ${({ theme }) => theme.colors.black};
`;

export const IconWithStroke = styled.svg`
  width: 20px;
  height: 20px;

  fill: ${({ theme }) => theme.colors.white};
  stroke: ${({ theme }) => theme.colors.black};
`;
