import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPokemonsList, getPokemonTypes } from './actions';
import { PokemonState } from './interfaces';
import { PokemonFullInfo, PokemonType } from 'core/interfaces';

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
      .addCase(getPokemonsList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getPokemonsList.fulfilled,
        (
          state,
          { payload }: PayloadAction<{ pokemons: Array<PokemonFullInfo>; total: number }>
        ) => {
          state.pokemons = payload.pokemons;
          state.total = payload.total;
          state.isLoading = false;
        }
      )
      .addCase(getPokemonsList.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(
        getPokemonTypes.fulfilled,
        (state, { payload }: PayloadAction<Array<PokemonType>>) => {
          state.types = payload;
        }
      );
  },
});

export const { setCurrentPage } = pokemonStore.actions;

export default pokemonStore.reducer;
