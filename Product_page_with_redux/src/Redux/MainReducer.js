import { combineReducers } from 'redux';

import { dataReducer, Login_reducer, reducer, signUpReducer, singlepage_reducer } from './reducer';
// import singlepage_reducer from './singlepage_reducer'; // Adjust the import path as necessary

const MainReducer = combineReducers({
  data: dataReducer,
  signUp: signUpReducer,
  reducer: reducer,
  login: Login_reducer,
  singlePage: singlepage_reducer, // Add the singlepage_reducer here
});

export default MainReducer;
