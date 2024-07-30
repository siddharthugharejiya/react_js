import React from 'react';
import { UPDATE_FORM } from './actionType';
const initial={
    name:"",
    email:"",
    pass:""
}

const Singreducer = (state=initial,action) => {

   switch(action.type){
    case UPDATE_FORM:
    return{
        ...state,
        [action.payload.name]:action.payload.value
    }
    default:
    return state
   }
}

export default Singreducer;
