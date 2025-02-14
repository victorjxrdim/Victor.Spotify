import React from 'react'

// Importação do Router Dom, para roteamento das páginas 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importação dos Componentes das "PÁGINAS"
import Header from './components/Header';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Artist from './pages/Artist';
import Songs from './pages/Songs';
import Song from './pages/Song';

const App = () => {
  return <>
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/artist/:id" element={<Artist />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/song/:id" element={<Song />} />
    </Routes>
  </BrowserRouter>
  </>
}

export default App;