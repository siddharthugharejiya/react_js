import { act } from "react";
import { DATA, EMAIL, L_EMAIL, L_PASSWORD, PASSWORD, USERNAME } from "./action_type";

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
export const login_reducer = (state=login_reducer,action) =>{
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