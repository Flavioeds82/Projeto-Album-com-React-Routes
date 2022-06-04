import '../App.css';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Photo } from '../types/photo';



export function Pictures(){

   const params = useParams();
   const navigate = useNavigate();
   const url = 'https://jsonplaceholder.typicode.com';

   const [photo, setPhoto] = useState<number>(0);
   const [photoURL, setPhotoURL] = useState<string>('');
   const [photoTitle, setPhotoTitle] = useState<string>('');
   const [loading, setLoading] = useState<boolean>(true);
   
   



   async function loadPhotos(){
      let response = await axios.get(`${url}/photos`);
      filterData(response.data);
      setLoading(false);
   }
   function handleClick(){
      navigate(-1);
   }
   function filterData(data:Photo[]){
      for(let i of data){
         if(params.id){
            if(i.id === parseInt(params.id)){
                setPhotoURL(i.url);
                setPhoto(i.id);
                setPhotoTitle(i.title);
                
            }
         }
         
      }
      
   }
   useEffect(()=>{
      loadPhotos();
   },[]);

   return(
      <div className="container">
         <button className='link-bt' onClick={handleClick}>Voltar</button>
         <div className="photo">
            
            {loading && 
                <div className="load-photo">Carregando...</div>      
            }
            {!loading &&
               <div className='photo-info'>
                  <div className='info'>{photoTitle}</div>
                  <img src={photoURL} alt="" id='photo'/>
               </div>
                     
            }

         </div>
      
      
      </div>
     
        
    
     
   )
}