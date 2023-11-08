import { ChangeEvent, FC, useEffect } from 'react';
import { DispatchType } from 'store/root';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsList } from 'store/pokemon-service/actions';
import {
  getCurrentPageSelector,
  getIsLoadingSelector,
  getPokemonsCountSelector,
  getPokemonsSelector,
} from 'store/pokemon-service/selectors';
import Card from './Card';
import { PokemonFullInfo } from 'core/interfaces';
import styled from './index.module.scss';
import { Pagination } from '@mui/material';
import Index from 'components/Loader';
import { setCurrentPage } from 'store/pokemon-service/reducer';

const Cards: FC = () => {
  const dispatch: DispatchType = useDispatch();

  const pokemons = useSelector(getPokemonsSelector);
  const pokemonsCount = useSelector(getPokemonsCountSelector);
  const isLoading = useSelector(getIsLoadingSelector);
  const currentPage = useSelector(getCurrentPageSelector);

  useEffect(() => {
    dispatch(getPokemonsList({ page: currentPage, limit: 12 }));
  }, [currentPage]);

  const handleChange = (_event: ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPage(value));
  };

  const totalPages = Math.ceil(pokemonsCount / 12);

  return (
    <>
      {isLoading && <Index />}
      <div className={styled.cards}>
        {pokemons.map((pokemon, i) => (
          <Card key={i} {...(pokemon as PokemonFullInfo)} />
        ))}
      </div>
      <Pagination
        disabled={isLoading}
        onChange={handleChange}
        count={totalPages}
        page={currentPage}
        color="primary"
      />
    </>
  );
};

export default Cards;
