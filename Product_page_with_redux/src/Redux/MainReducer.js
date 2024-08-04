import { combineReducers } from 'redux';

import { dataReducer, Login_reducer, signUpReducer } from './reducer';

const MainReducer = combineReducers({
  data: dataReducer,
  signUp: signUpReducer,
  login: Login_reducer,

});

export default MainReducer;
