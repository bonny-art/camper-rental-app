import { Button } from 'components/Button/Button';
import React from 'react';

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
  } = camper;

  const hasKitchen = kitchen > 0;
  const hasAC = airConditioner > 0;

  const reversedLocation = location.split(', ').reverse().join(', ');

  return (
    <li key={_id}>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{price}</p>
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
