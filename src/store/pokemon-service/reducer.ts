// Libs
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// Actions
import { getPokemonsList, getPokemonTypes } from './actions';
// Operations
import {
  getPokemonListFulfilledOperation,
  getPokemonListPendingOperation,
  getPokemonListRejectedOperation,
  getPokemonTypesOperation,
} from './operations';
// Interfaces
import { PokemonState } from './interfaces';

const initialState: PokemonState = {
  currentPage: 1,
  isLoading: false,
  pokemons: [],
  total: 0,
  types: [],
};

const pokemonStore = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonsList.pending, getPokemonListPendingOperation)
      .addCase(getPokemonsList.fulfilled, getPokemonListFulfilledOperation)
      .addCase(getPokemonsList.rejected, getPokemonListRejectedOperation)
      .addCase(getPokemonTypes.fulfilled, getPokemonTypesOperation);
  },
});

export const { setCurrentPage } = pokemonStore.actions;

export default pokemonStore.reducer;
