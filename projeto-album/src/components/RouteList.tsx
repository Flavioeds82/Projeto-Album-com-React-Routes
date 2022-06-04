import { Routes, Route, Router } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Album } from '../pages/Album';
import { Pictures } from '../pages/Photos';
import { useState } from 'react';

export function RouteList(){
   const [idItem, setId] = useState<number>(0);
   return (
      <div className="routes">

            <Routes>

               <Route path="/" element={<Home/>} />
               <Route path="/album/:id" element={<Album/>} />
               <Route path="/pictures/:id" element={<Pictures/>} />

            </Routes>

      </div>
   )
}
