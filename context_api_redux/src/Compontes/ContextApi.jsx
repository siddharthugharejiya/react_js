import React, { createContext, useReducer } from "react";

export const Main = createContext();

const initialState = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case "INC":
            return state + 1;
        case "DEC":
            return state - 1;
        default:
            return state;
    }
};

function ContextApi({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Main.Provider value={{ state, dispatch }}>
            {children}
        </Main.Provider>
    );
}

export default ContextApi;
