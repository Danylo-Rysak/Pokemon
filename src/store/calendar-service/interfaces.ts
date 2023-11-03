import { GeneralPokemonInfo, PokemonFullInfo, PokemonType } from 'core/interfaces';

export interface PokemonState {
  pokemons: Array<GeneralPokemonInfo> | Array<PokemonFullInfo>;
  total: number;
  types: Array<PokemonType>;
}
