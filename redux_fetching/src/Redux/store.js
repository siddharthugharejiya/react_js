import { combineReducers, legacy_createStore } from "redux";
import { reducer } from "./reducer"; // Ensure this path is correct
import { Logreducer } from "../LoginReducer/Logreducer"; // Ensure this path is correct

const MainReducer = combineReducers({ 
    reducer, 
    Logreducer 
});

const store = legacy_createStore(MainReducer);

export default store;
