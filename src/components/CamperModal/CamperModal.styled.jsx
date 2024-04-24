import styled from '@emotion/styled';

export const ModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 982px;
  height: 746px;
  padding: 40px 16px 40px 40px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;

  z-index: 4;
`;

export const InerModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;

  /* width: 950px; */
  height: 688px;

  padding-right: 16px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollbar};
    border-radius: 7px;
  }
`;

export const CLoseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: 32px;
  height: 32px;
`;

export const CloseIcon = styled.svg`
  width: 32px;
  height: 32px;
  stroke: ${({ theme }) => theme.colors.black};
`;

export const TabButtonsContainer = styled.div`
  display: flex;
  gap: 40px;

  height: 48px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.blackTransp02};

  button {
    display: block;
    position: relative;

    margin-bottom: 24px;

    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;

    &.active-tab::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -27px;
      height: 5px;
      background-color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 532px;
`;

export const TabsContainer = styled.div`
  display: flex;

  width: 430px;
`;

export const FormContainer = styled.div`
  width: 448px;

  border: 1px solid ${({ theme }) => theme.colors.blackTransp02};
  border-radius: 10px;
  padding: 24px;
`;
