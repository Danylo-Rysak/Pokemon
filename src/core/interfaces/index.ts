import {
  PokemonAbility,
  PokemonGameIndex,
  PokemonMove,
  PokemonSprites,
  PokemonStat,
} from 'core/api/interfaces';

export interface GeneralPokemonInfo {
  name: string;
  url: string;
}

export interface PokemonType extends GeneralPokemonInfo {}

export interface PokemonFullInfo {
  id: number;
  abilities: PokemonAbility[];
  base_experience: number;
  forms: GeneralPokemonInfo[];
  game_indices: PokemonGameIndex[];
  height: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: number;
  species: GeneralPokemonInfo;
  stats: PokemonStat[];
  sprites: PokemonSprites;
  types: { slot: number; type: PokemonType }[];
  weight: number;
}

export interface PaginationParams {
  limit?: number;
  page?: number;
}
