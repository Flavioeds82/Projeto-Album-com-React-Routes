import { useEffect, useState } from "react";
import { Routes, Route, Router } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../App.css';
import { Album } from '../types/album';
import axios from 'axios';
import { RouteList } from "../components/RouteList";

export function Home(){
   const [loading, setLoading] = useState<boolean>(true);
   const [Albums, setAlbums] = useState<Album[]>([]);
   const url = 'https://jsonplaceholder.typicode.com';
   const [id, setId] = useState<number>(-1);

   
   useEffect(()=>{

      loadAlbums();
      

   },[]);
   useEffect(()=>{
     
   },[ handleClick]);
   
   async function loadAlbums(){
      let response = await axios.get(`${url}/albums`);
      setAlbums(response.data) ;
      setLoading(false);
      
   }
  function handleClick(id:number){
       setId(id);
      
   }
  
   
   return(
      
         <div className="container-home">

            {loading &&
               <div className="load">
                  <div id='load'>Carregando...</div>
               </div>
            }

            {!loading && Albums.length > 0 &&
               Albums.map((item, index)=>(
                  <Link to={`/album/${item.id}`} className="link">
                     <div key={index} className='album-home' >
                              <span>{item.id}</span>
                              <h1>{item.title}</h1> 
                     </div>
                  </Link> 
               ))    
            }



         </div>
      
      
      
   )
}