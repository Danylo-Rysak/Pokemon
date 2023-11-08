// Libs
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Pages
import Details from 'pages/Details';
import Main from 'pages/Main';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/pokemon-detail/:pokemonId" element={<Details />} />
    </Routes>
  </BrowserRouter>
);

export default App;
