import { Button } from 'components/Button/Button';
import { CamperList } from 'components/CamperList/CamperList';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { campersSelectors } from 'store/campers/campersSlice';
import { ButtonBox, Container, Section } from './Favorites.styled';

export const Favorites = () => {
  const allCampers = useSelector(campersSelectors.selectFavoriteCampers);

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

  const scrollDown = () => {
    window.scroll({
      top: window.scrollY + (window.innerHeight - 245),
      behavior: 'smooth',
    });
  };

  const handleLoadMore = () => {
    setVisibleCampersNumber(
      prevVisibleCampersNumber => prevVisibleCampersNumber + 4
    );
  };

  const canLoadMore = visibleCampersNumber < allCampers.length;

  return (
    <Container>
      <Section>
        <CamperList campers={visibleCampers} />

        <ButtonBox>
          {canLoadMore && (
            <Button className="load" onClick={handleLoadMore}>
              Load more
            </Button>
          )}
        </ButtonBox>
      </Section>
    </Container>
  );
};
