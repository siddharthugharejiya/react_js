

import {  CART_FETCH, DATA, EMAIL, L_EMAIL, L_PASSWORD, PASSWORD, SINGLE,  USERNAME } from "./action_type";

const initial_pro = {
    data: []
};

export const product_reducer = (state = initial_pro, { type, payload }) => {
    switch (type) {
        case DATA:
            return {
                ...state,
                data: payload 
            };
        default:
            return state;
    }
};
const initial_single = {
    data: null
}

export const single_reducer = (state = initial_single, { type, payload }) => {

    switch (type) {
        case SINGLE:
            return {
                ...state,
                data: payload
            }
        default:
            return state
    }
}
const initialState = {
    data : []
}
export const cartReducer_Data = (state = initialState, action) => {
    switch (action.type) {
      case "CART_FETCH":
        return {
          ...state,
          data: action.payload
        };
      
      case "REMOVE_FROM_CART":
        return {
          ...state,
          data: state.data.filter(item => item.id !== action.payload) 
        };
      
      default:
        return state;
    }
  };
  
const ini = { 
    data : [] 
};

export const card_fetch = (state = ini, { type, payload }) => {
    switch(type) {
        case CART_FETCH:
            return { 
                ...state, 
                data : payload 
            };
        default: 
            return state;
    }
};
const remove_data = {
    data : []
}
export const remove_reducer = (state = remove_data,action) =>{
      switch(action.type)
      {
        case "REMOVE_FROM_CART":
        return {
            ...state,
            data : state.data.filter(item = item.id !== action.payload)
        };
        default : return state;
      }
}

const whole_data = {
    Data : []
}
export const Whole_data_reducer = (state=whole_data,{type,payload})=>{
    switch(type){
     case "WHOLE":
     return {
        ...state,
          Data : payload
     }
    
    default : return state
}
}
const Signup_initial={
    username:"",
    email:"",
    password:""
}
export const Signup_reducer = (state=Signup_initial,action) =>{
      switch(action.type)
      {
        case USERNAME:
        return{
            ...state,
            username : action.payload
        }
        case EMAIL:
            return{
                ...state,
                email:action.payload
            }
        case PASSWORD:
            return{
                ...state,
                password:action.payload
            }
        default:return state
      }
}
const login_state = {
    email:"",
    password:""
}
export const login_reducer = (state=login_state,action) =>{
    switch(action.type)
    {
        case L_EMAIL:
        return {
            ...state,
            email:action.payload
        }
        case L_PASSWORD: 
               return {
                ...state,
                password:action.payload
            }
        default :return state
    }

}