// Libs
import { PayloadAction } from '@reduxjs/toolkit';
// Interfaces
import { PokemonFullInfo, PokemonType } from 'core/interfaces';
import { PokemonState } from './interfaces';

export const getPokemonListPendingOperation = (state: PokemonState) => {
  state.isLoading = true;
};

export const getPokemonListFulfilledOperation = (
  state: PokemonState,
  { payload }: PayloadAction<{ pokemons: Array<PokemonFullInfo>; total: number }>
) => {
  state.pokemons = payload.pokemons;
  state.total = payload.total;
  state.isLoading = false;
};

export const getPokemonListRejectedOperation = (state: PokemonState) => {
  state.isLoading = false;
};

export const getPokemonTypesOperation = (
  state: PokemonState,
  { payload }: PayloadAction<Array<PokemonType>>
) => {
  state.types = payload;
};
