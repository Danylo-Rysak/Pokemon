import { FC } from 'react';
import Cards from 'components/Cards';
import title from 'assets/icons/pokemon.png';
import styles from './index.module.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from 'components/Details';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <img className={styles.app__title} src={title} alt="title" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/pokemon-detail/:pokemonId" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
