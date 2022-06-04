import { useState } from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import './App.css';
import { RouteList } from './components/RouteList';

import { Album } from './types/album';
import {Photo} from './types/photo'

function App() {
  const [Albums, setAlbums] = useState<Album[]>([]);


  return (
    <div className="App">
      <div className="headline"> Galeria de Fotos </div>
      <hr />
      <RouteList/>
    </div>
  )
}

export default App
