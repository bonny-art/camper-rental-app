import { Button } from 'components/Button/Button';
import { FavoriteButton } from 'components/FavoriteButton/FavoriteButton';
import React, { useState } from 'react';
import { campersSelectors } from '../../store/campers/campersSlice';
import { useSelector } from 'react-redux';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';
import { CamperModal } from 'components/CamperModal/CamperModal';

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
  const hasAC = airConditioner > 0;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li key={_id}>
        <div>
          <img src={gallery[0]} alt={name} />
        </div>

        <div>
          <div>
            <h2>{name}</h2>

            <div>
              <p>{price}</p>
              <FavoriteButton camper={camper} isInFavorite={isInFavorite} />
            </div>
          </div>

          <div>
            <FaStar value={{ color: '#FFC531' }} />
            <p>{`${rating}(${reviews.length} Reviews)`}</p>
            <HiOutlineLocationMarker />
            <p>{location}</p>
          </div>

          <p>{description}</p>

          <div>
            <div>{`${adults} adults`}</div>
            <div>{transmission}</div>
            <div>{engine}</div>
            {hasKitchen && <div>Kitchen</div>}
            <div>{`${beds} beds`}</div>
            {hasAC && <div>AC</div>}
          </div>

          <Button type="button" onClick={openModal}>
            Show more
          </Button>
        </div>
      </li>
      <CamperModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        camper={camper}
      />
    </>
  );
};
