import { PokemonFullInfo } from 'core/interfaces';
import styled from './index.module.scss';

const Card = (pokemonInfo: PokemonFullInfo) => (
  <div className={styled.card}>
    <div className={styled.card__info}>
      <img
        className={styled.card__info_img}
        src={pokemonInfo?.sprites?.front_default || ''}
        alt="pokemon-sprite-front"
      />
      <div className={styled.card__info_name}>{pokemonInfo?.name}</div>
    </div>
  </div>
);

export default Card;
