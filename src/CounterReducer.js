const initialState ={count:10};

function CounterReducer (state, action)  {
    switch (action.type) {
        case "Increment":
            return {count:state.count+1}
        case "Decrement":
            return {count:state.count-1}
        case "Reset":
            return {count:0}
        case "IncrementByPayload":
            return {count:state.count+action.payload}
        case "DecrementByPayload":
            return {count:state.count-action.payload}
        default:
            return state;
    }
}


export {initialState, CounterReducer}