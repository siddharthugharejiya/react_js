import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk }from 'redux-thunk'; // For async actions
import { MainReducer } from './Mainreducer';

export const store = createStore(MainReducer,applyMiddleware(thunk))