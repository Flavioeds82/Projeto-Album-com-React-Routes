import { Routes, Route, Router, useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Album } from '../pages/Album';
import { Pictures } from '../pages/Photos';
import { useState } from 'react';

export function RouteList(){
   const [idItem, setId] = useState<number>(0);
   return useRoutes([
      {path: '/', element: <Home/>},
      {path: '/album/:id', element: <Album/>},
      {path: '/pictures/:id', element: <Pictures/>}
   ])
   
}
