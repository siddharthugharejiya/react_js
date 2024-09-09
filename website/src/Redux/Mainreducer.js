import { combineReducers } from 'redux';
import { product_reducer } from './reducer';


export const MainReducer = combineReducers({
    product:product_reducer
})