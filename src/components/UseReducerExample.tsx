import { useReducer } from "react";

const initialState = {count: 0};

type ACTIONTYPE = 
    { type: "increment"; payload: number } 
    | { type: "decrement"; payload: number }
    | { type: "reset"; payload: number };

function reducer(state: typeof initialState, action: ACTIONTYPE){
    switch (action.type){
        case "increment":
            return {count: state.count + action.payload}
        case "decrement":
            return {count: state.count - (action.payload*2)}
        case "reset":
            return {count: action.payload}
        default: 
            return {count: state.count}
    }
}

export function UseReducerExample(){
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type: "increment", payload: 5})}>+</button>
            <button onClick={() => dispatch({type: "reset", payload: 0})}>0</button>
            <button onClick={() => dispatch({type: "decrement", payload: 5})}>-</button>
        </>
    )
}
