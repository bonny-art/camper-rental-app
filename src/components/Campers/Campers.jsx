import { Button } from 'components/Button/Button';
import { CamperList } from 'components/CamperList/CamperList';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { campersSelectors } from '../../store/campers/campersSlice';
import { ButtonBox, Container, LoaderBox } from './Campers.styled';
import { scrollDown } from 'helpers/helpers';
import { Message } from 'components/Message/Message';
import { Loader } from 'components/Loader/Loader';

export const Campers = () => {
  const allCampers = useSelector(campersSelectors.selectFilteredCampers);
  const isLoading = useSelector(campersSelectors.selectIsLoading);

  const [visibleCampersNumber, setVisibleCampersNumber] = useState(4);

  const visibleCampers = allCampers.slice(0, visibleCampersNumber);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    visibleCampersNumber > 4 &&
      setTimeout(() => {
        scrollDown();
      }, 500);
  }, [visibleCampersNumber]);

  const handleLoadMore = () => {
    setVisibleCampersNumber(
      prevVisibleCampersNumber => prevVisibleCampersNumber + 4
    );
  };

  const canLoadMore = visibleCampersNumber < allCampers.length;

  return (
    <>
      <Container>
        {isLoading ? (
          <LoaderBox>
            <Loader />
          </LoaderBox>
        ) : (
          <>
            {visibleCampers.length ? (
              <CamperList campers={visibleCampers} />
            ) : (
              <Message>There are no campers for your request</Message>
            )}

            <ButtonBox>
              {canLoadMore && (
                <Button className={'load'} onClick={handleLoadMore}>
                  Load more
                </Button>
              )}
            </ButtonBox>
          </>
        )}
      </Container>
    </>
  );
};
