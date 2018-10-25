import { SET_GRAPH_DATA } from "../actions/type";

const initialState = {
 data: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_GRAPH_DATA:
            return { 
                ...state,
                 data: action.data
            }

        default:
            return state
    }
}
