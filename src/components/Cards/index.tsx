// Libs
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Store
import { DispatchType } from 'store/root';
// Actions
import { getPokemonsList } from 'store/pokemon-service/actions';
// Selectors
import {
  getCurrentPageSelector,
  getIsLoadingSelector,
} from 'store/pokemon-service/selectors';
// Components
import Index from 'components/Loader';
import Card from './Card';
// Interfaces
import { PokemonFullInfo } from 'core/interfaces';
// Styles
import styled from './index.module.scss';

interface CardsProps {
  pokemonsList: Array<PokemonFullInfo>;
}

const Cards: FC<CardsProps> = ({ pokemonsList }) => {
  const dispatch: DispatchType = useDispatch();

  const isLoading = useSelector(getIsLoadingSelector);
  const currentPage = useSelector(getCurrentPageSelector);

  useEffect(() => {
    dispatch(getPokemonsList({ page: currentPage, limit: 12 }));
  }, [currentPage]);

  return (
    <>
      {isLoading && <Index />}
      <div className={styled.cards}>
        {pokemonsList.map((pokemon, i) => (
          <Card key={i} {...pokemon} />
        ))}
      </div>
    </>
  );
};

export default Cards;
