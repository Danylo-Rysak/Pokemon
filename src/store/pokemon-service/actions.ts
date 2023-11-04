import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonFullInfo, getPokemons, getPokemonType } from 'core/api/requests';
import { PokemonGetData, PokemonGetType } from 'store/action-types';
import { PaginationParams } from 'core/interfaces';

export const getPokemonsList = createAsyncThunk(
  PokemonGetData,
  async (paginationParams: PaginationParams) => {
    try {
      const { results, count } = await getPokemons(paginationParams);
      const pokemons = await Promise.all(
        results.map(({ url }) => getPokemonFullInfo({ url }))
      );
      return { pokemons, total: count };
    } catch (error) {
      throw error;
    }
  }
);

export const getPokemonTypes = createAsyncThunk(PokemonGetType, async () => {
  try {
    const { results } = await getPokemonType();
    return results;
  } catch (error) {
    throw error;
  }
});
