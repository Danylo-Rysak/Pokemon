import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPokemonsList, getPokemonTypes } from './actions';
import { PokemonState } from './interfaces';
import { PokemonFullInfo, PokemonType } from 'core/interfaces';

const initialState: PokemonState = {
  pokemons: [],
  total: 0,
  types: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getPokemonsList.fulfilled,
        (
          state,
          { payload }: PayloadAction<{ pokemons: Array<PokemonFullInfo>; total: number }>
        ) => {
          state.pokemons = payload.pokemons;
          state.total = payload.total;
        }
      )
      .addCase(
        getPokemonTypes.fulfilled,
        (state, { payload }: PayloadAction<Array<PokemonType>>) => {
          state.types = payload;
        }
      );
  },
});

export default pokemonSlice.reducer;
