
import { DATA, SUCCESS, ERROR , LOGIN} from "./actiontype";

const product_initial = {
  data: [],
  loading: false,
};

export const product_reducer = (state = product_initial, action) => {
  switch (action.type) {
    case "DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

const signup_initial = {
  userData: null,
};

export const signup_reducer = (state = signup_initial, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};


const login_initial = {
  email: "",
  password: "",
  error: null, 
};

export const Login_reducer = (state = login_initial, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        error: null,
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
