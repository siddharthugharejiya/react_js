import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import reducer from "./reducer";

import {thunk }from "redux-thunk"; 

const Mainreducer = combineReducers({
  reducer: reducer,

});

export const store = legacy_createStore(Mainreducer, applyMiddleware(thunk));
