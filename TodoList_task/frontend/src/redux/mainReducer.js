import { combineReducers } from 'redux';
import { login_reducer, register_reducer, todo_add_reducer, todo_del_reducer, todo_edite, todo_edite_update, todo_get_reducer} from './reducer';
export const mainReucer = combineReducers({
    register : register_reducer,
    login : login_reducer,
    todo_added : todo_add_reducer,
    todo_get : todo_get_reducer,
    todo_delete : todo_del_reducer,
    todo_edite : todo_edite,
    update_todo : todo_edite_update
   
   
})