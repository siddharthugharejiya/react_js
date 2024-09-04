import { DATA, DATA_ERROR, EMAIL, ERROR, L_EMAIL, L_PASSWORD, PASSWORD, USERNAME } from "./actionType";

const initialState = {
    data: [],
    error: null,
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA:
            return {
                ...state,
                data: action.payload
            };
        case DATA_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

const initialState_sing = {
    username: "",
    email: "",
    password: "",
    error: false,
};

export const signUpReducer = (state = initialState_sing, action) => {
    switch (action.type) {
        case USERNAME:
            return {
                ...state,
                username: action.payload,
            };
        case EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case PASSWORD:
            return {
                ...state,
                password: action.payload,
            };
        case ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

const Login_initialstate = {
    email: null,
    password: null,
};

export const Login_reducer = (state = Login_initialstate, action) => {
    switch (action.type) {
        case L_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case L_PASSWORD:
            return {
                ...state,
                password: action.payload,
            };
        default:
            return state;
    }
};


const initial = {
  singlePageData: {}
};
  
 export const singlepage_reducer = (state = initial, action) => {
  switch (action.type) {
    case 'FETCH_SINGLEPAGE_SUCCESS':
      return {
        ...state,
        singlePageData: action.payload,
      }
    default:
      return state;
  }
}

const initial_cart={
    store:[]
}
 
export const cart_reducer = (state=initial_cart,action)=>{
    switch(action.type)
    {
        case 'cart_items':
            return{
                ...state,
                cart : action.payload
            }
            default:
           return state
    }
}
  
  