// Interfaces
import { PokemonFullInfo } from 'core/interfaces';

export const search = <T extends object>(array: T[], field: keyof T, query?: string) => {
  if (!query) return array as T[];

  return array.filter((item) =>
    (item[field] as unknown as string)?.toLowerCase()?.includes(query.toLowerCase())
  ) as T[];
};

export const filterPokemonsByType = (
  pokemons: PokemonFullInfo[],
  selectedType?: string
) => {
  if (!selectedType || selectedType === 'all') return pokemons;

  return pokemons.filter((pokemon) => {
    return pokemon.types.some((type) => type.type.name === selectedType);
  });
};
