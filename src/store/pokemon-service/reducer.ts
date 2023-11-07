import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPokemonsList, getPokemonTypes } from './actions';
import { PokemonState } from './interfaces';
import { PokemonFullInfo, PokemonType } from 'core/interfaces';

const initialState: PokemonState = {
  isLoading: false,
  pokemons: [],
  total: 0,
  types: [],
};

const pokemonStore = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
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

export default pokemonStore.reducer;
