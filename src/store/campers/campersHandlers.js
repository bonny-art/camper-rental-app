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
  state.favoriteItems = state.favoriteItems.filter(id => id !== payload);
};

export const handleSetFilters = (state, { payload }) => {
  state.locationFilter = payload.location;
  state.equipmentFilter = payload.equipment;
  state.typeFilter = payload.type;
};

export const handleClearFilters = state => {
  state.locationFilter = '';
  state.equipmentFilter = [];
  state.typeFilter = '';
};

export const handleCampers = state => state.items;
export const handleIsLoading = state => state.isLoading;
export const handleError = state => state.error;
export const handleFavoriteItems = state => state.favoriteItems;
