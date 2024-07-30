import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import reducer from "./reducer";
import Singreducer from "./Singreducer";
import thunk from "redux-thunk"; 

const Mainreducer = combineReducers({
  reducer: reducer,
  sing: Singreducer,
});

export const store = legacy_createStore(Mainreducer, applyMiddleware(thunk));
