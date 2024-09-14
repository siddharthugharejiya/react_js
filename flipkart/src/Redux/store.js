import { legacy_createStore , applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { rootReducer } from './rootreducer';

// Create the store using legacy_createStore with rootReducer and thunk middleware
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
