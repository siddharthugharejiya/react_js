// rootReducer.js
import { combineReducers } from 'redux';
import Product from '../Components/Home';
import { product_reducer } from './reducer';
// import { product } from './reducer';

export const rootReducer = combineReducers({
   product:product_reducer
});
