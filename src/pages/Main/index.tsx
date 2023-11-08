// Libs
import { ChangeEvent, FC, useEffect } from 'react';
import { Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// Components
import Cards from 'components/Cards';
import SearchInput from 'components/Search';
import FilterByType from 'components/FilterByType';
// Hooks
import { usePokemonsList } from 'core/hooks';
// Actions
import { getPokemonTypes } from 'store/pokemon-service/actions';
// Reducers
import { setCurrentPage } from 'store/pokemon-service/reducer';
// Selectors
import { getPokemonsCountSelector } from 'store/pokemon-service/selectors';
// Store
import { DispatchType } from 'store/root';
// Icons
import title from 'assets/icons/pokemon.png';
// Styles
import styles from './index.module.scss';

const Main: FC = () => {
  const dispatch: DispatchType = useDispatch();

  const pokemonsCount = useSelector(getPokemonsCountSelector);

  const { pokemonsList, query, selectedType, currentPage, setSelectedType, setQuery } =
    usePokemonsList();

  useEffect(() => {
    dispatch(getPokemonTypes());
  }, []);

  const handleChange = (_event: ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPage(value));
  };

  const totalPages = Math.ceil(pokemonsCount / 12);
  return (
    <div className={styles.main}>
      <img className={styles.main__title} src={title} alt="title" />
      <div className={styles.main__filter}>
        <SearchInput query={query} setQuery={setQuery} />
        <FilterByType setSelectedType={setSelectedType} />
      </div>
      {(query || selectedType) && !pokemonsList.length ? (
        <div style={{ height: '50%' }}>
          No pokemons with this {query ? 'name' : 'type'}.
        </div>
      ) : (
        <Cards pokemonsList={pokemonsList} />
      )}
      <Pagination
        onChange={handleChange}
        count={totalPages}
        page={currentPage}
        color="primary"
      />
    </div>
  );
};

export default Main;
