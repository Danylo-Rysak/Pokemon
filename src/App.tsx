import { FC } from 'react';
import Cards from 'components/Cards';
import title from 'assets/icons/pokemon.png';
import styles from './index.module.scss';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <img className={styles.app__title} src={title} alt="title" />
      <Cards />
    </div>
  );
};

export default App;
