import React from 'react';
import { UPDATE_FORM } from './actionType';
const Singaction = (dispatch) => {
   fetch(`http://localhost:8000/UserName`)
   .then(response => response.json())
   .then(res=>{
      dispatch({
         type:UPDATE_FORM,
         payload:res
      })
    
   })
   .catch(error=>{
      console.log(error);
   })
}

export default Singaction;
