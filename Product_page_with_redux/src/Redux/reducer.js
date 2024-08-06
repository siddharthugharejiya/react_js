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
const s={
    state:null
}
const initialStates = {
  singlePageData: null,
  // other state fields
};

const reducer = (state = initialStates, action) => {
  switch (action.type) {
    case 'FETCH_SINGLE_PAGE_DATA_SUCCESS':
      return {
        ...state,
        singlePageData: action.payload,
      };
    case 'FETCH_SINGLE_PAGE_DATA_FAILURE':
      return {
        ...state,
        singlePageData: null,
        // handle error if needed
      };
    // other cases
    default:
      return state;
  }
};
