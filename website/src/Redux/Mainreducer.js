import { combineReducers } from 'redux';
import { cart_reducer, product_reducer, single_reducer  } from './reducer';


export const MainReducer = combineReducers({
    product:product_reducer,
     single: single_reducer,
     cart : cart_reducer
})