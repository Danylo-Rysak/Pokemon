import { FC } from 'react';
import { PokemonFullInfo } from 'core/interfaces';
import { Link, useLocation } from 'react-router-dom';
import Info from './Info';
import styles from './index.module.scss';
import arrowBack from 'assets/icons/arrow-back.svg';

const Details: FC = () => {
  const { state } = useLocation();
  const pokemonInfo = state as PokemonFullInfo;
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Link style={{ textDecoration: 'none' }} to="/">
        <img className={styles.arrowBack} src={arrowBack} alt="arrowBack" />
      </Link>
      <div className={styles.details}>
        <p className={styles.details__name}>{pokemonInfo?.name}</p>
        <img
          className={styles.details__img}
          src={pokemonInfo?.sprites.front_default || ''}
          alt="pokemon-front"
        />
        <img
          className={styles.details__img}
          src={pokemonInfo?.sprites.back_default || ''}
          alt="pokemon-back"
        />
        <div className={styles.details__parametrs}>
          <p>Height: {pokemonInfo?.height}</p>
          <p>Weight: {pokemonInfo?.weight}</p>
        </div>
        <div className={styles.details__info}>
          <Info title="Types" items={pokemonInfo?.types.map((type) => type.type.name)} />
          <Info
            title="Abilities"
            items={pokemonInfo?.abilities.map((ability) => ability.ability.name)}
          />
          <Info
            title="Moves"
            items={pokemonInfo?.moves.map((move) => move.move.name)}
            scroll
          />
          <Info
            title="Stats"
            items={pokemonInfo?.stats.map((stat) => stat.stat.name)}
            scroll
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
