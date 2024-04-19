import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import * as campersApi from '../../api/campersApi';
import * as campersHandlers from './campersHandlers';

const initialState = {
  items: [],
  favoriteItems: [],
  isLoading: false,
  error: '',
  filters: {
    locationFilter: '',
    equipmentFilter: [],
    typeFilter: '',
  },
};

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const campersSlice = createSlice({
  name: 'campers',
  initialState,

  reducers: creator => ({
    addToFavoriteItemsAction: creator.reducer(
      campersHandlers.handleAddToFavoriteItems
    ),

    removeFromFavoriteItemsAction: creator.reducer(
      campersHandlers.handleRemoveFromFavoriteItems
    ),

    setFiltersAction: creator.reducer(campersHandlers.handleSetFilters),

    clearFiltersAction: creator.reducer(campersHandlers.handleClearFilters),

    getCampersAction: creator.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          const data = await campersApi.getCampers();

          return data;
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: campersHandlers.handlePending,
        fulfilled: campersHandlers.handleGetCampers,
        rejected: campersHandlers.handleRejected,
      }
    ),
  }),

  selectors: {
    selectCampers: campersHandlers.handleCampers,
    selectIsLoading: campersHandlers.handleIsLoading,
    selectError: campersHandlers.handleError,
    selectFavoriteCampers: campersHandlers.handleFavoriteCampers,

    selectUniqueLocations: createSelector(
      [campersHandlers.handleCampers],
      items => {
        const locations = items.map(item => item.location);
        return [...new Set(locations)];
      }
    ),

    selectFilteredCampers: createSelector(
      [campersHandlers.handleCampers, campersHandlers.handleFilters],
      (campers, { locationFilter, equipmentFilter, typeFilter }) => {
        return campers.filter(camper => {
          const matchesLocation =
            locationFilter === '' || camper.location === locationFilter;

          const matchesType = typeFilter === '' || camper.form === typeFilter;

          const matchesEquipment =
            equipmentFilter.length === 0 ||
            equipmentFilter.every(equipment => {
              switch (equipment) {
                case 'AC':
                  return camper.details.airConditioner > 0;
                case 'Automatic':
                  return camper.transmission === 'automatic';
                case 'Kitchen':
                  return camper.details.kitchen > 0;
                case 'TV':
                  return camper.details.TV > 0;
                case 'Shower/WC':
                  return camper.details.shower > 0 || camper.details.toilet > 0;
                default:
                  return false;
              }
            });

          return matchesLocation && matchesType && matchesEquipment;
        });
      }
    ),
  },
});

export const campersReducer = campersSlice.reducer;

export const campersActions = campersSlice.actions;
export const campersSelectors = campersSlice.selectors;
