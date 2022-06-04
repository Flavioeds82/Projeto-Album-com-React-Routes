import { Link, useNavigate } from "react-router-dom";
import '../App.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Photo } from "../types/photo";



export function Album(){
   const params = useParams();
   const url = 'https://jsonplaceholder.typicode.com';
   const [photos, setPhotos] = useState<Photo[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const navigate = useNavigate();



   async function loadPhotos(){
      let response = await axios.get(`${url}/photos`);
      setPhotos(filterData(response.data));
      setLoading(false)
   }
   function handleClick(){
      navigate(-1);
   }
   function filterData(data:Photo[]){
      let temp:Photo[] = [];
      for(let i of data){
         if(params.id){
            if(i.albumId === parseInt(params.id)){
               temp.push(i)
            }
         }
         
      }
      return temp;
   }
   useEffect(()=>{
      loadPhotos();
   },[]);

   return(
      <div className="container">
      <button className='link-bt' onClick={handleClick}>Voltar</button>
      <div className="container-album">
            {loading &&
               <div className="load-album">
                  <div className="load">Carregando...</div>
               </div>
            }
            {!loading && photos.length > 0 &&
               photos.map((item, index)=>(
                  <Link to={`/pictures/${item.id}`} className="link">
                     <div key={index} className='grid-album' >
                              <div>{item.id}</div>
                              <img src={item.thumbnailUrl} alt="" /> 
                     </div>
                  </Link> 
                  
               ))    
            }

      </div>
      
      
      </div>
     
        
    
     
   )
}