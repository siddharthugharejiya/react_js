// rootReducer.js
import { combineReducers } from 'redux';
import { Login_reducer, product_reducer, signup_reducer } from './reducer';
// import { product } from './reducer';

export const rootReducer = combineReducers({
   product:product_reducer,
    signup: signup_reducer,
   login: Login_reducer
});
