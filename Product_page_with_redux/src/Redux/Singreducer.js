

import React from 'react';
import { RESET_FORM, UPDATE_FORM } from './actionType';

const initial={
        user: "",
        pass: "",
        email: ""
      
}

const Singreducer = (state=initial,action) => {
     switch(action.type)
     {
        case UPDATE_FORM:
        return {
            ...state,
            [action.payload.name]:action.payload.value
        }

        case RESET_FORM:
        return initial;

        default:state
     }
}

export default Singreducer;
