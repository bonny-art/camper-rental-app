export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleGetCampers = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = '';
};

export const handleAddToFavoriteItems = (state, { payload }) => {
  state.favoriteItems.push(payload);
};

export const handleRemoveFromFavoriteItems = (state, { payload }) => {
  state.favoriteItems = state.favoriteItems.filter(
    camper => camper._id !== payload
  );
};

export const handleSetFilters = (state, { payload }) => {
  state.filters.locationFilter = payload.location;
  state.filters.equipmentFilter = payload.equipment;
  state.filters.typeFilter = payload.type;
};

export const handleClearFilters = state => {
  state.filters.locationFilter = '';
  state.filters.equipmentFilter = [];
  state.filters.typeFilter = '';
};

export const handleCampers = state => state.items;
export const handleIsLoading = state => state.isLoading;
export const handleError = state => state.error;
export const handleFavoriteCampers = state => state.favoriteItems;
export const handleFilters = state => state.filters;
