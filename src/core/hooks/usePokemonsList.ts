// Libs
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
// Selectors
import {
  getCurrentPageSelector,
  getPokemonsCountSelector,
  getPokemonsSelector,
} from 'store/pokemon-service/selectors';
// Functions
import { filterPokemonsByType, search } from 'core/functions';
// Interfaces
import { PokemonFullInfo } from 'core/interfaces';

export const usePokemonsList = () => {
  const pokemons = useSelector(getPokemonsSelector);
  const total = useSelector(getPokemonsCountSelector);
  const currentPage = useSelector(getCurrentPageSelector);
  const [query, setQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const slicedPokemons = useMemo(() => {
    const firstPageIndex = pokemons.length - 12;
    const lastPageIndex = pokemons.length;
    return pokemons.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pokemons, 12]);

  const pokemonsList = useMemo(() => {
    const foundedPokemons = search(
      slicedPokemons as Array<PokemonFullInfo>,
      'name',
      query
    );

    return filterPokemonsByType(foundedPokemons as PokemonFullInfo[], selectedType);
  }, [query, selectedType, slicedPokemons]);

  return {
    total,
    currentPage,
    query,
    setQuery,
    pokemonsList,
    setSelectedType,
    selectedType,
  };
};
