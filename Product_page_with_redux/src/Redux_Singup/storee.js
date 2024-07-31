import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { S_reducer } from "./S_reducer";

export const storee=legacy_createStore(S_reducer,applyMiddleware(thunk))
