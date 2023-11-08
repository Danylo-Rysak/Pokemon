import { StoreType } from '../root';

export const getPokemonsSelector = (store: StoreType) => {
  return store.pokemonStore.pokemons;
};

export const getPokemonsCountSelector = (store: StoreType) => {
  return store.pokemonStore.total;
};

export const getIsLoadingSelector = (store: StoreType) => {
  return store.pokemonStore.isLoading;
};

export const getCurrentPageSelector = (store: StoreType) => {
  return store.pokemonStore.currentPage;
};
