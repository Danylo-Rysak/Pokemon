// Libs
import { pokemonApi } from './index';
// Interfaces
import {
  PokemonFullInfo,
  GetPokemonFullInfoParams,
  PaginationParams,
  PaginationResponse,
  PokemonTypesResponse,
} from './interfaces';

export const getPokemons = ({ limit, page }: PaginationParams = {}) =>
  pokemonApi
    .get<PaginationResponse>('/pokemon', { params: { limit, offset: page } })
    .then((response) => response.data);

export const getPokemonFullInfo = ({ url }: GetPokemonFullInfoParams) =>
  pokemonApi.get<PokemonFullInfo>(url).then((response) => response.data);

export const getPokemonType = () =>
  pokemonApi.get<PokemonTypesResponse>('/type').then((response) => response.data);
