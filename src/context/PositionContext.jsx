import { createContext, useReducer } from "react";

export const PositionContext = createContext();

const initialState = { selectedPosition: null};

function reducer(state, action) {
    switch (action.type) {
        case "SET_POSITION":
            return { ...state, selectedPosition: action.payload };
        default:
            return state;
    }
}

export const PositionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <PositionContext.Provider value={{ state, dispatch }}>
            {children}
        </PositionContext.Provider>
    );
};