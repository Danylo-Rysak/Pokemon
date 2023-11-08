// Libs
import { FC } from 'react';
import { Link } from 'react-router-dom';
// Interfaces
import { PokemonFullInfo } from 'core/interfaces';
// Styles
import styled from './index.module.scss';

const Card: FC<PokemonFullInfo> = (pokemonInfo) => (
  <Link
    className={styled.card}
    to={`/pokemon-detail/${pokemonInfo?.id}`}
    state={pokemonInfo}
  >
    <div className={styled.card__info}>
      <img
        className={styled.card__info_img}
        src={pokemonInfo?.sprites?.front_default || ''}
        alt="pokemon-sprite-front"
      />
      <div className={styled.card__info_name}>{pokemonInfo?.name}</div>
    </div>
  </Link>
);

export default Card;
