import { combineReducers } from 'redux';

import { dataReducer, Login_reducer, signUpReducer, singlepage_reducer } from './reducer';

const MainReducer = combineReducers({
  data: dataReducer,
  signUp: signUpReducer,
  login: Login_reducer,
  singlePage: singlepage_reducer, 
});

export default MainReducer;
