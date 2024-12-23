import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from 'redux-thunk'; 
import { mainReucer } from "./mainReducer";

export const store = legacy_createStore(mainReucer,applyMiddleware(thunk))