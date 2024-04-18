import { Button } from 'components/Button/Button';
import { FavoriteButton } from 'components/FavoriteButton/FavoriteButton';
import React from 'react';
import { campersSelectors } from '../../store/campers/campersSlice';
import { useSelector } from 'react-redux';

export const CamperCard = ({ camper }) => {
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

  const favoriteItems = useSelector(campersSelectors.selectFavoriteItems);
  const isInFavorite = favoriteItems.includes(_id);

  const hasKitchen = kitchen > 0;
  const hasAC = airConditioner > 0;

  const reversedLocation = location.split(', ').reverse().join(', ');

  return (
    <li key={_id}>
      <div>
        <img src={gallery[0]} alt="" />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{price}</p>
        <FavoriteButton camperId={_id} isInFavorite={isInFavorite} />
        <p>{`${rating}(${reviews.length} Reviews)`}</p>
        <p>{reversedLocation}</p>
        <p>{description}</p>
        <div>
          <div>{`${adults} adults`}</div>
          <div>{transmission}</div>
          <div>{engine}</div>
          {hasKitchen && <div>Kitchen</div>}
          <div>{`${beds} beds`}</div>
          {hasAC && <div>AC</div>}
        </div>
        <Button>Shoe more</Button>
      </div>
    </li>
  );
};
