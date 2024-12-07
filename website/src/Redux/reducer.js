
import { DATA, EMAIL, L_EMAIL, L_PASSWORD, PASSWORD, SINGLE, SINGLE_DATA, USERNAME } from "./action_type";

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
const cart_reducer_data = {
    data : []
}
export const cart_reducer = (state = cart_reducer_data,action) =>{
    switch(action.type)
    {
     case "CART":
        return {
            ...state,
            data : action.payload
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