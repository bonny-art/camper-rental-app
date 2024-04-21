import React from 'react';
import {
  Container,
  DetailsContainer,
  FeaturesContainer,
  Icon,
  IconWithStroke,
  Item,
  Label,
  List,
  Title,
} from './Features.styled';

import sprite from '../../assets/sprite.svg';
import { capitalizeFirstLetter, getType } from 'helpers/helpers';

export const Features = ({ camper }) => {
  const {
    adults,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    details: {
      kitchen,
      airConditioner,
      beds,
      CD,
      radio,
      hob,
      toilet,
      shower,
      freezer,
      gas,
      water,
      microwave,
    },
  } = camper;

  const hasKitchen = kitchen > 0;
  const hasBed = beds > 0;
  const hasAC = airConditioner > 0;
  const hasCD = CD > 0;
  const hasRadio = radio > 0;
  const hasHob = hob > 0;
  const hasToilet = toilet > 0;
  const hasShower = shower > 0;
  const hasFreezer = freezer > 0;
  const hasGas = gas;
  const hasWater = water;
  const hasMicrowave = microwave > 0;

  return (
    <Container>
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

        {hasAC && (
          <Label>
            <Icon>
              <use xlinkHref={`${sprite}#ac`}></use>
            </Icon>
            <p>AC</p>
          </Label>
        )}

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
            <IconWithStroke>
              <use xlinkHref={`${sprite}#air-conditioner`}></use>
            </IconWithStroke>
            <p>{`${airConditioner} air conditioner${
              airConditioner > 1 ? 's' : ''
            }`}</p>
          </Label>
        )}

        {hasCD && (
          <Label>
            <IconWithStroke>
              <use xlinkHref={`${sprite}#cd`}></use>
            </IconWithStroke>
            <p>CD</p>
          </Label>
        )}

        {hasRadio && (
          <Label>
            <IconWithStroke>
              <use xlinkHref={`${sprite}#radio`}></use>
            </IconWithStroke>
            <p>Radio</p>
          </Label>
        )}

        {hasHob && (
          <Label>
            <Icon>
              <use xlinkHref={`${sprite}#hob`}></use>
            </Icon>
            <p>{`${hob} hob${hob > 1 ? 's' : ''}`}</p>
          </Label>
        )}

        {hasToilet && (
          <Label>
            <Icon>
              <use xlinkHref={`${sprite}#toilet`}></use>
            </Icon>
            <p>Toilet</p>
          </Label>
        )}

        {hasShower && (
          <Label>
            <IconWithStroke>
              <use xlinkHref={`${sprite}#shower`}></use>
            </IconWithStroke>
            <p>Shower</p>
          </Label>
        )}

        {hasFreezer && (
          <Label>
            <IconWithStroke>
              <use xlinkHref={`${sprite}#freezer`}></use>
            </IconWithStroke>
            <p>Freezer</p>
          </Label>
        )}

        {hasGas && (
          <Label>
            <Icon>
              <use xlinkHref={`${sprite}#gas`}></use>
            </Icon>
            <p>Gas</p>
          </Label>
        )}

        {hasWater && (
          <Label>
            <IconWithStroke>
              <use xlinkHref={`${sprite}#water`}></use>
            </IconWithStroke>
            <p>Water</p>
          </Label>
        )}

        {hasMicrowave && (
          <Label>
            <IconWithStroke>
              <use xlinkHref={`${sprite}#microwave`}></use>
            </IconWithStroke>
            <p>Microwave</p>
          </Label>
        )}
      </FeaturesContainer>

      <DetailsContainer>
        <Title>
          <h3>Vehicle details</h3>
        </Title>

        <List>
          <Item>
            <p>Form</p>
            <p>{getType(form)}</p>
          </Item>
          <Item>
            <p>Length</p>
            <p>{length.replace(/(\d)([a-zA-Z])/g, '$1 $2')}</p>
          </Item>
          <Item>
            <p>Width</p>
            <p>{width.replace(/(\d)([a-zA-Z])/g, '$1 $2')}</p>
          </Item>
          <Item>
            <p>Height</p>
            <p>{height.replace(/(\d)([a-zA-Z])/g, '$1 $2')}</p>
          </Item>
          <Item>
            <p>Tank</p>
            <p>{tank.replace(/(\d)([a-zA-Z])/g, '$1 $2')}</p>
          </Item>
          <Item>
            <p>Consumption</p>
            <p>{consumption}</p>
          </Item>
        </List>
      </DetailsContainer>
    </Container>
  );
};
