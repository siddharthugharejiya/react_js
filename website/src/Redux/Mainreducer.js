import { combineReducers } from 'redux';
import { card_fetch, cart_reducer, cartReducer, product_reducer, remove_reducer, single_reducer, Whole_data_reducer  } from './reducer';


export const MainReducer = combineReducers({
    product:product_reducer,
     single: single_reducer,
     cart : cartReducer,
     All : card_fetch ,
     remove_items : remove_reducer ,
     whole_data : Whole_data_reducer
})