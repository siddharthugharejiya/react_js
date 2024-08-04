import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import{ thunk }from "redux-thunk";
import MainReducer from "./MainReducer";
export const store = legacy_createStore(MainReducer, applyMiddleware(thunk));
