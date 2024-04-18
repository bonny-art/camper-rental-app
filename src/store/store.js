import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { campersReducer } from './campers/campersSlice';
import { configureStore } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'campers',
  storage,
  whitelist: ['favoriteItems'],
};

const persistedCampersReducer = persistReducer(persistConfig, campersReducer);

const reducer = {
  campers: persistedCampersReducer,
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
