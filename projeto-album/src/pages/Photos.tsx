import '../App.css';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Photo } from '../types/photo';
import { GridPhotografy } from '../components/GridPhoto';



export function Pictures(){

   const params = useParams();
   const navigate = useNavigate();
   const url = 'https://jsonplaceholder.typicode.com';

   const [photo, setPhoto] = useState<number>(0);
   const [photoURL, setPhotoURL] = useState<string>('');
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
                <img src={photoURL} alt="" />      
            }

         </div>
      
      
      </div>
     
        
    
     
   )
}