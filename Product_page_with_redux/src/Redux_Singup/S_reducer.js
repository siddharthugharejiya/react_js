import { email, password, username } from "./S_actionType"

const initialState = {
    username: "",
    email: "",
    password: ""
}

export const S_reducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log(state);
    switch (type) {
        case username:
            return {
                ...state,
                username: payload
            }
        case email:
            return {
                ...state,
                email: payload
            }
        case password:
            return {
                ...state,
                password:payload
            }
        default:
      return state
    }
}
