import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import * as campersApi from '../../api/campersApi';
import * as campersHandlers from './campersHandlers';

const initialState = {
  items: [],
  favoriteItems: [],
  isLoading: false,
  error: '',
  locationFilter: '',
  equipmentFilter: [],
  typeFilter: '',
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
    selectFavoriteItems: campersHandlers.handleFavoriteItems,

    getUniqueLocations: createSelector(
      [campersHandlers.handleCampers],
      items => {
        const locations = items.map(item => item.location);
        return [...new Set(locations)];
      }
    ),
  },
});

export const campersReducer = campersSlice.reducer;

export const campersActions = campersSlice.actions;
export const campersSelectors = campersSlice.selectors;
