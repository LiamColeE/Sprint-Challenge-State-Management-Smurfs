import { ADD_SMURF, REMOVE_SMURF, GET_SMURFS } from "../actions/actions";

const initialState = {
    smurfs: [
        {}
    ]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SMURF:
            let addSmurfs = action.payload.result
            return {...state, smurfs:addSmurfs};
        case REMOVE_SMURF:
            return state
        case GET_SMURFS:
            let smurfs = action.payload;
            return {...state, smurfs};
        default:
            return state;
    }
}

export default reducer;