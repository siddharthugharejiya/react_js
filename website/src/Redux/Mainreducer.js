import { combineReducers } from 'redux';
import { card_fetch, cart_reducer, product_reducer, single_reducer, Whole_data_reducer  } from './reducer';


export const MainReducer = combineReducers({
    product:product_reducer,
     single: single_reducer,
     cart : cart_reducer,
     All : card_fetch ,
     whole_data : Whole_data_reducer
})