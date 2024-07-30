import { applyMiddleware, legacy_createStore } from "redux"
import reducer from "./reducer"
import { thunk } from "redux-thunk"
import Singreducer from "./Singreducer"


const Mainreducer=combineReducers({
    reducer: reducer,
    sing: Singreducer,
  })

export const store = legacy_createStore(Mainreducer,applyMiddleware(thunk))