import { StoreType } from '../root';

export const getPokemonsSelector = (store: StoreType) => {
  return store.pokemonStore.pokemons;
};
