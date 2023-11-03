export interface PaginationParams {
  limit?: number;
  page?: number;
}

export interface PaginationResponse {
  results: GetPokemonsResponse;
  count: number;
  next: string;
  previous: string;
}

export interface GetPokemonFullInfoParams {
  url: string;
}

export interface GetPokemonsResponse {
  name: string;
  url: string;
}

export interface PokemonTypesResponse {
  count: number;
  results: PokemonType[];
}

export interface GeneralPokemonInfo {
  name: string;
  url: string;
}

export interface PokemonAbility {
  slot: number;
  is_hidden: boolean;
  ability: GeneralPokemonInfo;
}

export interface PokemonGameIndex {
  game_index: number;
  version: GeneralPokemonInfo;
}

export interface PokemonMove {
  move: GeneralPokemonInfo;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: GeneralPokemonInfo;
    version_group: GeneralPokemonInfo;
  }[];
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: GeneralPokemonInfo;
}

export interface PokemonSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
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
