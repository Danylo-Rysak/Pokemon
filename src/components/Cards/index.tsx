import { FC, useEffect } from 'react';
import { DispatchType } from 'store/root';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsList } from 'store/pokemon-service/actions';
import { getPokemonsSelector } from 'store/pokemon-service/selectors';
import Card from './Card';
import { PokemonFullInfo } from '../../core/interfaces';
import styled from './index.module.scss';

const Cards: FC = () => {
  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    dispatch(getPokemonsList({ page: 1, limit: 12 }));
  }, []);

  const pokemons = useSelector(getPokemonsSelector);

  return (
    <div className={styled.cards}>
      {pokemons.map((pokemon, i) => (
        <Card key={i} {...(pokemon as PokemonFullInfo)} />
      ))}
    </div>
  );
};

export default Cards;
