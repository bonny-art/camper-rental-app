import { Button } from 'components/Button/Button';
import { FavoriteButton } from 'components/FavoriteButton/FavoriteButton';
import React, { useState } from 'react';
import { campersSelectors } from '../../store/campers/campersSlice';
import { useSelector } from 'react-redux';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import sprite from '../../assets/sprite.svg';
import { CamperModal } from 'components/CamperModal/CamperModal';
import {
  AttributesItem,
  AttributesRow,
  Container,
  Description,
  FeaturesContainer,
  Head,
  Icon,
  IconWithStroke,
  ImageBox,
  InfoBox,
  Label,
  MapPin,
  Star,
  TitleRow,
} from './CamperCard.styled';
import { capitalizeFirstLetter } from 'helpers/helpers';

export const CamperCard = ({ camper }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    _id,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    adults,
    transmission,
    engine,
    details: { kitchen, airConditioner, beds },
    gallery,
  } = camper;

  const favoriteItems = useSelector(campersSelectors.selectFavoriteCampers);
  const isInFavorite = favoriteItems.some(item => item._id === _id);

  const hasKitchen = kitchen > 0;
  const hasBed = beds > 0;
  const hasAC = airConditioner > 0;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container key={_id}>
        <ImageBox>
          <img src={gallery[0]} alt={name} />
        </ImageBox>

        <InfoBox>
          <Head>
            <TitleRow>
              <h2>{name}</h2>

              <div>
                <p>{`€${price}.00`}</p>
                <FavoriteButton camper={camper} isInFavorite={isInFavorite} />
              </div>
            </TitleRow>

            <AttributesRow>
              <AttributesItem>
                <Star>
                  <use href={`${sprite}#star`} />
                </Star>
                <p>{`${rating}(${reviews.length} Reviews)`}</p>
              </AttributesItem>

              <AttributesItem>
                <MapPin>
                  <use href={`${sprite}#map-pin`} />
                </MapPin>
                <p>{location}</p>
              </AttributesItem>
            </AttributesRow>
          </Head>

          <Description>{description}</Description>

          <FeaturesContainer>
            <Label>
              <Icon>
                <use xlinkHref={`${sprite}#adults`}></use>
              </Icon>
              <p>{`${adults} adults`}</p>
            </Label>

            <Label>
              <IconWithStroke>
                <use xlinkHref={`${sprite}#transmission`}></use>
              </IconWithStroke>
              <p>{capitalizeFirstLetter(transmission)}</p>
            </Label>

            <Label>
              <Icon>
                <use xlinkHref={`${sprite}#engine`}></use>
              </Icon>
              <p>{capitalizeFirstLetter(engine)}</p>
            </Label>

            {hasKitchen && (
              <Label>
                <IconWithStroke>
                  <use xlinkHref={`${sprite}#kitchen`}></use>
                </IconWithStroke>
                <p>Kitchen</p>
              </Label>
            )}

            {hasBed && (
              <Label>
                <IconWithStroke>
                  <use xlinkHref={`${sprite}#bed`}></use>
                </IconWithStroke>
                <p>{`${beds} bed${beds > 1 ? 's' : ''}`}</p>
              </Label>
            )}

            {hasAC && (
              <Label>
                <Icon>
                  <use xlinkHref={`${sprite}#ac`}></use>
                </Icon>
                <p>AC</p>
              </Label>
            )}
          </FeaturesContainer>

          <div>
            <Button className="show" type="button" onClick={openModal}>
              Show more
            </Button>
          </div>
        </InfoBox>
      </Container>
      <CamperModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        camper={camper}
      />
    </>
  );
};
