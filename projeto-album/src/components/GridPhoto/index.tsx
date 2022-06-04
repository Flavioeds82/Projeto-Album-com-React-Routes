import { GridPhoto } from '../../types/GridPhoto';
import './style.css';

export function GridPhotografy(props:GridPhoto){
   return(
      <div id='image'>
         <img src={props.url} alt=""  />
      </div>
   )
      
      
}