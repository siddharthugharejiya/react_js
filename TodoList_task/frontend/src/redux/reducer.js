import { data, edite_data, email, get_data, password, status, todo_add, username } from "./actionType";

const INITIAL_STATE = {
    username: "",
    email: "",
    password: ""
};

export const register_reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case username:
            return {
                ...state,
                username: action.payload
            }
        case email:
            return {
                ...state,
                email: action.payload
            }
        case password:
            return {
                ...state,
                password: action.payload
            }
        default:
            return state
    }
}

const INITIAL_STATE_For_Login = {
    email: "",
    password: ""
}
export const login_reducer = (state = INITIAL_STATE_For_Login, action) => {
    switch (action.type) {
        case email:
            return {
                ...state,
                email: action.payload
            }
        case password:
            return {
                ...state,
                password: action.payload
            }
        default: return state
    }

}
const todo_add_state = {
    task: ""
}
export const todo_add_reducer = (state = todo_add_state, { type, payload }) => {
    switch (type) {
        case todo_add:
            return {
                ...state,
                task: payload
            }
        default: return state
    }
}
const todo_get_reducer_state = {
    data: []
}
export const todo_get_reducer = (state = todo_get_reducer_state, { type, payload }) => {
    switch (type) {
        case get_data:
            return {
                ...state,
                data: payload
            }
        default: return state
    }

}
const todo_del = {
    data: []
}
export const todo_del_reducer = (state = todo_del, { type, payload }) => {
    switch (type) {
        case todo_del:
            return {
                ...state,
                data: payload
            }
        default: return state
    }
}
const todo_edite_reducer_initial = {
    data : []
}
export const todo_edite_reducer = (state = todo_edite_reducer_initial, { type, payload }) => {
    switch (type) {
        case edite_data:
            return {
                ...state,
                data : payload
            }
        default:
            return state;
    }
}
