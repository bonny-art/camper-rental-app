import { BookingForm } from 'components/BookingForm/BookingForm';
import { Features } from 'components/Features/Features';
import { GeneralInfo } from 'components/GeneralInfo/GeneralInfo';
import { ModalContainer } from 'components/ModalContainer/ModalContainer';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import React, { useState } from 'react';

import {
  BottomContainer,
  CLoseButton,
  CloseIcon,
  FormContainer,
  InerModal,
  ModalStyled,
  TabButtonsContainer,
  TabsContainer,
} from './CamperModal.styled';
import sprite from '../../assets/sprite.svg';
import { TitleInfo } from 'components/TitleInfo/TitleInfo';

export const CamperModal = ({ isModalOpen, closeModal, camper }) => {
  const [activeTab, setActiveTab] = useState('Features');

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <>
      {isModalOpen && (
        <ModalContainer onClose={closeModal}>
          <ModalStyled>
            <CLoseButton onClick={closeModal}>
              <CloseIcon>
                <use href={`${sprite}#close-btn`} />
              </CloseIcon>
            </CLoseButton>

            <TitleInfo camper={camper} />

            <InerModal>
              <div>
                <GeneralInfo camper={camper} />
              </div>

              <TabButtonsContainer>
                <button
                  onClick={() => handleTabClick('Features')}
                  className={activeTab === 'Features' ? 'active-tab' : ''}
                >
                  Features
                </button>
                <button
                  onClick={() => handleTabClick('Reviews')}
                  className={activeTab === 'Reviews' ? 'active-tab' : ''}
                >
                  Reviews
                </button>
              </TabButtonsContainer>

              <BottomContainer>
                <TabsContainer>
                  {activeTab === 'Features' ? (
                    <Features camper={camper} />
                  ) : (
                    <ReviewsList reviews={camper.reviews} />
                  )}
                </TabsContainer>

                <FormContainer>
                  <BookingForm />
                </FormContainer>
              </BottomContainer>
            </InerModal>
          </ModalStyled>
        </ModalContainer>
      )}
    </>
  );
};
