import { ChangeEvent, FC, useEffect, useState } from 'react';
import { DispatchType } from 'store/root';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsList } from 'store/pokemon-service/actions';
import {
  getIsLoadingSelector,
  getPokemonsCountSelector,
  getPokemonsSelector,
} from 'store/pokemon-service/selectors';
import Card from './Card';
import { PokemonFullInfo } from 'core/interfaces';
import styled from './index.module.scss';
import { Pagination } from '@mui/material';
import Loader from '../Loader/Loader';

const Cards: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const dispatch: DispatchType = useDispatch();

  const pokemons = useSelector(getPokemonsSelector);
  const pokemonsCount = useSelector(getPokemonsCountSelector);
  const isLoading = useSelector(getIsLoadingSelector);

  useEffect(() => {
    dispatch(getPokemonsList({ page: currentPage, limit: 12 }));
  }, [currentPage]);

  const handleChange = (_event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const totalPages = Math.ceil(pokemonsCount / 12);

  return (
    <>
      {isLoading && <Loader />}
      <div className={styled.cards}>
        {pokemons.map((pokemon, i) => (
          <Card key={i} {...(pokemon as PokemonFullInfo)} />
        ))}
      </div>
      <Pagination
        disabled={isLoading}
        onChange={handleChange}
        count={totalPages}
        color="primary"
      />
    </>
  );
};

export default Cards;
