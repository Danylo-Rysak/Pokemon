import { configureStore } from '@reduxjs/toolkit';
import pokemonStore from './pokemon-service/reducer';

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
