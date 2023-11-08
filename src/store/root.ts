// Libs
import { configureStore } from '@reduxjs/toolkit';
// Reducers
import pokemonStore from 'store/pokemon-service/reducer';

const store = configureStore({
  reducer: {
    pokemonStore,
  },
});

// Global store type
export type StoreType = ReturnType<typeof store.getState>;

// Dispatch type
export type DispatchType = typeof store.dispatch;

export default store;
